const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  
  await page.goto('http://localhost:8082', { waitUntil: 'networkidle0' });
  
  // Wait a bit for React to render
  await new Promise(r => setTimeout(r, 2000));
  
  const html = await page.content();
  if (html.includes('Something went wrong')) {
    console.log('CRASH DETECTED');
  } else {
    console.log('NO CRASH DETECTED');
  }
  
  await browser.close();
})();
