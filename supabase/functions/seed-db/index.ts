import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const localTests = [
  {"id":"crl007","name":"PT / INR","category":"Clinical - Hematology","price":350,"price_status":"Confirmed"},
  {"id":"t22","name":"aPTT","category":"Clinical - Hematology","price":400,"price_status":"Confirmed"},
  {"id":"t25","name":"D-Dimer","category":"Clinical - Hematology","price":1000,"price_status":"Confirmed"},
  {"id":"crl074","name":"ACTH","category":"Clinical - Endocrinology / Hormones","price":1200,"price_status":"Confirmed"},
  {"id":"crl005","name":"Absolute Eosinophil Count","category":"Clinical - Hematology","price":100,"price_status":"Confirmed"}
  // Wait, I need ALL 390+ tests here, or I can just import them if I compile it or copy the whole array.
];

serve(async (req) => {
  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Read payload
    const { tests, packages } = await req.json();

    const { error: tError } = await supabaseClient.from('tests').upsert(tests, { onConflict: 'id' });
    if (tError) throw tError;

    if (packages && packages.length > 0) {
      const { error: pError } = await supabaseClient.from('packages').upsert(packages, { onConflict: 'id' });
      if (pError) throw pError;
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { 'Content-Type': 'application/json' },
      status: 400,
    });
  }
})
