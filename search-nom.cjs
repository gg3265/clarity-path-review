const https = require('https');

https.get('https://nominatim.openstreetmap.org/search?q=Veeren+Heights,+Pune&format=json', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
  }
}, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    console.log(data);
  });
}).on('error', console.error);
