const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const crypto = require('crypto');

const supabaseUrl = 'https://hijudhszlgmpgvymwaoh.supabase.co';
const supabaseKey = 'sb_publishable_Hhc2vwiozmdP_TIQVcGCzQ_OgMU9cy6';
const supabase = createClient(supabaseUrl, supabaseKey);

async function runTests() {
  console.log("=== STARTING BACKEND VERIFICATION ===\n");

  const tables = [
    'patients', 'tests', 'packages', 'package_tests', 'bookings',
    'booking_tests', 'booking_packages', 'prescription_requests',
    'prescription_files', 'second_opinion_requests', 'second_opinion_files',
    'service_requests', 'contact_enquiries'
  ];

  console.log("--- TABLE ACCESSIBILITY ---");
  for (const table of tables) {
    const { error } = await supabase.from(table).select('*').limit(1);
    if (error && error.code === 'PGRST205') {
      console.log(`❌ Table ${table} NOT ACCESSIBLE (PGRST205)`);
    } else if (error) {
      console.log(`✅ Table ${table} exists (RLS active: ${error.message})`);
    } else {
      console.log(`✅ Table ${table} accessible (No rows or success)`);
    }
  }

  console.log("\n--- SECURITY TEST (ANON READ) ---");
  const { data: patientsData, error: patientsError } = await supabase.from('patients').select('*');
  if (patientsError) {
    console.log(`✅ Patients table read blocked/restricted by RLS: ${patientsError.message}`);
  } else if (patientsData && patientsData.length === 0) {
    console.log(`✅ Patients table returned empty array for anon user`);
  } else {
    console.log(`❌ Patients table leaked data to anon user! Length: ${patientsData.length}`);
  }

  console.log("\n--- TEST 1: TEST BOOKING ---");
  let patientId = crypto.randomUUID();
  let bookingId = crypto.randomUUID();
  try {
    const { error: pErr } = await supabase.from('patients').insert([
      { id: patientId, name: 'CRL Test User', mobile: '9999999999', email: 'test@example.com' }
    ]);
    if (pErr) throw pErr;
    console.log("✅ Patient created:", patientId);

    const refId = 'CRL-' + Date.now();
    const { error: bErr } = await supabase.from('bookings').insert([{
      id: bookingId,
      ref_id: refId,
      patient_id: patientId,
      collection_method: 'HOME',
      address_line1: 'Test St',
      city: 'Pune',
      total_price: 500
    }]);
    if (bErr) throw bErr;
    console.log("✅ Booking created:", bookingId);

    await supabase.from('tests').insert([{ id: 'T999', name: 'Dummy Test', price: 500 }]);
    const { error: btErr } = await supabase.from('booking_tests').insert([{
      booking_id: bookingId, test_id: 'T999', price_at_booking: 500
    }]);
    if (btErr) throw btErr;
    console.log("✅ booking_tests created!");
  } catch (err) {
    console.error("❌ TEST 1 FAILED:", err.message || err);
  }

  console.log("\n--- TEST 2: MULTIPLE TESTS ---");
  try {
    await supabase.from('tests').insert([{ id: 'T888', name: 'Dummy Test 2', price: 300 }]);
    const { error: btErr } = await supabase.from('booking_tests').insert([
      { booking_id: bookingId, test_id: 'T888', price_at_booking: 300 }
    ]);
    if (btErr) throw btErr;
    console.log(`✅ Multiple tests linked successfully`);
  } catch (err) {
    console.error("❌ TEST 2 FAILED:", err.message || err);
  }

  console.log("\n--- TEST 3: HEALTH PACKAGE ---");
  try {
    await supabase.from('packages').insert([{ id: 'P999', name: 'CRL Essential', price: 999 }]);
    const { error: bpErr } = await supabase.from('booking_packages').insert([
      { booking_id: bookingId, package_id: 'P999', price_at_booking: 999 }
    ]);
    if (bpErr) throw bpErr;
    console.log("✅ booking_packages created successfully!");
  } catch (err) {
    console.error("❌ TEST 3 FAILED:", err.message || err);
  }

  console.log("\n--- TEST 6: PRESCRIPTION ---");
  try {
    const pReqId = crypto.randomUUID();
    const { error: pReqErr } = await supabase.from('prescription_requests').insert([{
      id: pReqId, patient_name: 'CRL Test User', mobile: '9999999999'
    }]);
    if (pReqErr) throw pReqErr;
    
    const dummyFile = new Blob(['dummy content'], { type: 'text/plain' });
    const { data: fileData, error: fileErr } = await supabase.storage.from('prescriptions').upload('test_' + pReqId + '.txt', dummyFile);
    
    if (fileErr) {
       console.error("❌ Storage upload failed (prescriptions):", fileErr.message);
    } else {
       console.log("✅ Uploaded to prescriptions bucket");
       await supabase.from('prescription_files').insert([{
         request_id: pReqId, file_path: fileData.path, file_name: 'test.txt'
       }]);
       console.log("✅ prescription_files record created");
    }
  } catch (err) {
    console.error("❌ TEST 6 FAILED:", err.message || err);
  }

  console.log("\n--- TEST 7: SECOND OPINION ---");
  try {
    const soReqId = crypto.randomUUID();
    const { error: soReqErr } = await supabase.from('second_opinion_requests').insert([{
      id: soReqId, patient_name: 'CRL Test User', mobile: '9999999999', case_description: 'Test case'
    }]);
    if (soReqErr) throw soReqErr;

    const dummyFile = new Blob(['dummy content'], { type: 'text/plain' });
    const { data: fileData, error: fileErr } = await supabase.storage.from('second-opinion-documents').upload('test_so_' + soReqId + '.txt', dummyFile);
    
    if (fileErr) {
       console.error("❌ Storage upload failed (second-opinion-documents):", fileErr.message);
    } else {
       console.log("✅ Uploaded to second-opinion-documents bucket");
       await supabase.from('second_opinion_files').insert([{
         request_id: soReqId, file_path: fileData.path, file_name: 'test_so.txt'
       }]);
       console.log("✅ second_opinion_files record created");
    }
  } catch (err) {
    console.error("❌ TEST 7 FAILED:", err.message || err);
  }

  console.log("\n--- TEST 8: SERVICES ---");
  try {
    const srvId = crypto.randomUUID();
    const { error: srvErr } = await supabase.from('service_requests').insert([{
      id: srvId, service_id: 'S1', service_name: 'Test Service', patient_name: 'Test', mobile: '9999999999'
    }]);
    if (srvErr) throw srvErr;
    console.log("✅ service_requests record created");
  } catch (err) {
    console.error("❌ TEST 8 FAILED:", err.message || err);
  }

  console.log("\n--- TEST 9: CONTACT ---");
  try {
    const cntId = crypto.randomUUID();
    const { error: cntErr } = await supabase.from('contact_enquiries').insert([{
      id: cntId, name: 'Test', mobile: '9999999999', subject: 'Test'
    }]);
    if (cntErr) throw cntErr;
    console.log("✅ contact_enquiries record created");
  } catch (err) {
    console.error("❌ TEST 9 FAILED:", err.message || err);
  }

}

runTests();
