import fs from 'fs';
import { tests as localTests } from './src/data/tests.ts';
import { packages } from './src/data/packages.ts';

const payload = {
  tests: localTests.map(t => ({
    id: t.id,
    name: t.name,
    category: t.category,
    price: t.price || t.sheet1Price || t.sheet2MRP || 0,
    price_status: t.priceStatus || 'Confirmed'
  })),
  packages: packages.map(p => ({
    id: p.id,
    name: p.name,
    price: p.price
  }))
};

async function run() {
  const res = await fetch('https://hijudhszlgmpgvymwaoh.supabase.co/functions/v1/seed-db', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer sb_publishable_Hhc2vwiozmdP_TIQVcGCzQ_OgMU9cy6'
    },
    body: JSON.stringify(payload)
  });
  const data = await res.json();
  console.log(data);
}
run();
