const { createClient } = require('@supabase/supabase-js');

async function testBooking() {
  const supabase = createClient(
    'https://hijudhszlgmpgvymwaoh.supabase.co',
    'sb_publishable_Hhc2vwiozmdP_TIQVcGCzQ_OgMU9cy6'
  );

  console.log("Testing connection...");
  const { data, error } = await supabase.from('patients').insert([{
    name: 'CRL Test User',
    mobile: '9999999999',
    email: 'test@example.com'
  }]).select().single();

  if (error) {
    console.error("Test booking failed!");
    console.error(JSON.stringify(error, null, 2));
  } else {
    console.log("Test booking successful!", data);
  }
}

testBooking();
