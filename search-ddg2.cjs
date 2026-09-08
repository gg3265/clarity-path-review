const https = require('https');

https.get('https://html.duckduckgo.com/html/?q=Veeren+Heights+Laxmi+Road+Pune', {
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
  });
}).on('error', console.error);
