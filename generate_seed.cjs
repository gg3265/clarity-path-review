const fs = require('fs');
const { localTests } = require('./src/data/tests.ts');
const { localPackages } = require('./src/data/packages.ts');

let sql = 'INSERT INTO public.tests (id, name, category, price, price_status) VALUES \n';
sql += localTests.map(t => {
  const price = t.sheet1Price || t.sheet2MRP || t.price || 0;
  return `('${t.id}', '${t.name.replace(/'/g, "''")}', '${t.category}', ${price}, '${t.priceStatus}')`;
}).join(',\n') + '\nON CONFLICT (id) DO NOTHING;\n\n';

if (localPackages && localPackages.length > 0) {
  sql += 'INSERT INTO public.packages (id, name, price, original_price) VALUES \n';
  sql += localPackages.map(p => {
    return `('${p.id}', '${p.name.replace(/'/g, "''")}', ${p.price}, ${p.originalPrice || p.price})`;
  }).join(',\n') + '\nON CONFLICT (id) DO NOTHING;\n';
}

fs.writeFileSync('seed_data.sql', sql);
console.log('Done!');
