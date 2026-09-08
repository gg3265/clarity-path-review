const https = require('https');

https.get('https://html.duckduckgo.com/html/?q=site:maps.google.com+"SECOND+OPINION+CRL"', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
  }
}, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
      const snips = data.match(/class="result__snippet[^>]*>(.*?)<\/a>/g);
      if (snips) {
          snips.forEach(s => console.log(s.replace(/<[^>]+>/g, '')));
      }
      const urls = data.match(/href="([^"]+)"/g);
      if (urls) {
        urls.forEach(u => {
          if(u.includes('maps.google.com')) console.log(decodeURIComponent(u));
        })
      }
  });
}).on('error', console.error);
