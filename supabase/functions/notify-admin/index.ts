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

function renderSection(title: string, content: string) {
  if (!content || content.trim() === '') return '';
  return `
    <div style="margin-bottom: 25px;">
      <h3 style="color: #1e3a8a; margin: 0 0 10px 0; font-size: 16px; border-bottom: 1px solid #eaeaea; padding-bottom: 5px;">${escapeHtml(title).toUpperCase()}</h3>
      <div style="font-size: 14px; color: #333; line-height: 1.6;">
        ${content}
      </div>
    </div>
  `;
}

function renderField(label: string, value: any) {
  if (value === undefined || value === null || value === '' || (Array.isArray(value) && value.length === 0)) return '';
  const displayValue = Array.isArray(value) ? value.join(', ') : String(value);
  return `<div style="margin-bottom: 5px;"><strong>${escapeHtml(label)}:</strong><br/>${escapeHtml(displayValue).replace(/\n/g, '<br/>')}</div>`;
}

async function fetchWithRetry(fetcher: () => Promise<any[]>, retries = 5, delayMs = 1000): Promise<any[]> {
  for (let i = 0; i < retries; i++) {
    const data = await fetcher();
    if (data && data.length > 0) return data;
    await new Promise(res => setTimeout(res, delayMs));
  }
  return [];
}

