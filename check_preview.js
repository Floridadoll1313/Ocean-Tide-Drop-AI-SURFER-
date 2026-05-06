import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.toString()));
  page.on('pageerror', err => console.error('PAGE ERROR:', err.toString()));
  
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  
  console.log('Clicking dashboard link...');
  await page.click('a[href="/dashboard"]');
  await page.waitForNetworkIdle();
  
  const rootHtml = await page.evaluate(() => document.getElementById('root').innerHTML);
  console.log('Root HTML after click:', rootHtml.substring(0, 500));
  
  console.log('Clicking a pricing detail link...');
  await page.goto('http://localhost:3000/studio', { waitUntil: 'networkidle0' });
  const studioHtml = await page.evaluate(() => document.getElementById('root').innerHTML);
  console.log('Studio Detail HTML:', studioHtml.substring(0, 500));
  
  await browser.close();
})();
