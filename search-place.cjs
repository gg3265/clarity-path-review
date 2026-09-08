const https = require('https');

https.get('https://www.google.com/search?q=SECOND+OPINION+CRL+Pune+Clinical+Reference+Laboratory', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const cidMatch = data.match(/cid=([0-9]+)/);
    const placeIdMatch = data.match(/place_id:([a-zA-Z0-9_-]+)/);
    const lrdMatch = data.match(/lrd=([^,]+)/);
    const coordMatch = data.match(/@([0-9.]+),([0-9.]+)/);
    
    console.log('CID:', cidMatch ? cidMatch[1] : 'not found');
    console.log('Place ID:', placeIdMatch ? placeIdMatch[1] : 'not found');
    console.log('LRD:', lrdMatch ? lrdMatch[1] : 'not found');
    console.log('Coords:', coordMatch ? coordMatch.slice(1).join(',') : 'not found');
    
    // Also try to find raw text mentions of SECOND OPINION CRL
    const snips = data.match(/.{0,50}SECOND OPINION CRL.{0,50}/g);
    if(snips) console.log(snips.slice(0,3));
  });
}).on('error', console.error);