serve(async (req) => {
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
      return new Response(JSON.stringify({ message: "Ignored non-insert event" }), { status: 200 });
    }
    
    let requestType = "Unknown Request";
    let referenceId = record.id || record.ref_id || 'N/A';
    let customerDetails = '';
    let requestDetails = '';
    let selectedService = '';
    let caseInformation = '';
    let additionalInfo = '';
    let uploadedDocs = '';
    let attachments: any[] = [];

    // Helper to download files
    const downloadAndAttach = async (paths: string[], getFilename: (p: string) => string) => {
      let docList = '';
      for (const path of paths) {
        const cleanPath = path.trim();
        if (!cleanPath) continue;
        const { data: fileBlob, error: downloadError } = await supabase.storage.from('prescriptions').download(cleanPath);
        if (downloadError) {
          console.error(`Failed to download ${cleanPath}:`, downloadError);
          continue;
        }
        const arrayBuffer = await fileBlob.arrayBuffer();
        const filename = getFilename(cleanPath);
        attachments.push({ filename, content: encodeBase64(arrayBuffer) });
        docList += `<li>${escapeHtml(filename)}</li>`;
      }
      return docList ? `<ul>${docList}</ul>` : '';
    };

    if (table === 'bookings') {
      requestType = record.collection_method === 'Home Collection' ? "Home Collection Booking" : "Walk-in Booking";
      referenceId = record.ref_id || record.id;
      
      const tests = await fetchWithRetry(async () => {
        const { data } = await supabase.from('booking_tests').select('*, tests(*)').eq('booking_id', record.id);
        return data || [];
      });
      const packages = await fetchWithRetry(async () => {
        const { data } = await supabase.from('booking_packages').select('*, packages(*)').eq('booking_id', record.id);
        return data || [];
      });
      const { data: patient } = await supabase.from('patients').select('*').eq('id', record.patient_id).single();

      customerDetails += renderField('Name', patient?.name);
      customerDetails += renderField('Age', patient?.age);
      customerDetails += renderField('Gender', patient?.gender);
      customerDetails += renderField('Mobile', patient?.mobile);
      customerDetails += renderField('Email', patient?.email);
      
      requestDetails += renderField('Collection Method', record.collection_method);
      if (record.collection_method === 'Home Collection') {
        requestDetails += renderField('Address', [record.address_line1, record.address_line2, record.area, record.city, record.state, record.pincode].filter(Boolean).join(', '));
        requestDetails += renderField('Preferred Date', record.appointment_date);
        requestDetails += renderField('Preferred Time', record.appointment_time);
      }
      requestDetails += renderField('Status', record.status);
      
      additionalInfo += renderField('Notes', record.notes);
      
      let itemsList = '';
      let testCount = 0;
      let packageCount = 0;
      if (tests.length > 0) {
        itemsList += '<strong>BOOKED TESTS:</strong><ol style="margin-top:5px; margin-bottom:15px;">';
        tests.forEach(t => { 
          const name = t.tests?.name || t.test_id;
          const cat = t.tests?.category ? ` (${t.tests.category})` : '';
          itemsList += `<li>${escapeHtml(name)}${escapeHtml(cat)} &mdash; ₹${t.price_at_booking}</li>`; 
          testCount++;
        });
        itemsList += '</ol>';
      }
      if (packages.length > 0) {
        itemsList += '<strong>SELECTED PACKAGE:</strong><ol style="margin-top:5px; margin-bottom:15px;">';
        packages.forEach(p => { 
          const name = p.packages?.name || p.package_id;
          itemsList += `<li>${escapeHtml(name)} &mdash; ₹${p.price_at_booking}</li>`; 
          packageCount++;
        });
        itemsList += '</ol>';
      }
      if (itemsList) {
        selectedService = itemsList + `<p><strong>TOTAL AMOUNT:</strong> ₹${record.total_price}</p>`;
      }
      
      if (testCount > 0 && packageCount === 0) requestType = "Individual Test Booking";
      if (packageCount > 0 && testCount === 0) requestType = "Clinical Health Package Booking";
      if (packageCount > 0 && testCount > 0) requestType = "Mixed Test & Package Booking";

      // File attachment logic? Bookings don't upload files directly, but let's check prescription_requests?
      // Bookings just have items.

    } else if (table === 'second_opinion_requests') {
      requestType = "Pathology Second Opinion";
      
      customerDetails += renderField('Name', record.patient_name);
      customerDetails += renderField('Mobile', record.mobile);
      customerDetails += renderField('Email', record.email);
      
      // Parse case_description which has "Role: \nDoctor: \nHospital: \n\nCase Details: "
      let rawMessage = record.case_description || '';
      let role = '', doctor = '', hospital = '', details = '';
      
      if (rawMessage.includes('Role: ')) {
        const parts = rawMessage.split('\n');
        parts.forEach(p => {
          if (p.startsWith('Role: ')) role = p.replace('Role: ', '').trim();
          else if (p.startsWith('Doctor: ')) doctor = p.replace('Doctor: ', '').trim();
          else if (p.startsWith('Hospital: ')) hospital = p.replace('Hospital: ', '').trim();
        });
      }
      
      if (rawMessage.includes('Case Details: ')) {
        details = rawMessage.split('Case Details: ')[1].trim();
      } else {
        details = rawMessage;
      }
      
      customerDetails += renderField('Role', role);
      customerDetails += renderField('Referring Doctor', doctor);
      customerDetails += renderField('Hospital', hospital);
      
      caseInformation += renderField('Case Details / Clinical History', details);
      
      selectedService = renderField('Service', 'Pathology Second Opinion & Slide Review');
      
      const filesData = await fetchWithRetry(async () => {
        const { data } = await supabase.from('second_opinion_files').select('*').eq('request_id', record.id);
        return data || [];
      });
      if (filesData.length > 0) {
        uploadedDocs = await downloadAndAttach(filesData.map(f => f.file_path), p => filesData.find(f => f.file_path === p)?.file_name || 'document.pdf');
      }

    } else if (table === 'service_requests') {
      requestType = record.service_name.toLowerCase().includes('cancer') || record.service_name.toLowerCase().includes('tumour') || record.service_name.toLowerCase().includes('oncopathology') ? "Specialist Pathology Review" : "Specialist Pathology Services";
      selectedService = renderField('Service', record.service_name);
      
      customerDetails += renderField('Name', record.patient_name);
      customerDetails += renderField('Mobile', record.mobile);
      customerDetails += renderField('Email', record.email);
      
      let rawMessage = record.message || '';
      let storagePaths: string[] = [];
      let uploadedUrlsList = '';
      
      if (rawMessage.includes('_STORAGE_PATHS_:')) {
        const parts = rawMessage.split('_STORAGE_PATHS_:');
        rawMessage = parts[0].trim();
        const pathsStr = parts[1].trim();
        if (pathsStr) storagePaths = pathsStr.split(',');
      }
      if (rawMessage.includes('Attachments:\\n') || rawMessage.includes('Attachments:\n')) {
        const sep = rawMessage.includes('Attachments:\\n') ? 'Attachments:\\n' : 'Attachments:\n';
        const parts = rawMessage.split(sep);
        rawMessage = parts[0].trim();
        uploadedUrlsList = parts[1].trim();
      }
      
      let patientInfoText = rawMessage;
      let caseDetailsObj: any = {};
      if (rawMessage.includes('Case Details: ')) {
        const parts = rawMessage.split('Case Details: ');
        patientInfoText = parts[0].trim();
        const jsonStr = parts[1].trim();
        try { caseDetailsObj = JSON.parse(jsonStr); } catch(e) { caseDetailsObj = { "Raw Data": jsonStr }; }
      }
      
      // patientInfoText contains Age, Gender, Doctor, Hospital
      const pParts = patientInfoText.split('\n');
      pParts.forEach(p => {
        if (p.startsWith('Age:')) customerDetails += renderField('Age/Gender', p); // Age: 34, Gender: Male
        else if (p.startsWith('Doctor:')) customerDetails += renderField('Referring Doctor', p.replace('Doctor:', '').trim());
        else if (p.startsWith('Hospital:')) customerDetails += renderField('Hospital', p.replace('Hospital:', '').trim());
        else if (p.trim()) additionalInfo += renderField('Info', p.trim());
      });

      const formatLabel = (key: string) => {
        const labels: Record<string, string> = {
          caseDesc: 'Case Information / Description',
          specimenType: 'Specimen / Sample Details',
          specimenAvailable: 'Specimen Available',
          prevReport: 'Previous Report / Diagnosis Information',
          prevIhc: 'Previous IHC Available',
          prevDiagnosis: 'Previous Diagnosis',
          sampleType: 'Sample Type',
          purpose: 'Purpose',
          prevHisto: 'Previous Histopathology Available',
          materialTypes: 'Material Types',
          selectedTests: 'Selected Tests',
          clinicalInfo: 'Clinical History / Details',
          cancerType: 'Cancer / Tumour Type',
          biopsySite: 'Biopsy Site',
          biopsyDate: 'Biopsy Date',
          stage: 'Stage'
        };
        return labels[key] || key.charAt(0).toUpperCase() + key.slice(1);
      };

      if (Object.keys(caseDetailsObj).length > 0) {
        for (const [key, value] of Object.entries(caseDetailsObj)) {
          if (value === undefined || value === null || value === '' || (Array.isArray(value) && value.length === 0)) continue;
          caseInformation += renderField(formatLabel(key), value);
        }
      }

      if (storagePaths.length > 0) {
        uploadedDocs = await downloadAndAttach(storagePaths, p => p.split('/').pop() || 'document.pdf');
      }

    } else if (table === 'contact_enquiries') {
      requestType = "Send an Enquiry";
      customerDetails += renderField('Name', record.name);
      customerDetails += renderField('Mobile', record.mobile);
      customerDetails += renderField('Email', record.email);
      caseInformation += renderField('Enquiry Message', record.message);
      
    } else if (table === 'prescription_requests') {
      requestType = "Prescription / Document Upload";
      customerDetails += renderField('Name', record.patient_name);
      customerDetails += renderField('Mobile', record.mobile);
      requestDetails += renderField('Status', record.status);
      
      const filesData = await fetchWithRetry(async () => {
        const { data } = await supabase.from('prescription_files').select('*').eq('request_id', record.id);
        return data || [];
      });
      if (filesData.length > 0) {
        uploadedDocs = await downloadAndAttach(filesData.map(f => f.file_path), p => filesData.find(f => f.file_path === p)?.file_name || 'document.pdf');
      }
    } else {
      return new Response(JSON.stringify({ message: "Table not supported for notifications" }), { status: 200 });
    }

    if (!resendApiKey) throw new Error("Missing RESEND_API_KEY");

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; color: #111; line-height: 1.6; border: 1px solid #e2e8f0; border-radius: 8px; padding: 30px; background-color: #ffffff;">
        <h2 style="margin: 0 0 20px 0; color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; font-size: 20px;">NEW CRL REQUEST</h2>
        
        ${renderSection('Request Type', requestType)}
        ${renderSection('Reference', referenceId)}
        ${renderSection('Customer / Patient Details', customerDetails)}
        ${renderSection('Selected Service / Test / Package', selectedService)}
        ${renderSection('Request Details', requestDetails)}
        ${renderSection('Case Information', caseInformation)}
        ${renderSection('Additional Information', additionalInfo)}
        ${renderSection('Uploaded Documents', uploadedDocs)}
        ${renderSection('Submitted At', new Date(record.created_at || new Date()).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }))}
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center;">
          <a href="${adminDashboardUrl}" style="display:inline-block;padding:12px 24px;background:#1e40af;color:#fff;text-decoration:none;border-radius:6px;font-weight:bold;">View in Admin Dashboard</a>
          <p style="margin-top: 15px; font-size: 12px; color: #64748b;">This is an automated notification from your website. Do not reply to this email directly.</p>
        </div>
      </div>
    `;

    const payloadObj: any = {
      from: 'CRL Notifications <notifications@secondopinioncrl.com>',
      to: [adminEmail],
      subject: `New ${requestType} - ${referenceId}`,
      html: htmlBody
    };

    if (attachments.length > 0) payloadObj.attachments = attachments;

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${resendApiKey}` },
      body: JSON.stringify(payloadObj)
    });

    if (!res.ok) throw new Error(await res.text());

    return new Response(JSON.stringify({ success: true, message: "Email sent" }), { status: 200 });
  } catch (error: any) {
    console.error("Webhook processing error:", error.message);
    return new Response(JSON.stringify({ error: "Internal Error" }), { status: 500 });
  }
});
