import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { encode as encodeBase64 } from "https://deno.land/std@0.168.0/encoding/base64.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

function escapeHtml(unsafe: any) {
  if (unsafe == null) return '';
  return String(unsafe)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Polling mechanism to resolve Webhook race conditions (front-end inserts _files rows immediately after main row)
async function fetchWithRetry(fetcher: () => Promise<any[]>, retries = 5, delayMs = 1000): Promise<any[]> {
  for (let i = 0; i < retries; i++) {
    const data = await fetcher();
    if (data && data.length > 0) return data;
    await new Promise(res => setTimeout(res, delayMs));
  }
  return [];
}

serve(async (req) => {
  // CRITICAL FIX: Initialize Supabase client INSIDE the serve handler. 
  // Deno Edge Functions inject environment variables (like SUPABASE_SERVICE_ROLE_KEY) per-request context.
  // Initializing globally causes the client to miss the Service Role Key, acting as an anonymous user 
  // and receiving 'Object not found' from private storage buckets.
  const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
  const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  const resendApiKey = Deno.env.get('RESEND_API_KEY');
  const adminEmail = Deno.env.get('ADMIN_NOTIFICATION_EMAIL') || 'secondopinioncrl@gmail.com';
  const adminDashboardUrl = 'https://secondopinioncrl.com/admin';

  try {
    const payload = await req.json();
    const { type, table, record } = payload;
    
    if (type !== 'INSERT') {
      return new Response(JSON.stringify({ message: "Ignored non-insert event" }), { 
        status: 200, 
        headers: { "Content-Type": "application/json" } 
      });
    }
    
    let subject = "New Notification from CRL Website";
    let htmlContent = "<h2>New Submission</h2>";
    let attachments: any[] = [];
    
    if (table === 'bookings') {
      subject = `New Booking: ${escapeHtml(record.ref_id)}`;
      
      const tests = await fetchWithRetry(async () => {
        const { data } = await supabase.from('booking_tests').select('*, tests(*)').eq('booking_id', record.id);
        return data || [];
      });
      
      const packages = await fetchWithRetry(async () => {
        const { data } = await supabase.from('booking_packages').select('*, packages(*)').eq('booking_id', record.id);
        return data || [];
      });

      const { data: patient } = await supabase.from('patients').select('*').eq('id', record.patient_id).single();

      let itemsHtml = "<ul>";
      if (tests.length > 0) {
        tests.forEach(t => { itemsHtml += `<li>Test: ${escapeHtml(t.tests?.name || t.test_id)} (₹${escapeHtml(t.price_at_booking)})</li>`; });
      }
      if (packages.length > 0) {
        packages.forEach(p => { itemsHtml += `<li>Package: ${escapeHtml(p.packages?.name || p.package_id)} (₹${escapeHtml(p.price_at_booking)})</li>`; });
      }
      if (tests.length === 0 && packages.length === 0) {
        itemsHtml += "<li>Items pending or not found.</li>";
      }
      itemsHtml += "</ul>";
      
      htmlContent = `
        <h2>New Booking Received (${escapeHtml(record.collection_method)})</h2>
        <p><strong>Reference ID:</strong> ${escapeHtml(record.ref_id)}</p>
        <p><strong>Patient Name:</strong> ${escapeHtml(patient?.name || 'Unknown')}</p>
        <p><strong>Patient Contact:</strong> ${escapeHtml(patient?.mobile || 'Unknown')}</p>
        <hr />
        <h3>Booking Items:</h3>
        ${itemsHtml}
        <hr />
        <p><strong>Total Amount:</strong> ₹${escapeHtml(record.total_price)}</p>
        <p><strong>Status:</strong> ${escapeHtml(record.status)}</p>
        <br />
        <p>Please log in to the admin dashboard for full patient details.</p>
        <a href="${adminDashboardUrl}" style="display:inline-block;padding:10px 20px;background:#000;color:#fff;text-decoration:none;border-radius:5px;">Go to Dashboard</a>
      `;
      
    } else if (table === 'second_opinion_requests') {
      subject = `New Second Opinion Request (${escapeHtml(record.id).split('-')[0]})`;
      htmlContent = `
        <h2>New Second Opinion Case</h2>
        <p><strong>Patient Name:</strong> ${escapeHtml(record.patient_name)}</p>
        <p><strong>Contact:</strong> ${escapeHtml(record.mobile)}</p>
        <p><strong>Email:</strong> ${escapeHtml(record.email) || 'N/A'}</p>
        <hr />
        <p><strong>Note:</strong> Uploaded documents are attached securely to this email.</p>
        <br />
        <p>Please log in securely to the admin dashboard to review the full case details:</p>
        <a href="${adminDashboardUrl}" style="display:inline-block;padding:10px 20px;background:#2563eb;color:#fff;text-decoration:none;border-radius:5px;">Secure Admin Access</a>
      `;
      
      const filesData = await fetchWithRetry(async () => {
        const { data } = await supabase.from('second_opinion_files').select('*').eq('request_id', record.id);
        return data || [];
      });
        
      if (filesData.length > 0) {
        for (const file of filesData) {
          const { data: fileBlob, error: downloadError } = await supabase.storage.from('prescriptions').download(file.file_path);
          if (downloadError) {
            console.error(`Failed to download attachment ${file.file_path}:`, downloadError);
            throw downloadError;
          }
          const arrayBuffer = await fileBlob.arrayBuffer();
          const base64String = encodeBase64(arrayBuffer);
          attachments.push({
            filename: file.file_name,
            content: base64String
          });
        }
      }
      
    } else if (table === 'service_requests') {
      subject = `New Service Request: ${escapeHtml(record.service_name)}`;
      
      let rawMessage = record.message || '';
      let storagePaths: string[] = [];
      let uploadedUrlsList = '';
      
      // 1. Extract storage paths
      if (rawMessage.includes('_STORAGE_PATHS_:')) {
        const parts = rawMessage.split('_STORAGE_PATHS_:');
        rawMessage = parts[0].trim();
        const pathsStr = parts[1].trim();
        if (pathsStr) {
          storagePaths = pathsStr.split(',');
        }
      }

      // 2. Extract Attachments list
      if (rawMessage.includes('Attachments:\n')) {
        const parts = rawMessage.split('Attachments:\n');
        rawMessage = parts[0].trim();
        uploadedUrlsList = parts[1].trim();
      }

      // 3. Extract JSON from Case Details
      let patientInfoText = rawMessage;
      let caseDetailsObj: any = {};
      
      if (rawMessage.includes('Case Details: ')) {
        const parts = rawMessage.split('Case Details: ');
        patientInfoText = parts[0].trim();
        const jsonStr = parts[1].trim();
        try {
          caseDetailsObj = JSON.parse(jsonStr);
        } catch(e) {
          caseDetailsObj = { "Raw Data": jsonStr };
        }
      }

      // Format case details into readable HTML
      const formatLabel = (key: string) => {
        const labels: Record<string, string> = {
          caseDesc: 'Case Information / Description',
          specimenType: 'Specimen Type',
          specimenAvailable: 'Specimen Available',
          prevReport: 'Previous Report Available',
          prevIhc: 'Previous IHC Available',
          prevDiagnosis: 'Previous Diagnosis',
          sampleType: 'Sample Type',
          purpose: 'Purpose',
          prevHisto: 'Previous Histopathology Available',
          materialTypes: 'Material Types',
          selectedTests: 'Selected Tests',
          clinicalInfo: 'Clinical Information'
        };
        return labels[key] || key;
      };

      let caseDetailsHtml = '';
      if (Object.keys(caseDetailsObj).length > 0) {
        for (const [key, value] of Object.entries(caseDetailsObj)) {
          if (value === undefined || value === null || value === '' || (Array.isArray(value) && value.length === 0)) {
            continue;
          }
          let displayValue = String(value);
          if (Array.isArray(value)) {
             displayValue = value.join(', ');
          }
          caseDetailsHtml += `<p style="margin-bottom:8px;"><strong>${escapeHtml(formatLabel(key))}:</strong><br/>${escapeHtml(displayValue).replace(/\n/g, '<br/>')}</p>`;
        }
      } else {
         caseDetailsHtml = '<p>No additional case details provided.</p>';
      }

      htmlContent = `
        <h2>New ${escapeHtml(record.service_name)} Request</h2>
        <p><strong>Reference:</strong> ${escapeHtml(record.id || 'N/A')}</p>
        
        <h3>Patient / Contact Details</h3>
        <p><strong>Patient Name:</strong> ${escapeHtml(record.patient_name)}</p>
        <p><strong>Contact:</strong> ${escapeHtml(record.mobile)}</p>
        <p><strong>Email:</strong> ${escapeHtml(record.email) || 'N/A'}</p>
        <p>${escapeHtml(patientInfoText).replace(/\n/g, '<br/>')}</p>
        
        <hr />
        <h3>Case Information</h3>
        ${caseDetailsHtml}
        
        ${uploadedUrlsList ? `
        <hr />
        <h3>Uploaded Documents</h3>
        <p>${escapeHtml(uploadedUrlsList).replace(/\n/g, '<br/>')}</p>
        ` : ''}

        <br />
        <p><strong>Note:</strong> Uploaded documents (if any) are attached securely to this email.</p>
        <a href="${adminDashboardUrl}" style="display:inline-block;padding:10px 20px;background:#2563eb;color:#fff;text-decoration:none;border-radius:5px;">View in Dashboard</a>
      `;
      
      if (storagePaths.length > 0) {
        for (const path of storagePaths) {
          const cleanPath = path.trim();
          if (!cleanPath) continue;

          
          const { data: fileBlob, error: downloadError } = await supabase.storage.from('prescriptions').download(cleanPath);
          if (downloadError) {
            console.error(`Failed to download attachment ${cleanPath}:`, downloadError);
            throw downloadError;
          }
          const arrayBuffer = await fileBlob.arrayBuffer();
          const base64String = encodeBase64(arrayBuffer);
          const filename = cleanPath.split('/').pop() || 'attachment.pdf';
          attachments.push({
            filename: filename,
            content: base64String
          });
        }
      }

    } else if (table === 'prescription_requests') {
      subject = `New Prescription/Document Upload`;
      htmlContent = `
        <h2>New Document Upload</h2>
        <p><strong>Patient Name:</strong> ${escapeHtml(record.patient_name)}</p>
        <p><strong>Contact:</strong> ${escapeHtml(record.mobile)}</p>
        <p><strong>Status:</strong> ${escapeHtml(record.status)}</p>
        <hr />
        <p>Uploaded documents are attached securely to this email. You can also view them in the admin dashboard.</p>
        <a href="${adminDashboardUrl}" style="display:inline-block;padding:10px 20px;background:#2563eb;color:#fff;text-decoration:none;border-radius:5px;">Secure Admin Access</a>
      `;
      
      const filesData = await fetchWithRetry(async () => {
        const { data } = await supabase.from('prescription_files').select('*').eq('request_id', record.id);
        return data || [];
      });
        
      if (filesData.length > 0) {
        for (const file of filesData) {
          const { data: fileBlob, error: downloadError } = await supabase.storage.from('prescriptions').download(file.file_path);
          if (downloadError) {
            console.error(`Failed to download attachment ${file.file_path}:`, downloadError);
            throw downloadError;
          }
          const arrayBuffer = await fileBlob.arrayBuffer();
          const base64String = encodeBase64(arrayBuffer);
          attachments.push({
            filename: file.file_name,
            content: base64String
          });
        }
      }

    } else if (table === 'contact_enquiries') {
      subject = `New Contact Enquiry from ${escapeHtml(record.name)}`;
      htmlContent = `
        <h2>New Enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(record.name)}</p>
        <p><strong>Contact:</strong> ${escapeHtml(record.mobile)}</p>
        <p><strong>Email:</strong> ${escapeHtml(record.email) || 'N/A'}</p>
        <hr />
        <p><strong>Message:</strong><br/>${escapeHtml(record.message)?.replace(/\n/g, '<br/>')}</p>
      `;
    } else {
      return new Response(JSON.stringify({ message: "Table not supported for notifications" }), { 
        status: 200, 
        headers: { "Content-Type": "application/json" } 
      });
    }

    if (!resendApiKey) {
      console.error("Missing RESEND_API_KEY environment variable.");
      return new Response(JSON.stringify({ error: "Missing RESEND_API_KEY environment variable. Email cannot be sent." }), { 
        status: 500, 
        headers: { "Content-Type": "application/json" } 
      });
    }

    const payloadObj: any = {
      from: 'CRL Notifications <notifications@secondopinioncrl.com>',
      to: [adminEmail],
      subject: subject,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;">
          <div style="border-bottom: 2px solid #eaeaea; padding-bottom: 10px; margin-bottom: 20px;">
            <h1 style="color: #1e3a8a; margin: 0; font-size: 24px;">SECOND OPINION CRL</h1>
            <p style="color: #64748b; margin: 5px 0 0 0; font-size: 14px;">Specialist Pathology Second Opinion & Diagnostic Consultation</p>
          </div>
          ${htmlContent}
          <div style="margin-top: 30px; font-size: 12px; color: #94a3b8; border-top: 1px solid #eaeaea; padding-top: 10px;">
            This is an automated notification from your website. Do not reply to this email directly.
          </div>
        </div>
      `
    };

    if (attachments.length > 0) {
      payloadObj.attachments = attachments;
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`
      },
      body: JSON.stringify(payloadObj)
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Resend API Error:", errorText);
      return new Response(JSON.stringify({ error: "Failed to send email via Resend", details: errorText }), { 
        status: 502, 
        headers: { "Content-Type": "application/json" } 
      });
    }

    return new Response(JSON.stringify({ success: true, message: "Email sent successfully", attachmentsCount: attachments.length }), { 
      status: 200, 
      headers: { "Content-Type": "application/json" } 
    });
  } catch (error: any) {
    console.error("Webhook processing error:", error.message);
    return new Response(JSON.stringify({ error: "Internal Server Error", details: error.message }), { 
      status: 500, 
      headers: { "Content-Type": "application/json" } 
    });
  }
});
