const https = require('https');

https.get('https://html.duckduckgo.com/html/?q=SECOND+OPINION+CRL+Pune+Google+Maps', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
  }
}, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const urls = data.match(/https?:\/\/(?:www\.)?google\.com\/maps[^\s"']+/g);
    if (urls) {
      console.log('Found URLs:');
      urls.forEach(u => console.log(decodeURIComponent(u)));
    } else {
      console.log('No maps urls found.');
      // print snippets
      const snips = data.match(/class="result__snippet[^>]*>(.*?)<\/a>/g);
      if (snips) {
          snips.forEach(s => console.log(s.replace(/<[^>]+>/g, '')));
      }
    }
  });
}).on('error', console.error);
