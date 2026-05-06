import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  
  page.on('console', msg => {
    if(msg.type() === 'error' || msg.type() === 'warning') {
      console.log('LOG [', msg.type(), ']:', msg.text());
    }
  });
  page.on('pageerror', err => console.log('ERROR:', err.toString()));
  
  const routes = ['/', '/pricing', '/pricing/dawn-patrol', '/members', '/studio'];
  for (const route of routes) {
    try {
      await page.goto(`http://localhost:3000${route}`, { waitUntil: 'networkidle0' });
      await new Promise(resolve => setTimeout(resolve, 500));
      const html = await page.evaluate(() => document.getElementById('root').innerHTML);
      console.log(`${route} OK, length: ${html.length}`);
    } catch (e) {
      console.error(`${route} FAILED`, e);
    }
  }
  
  await browser.close();
})();
