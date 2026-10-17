// Bounded regression replay for the repaired contributed example; no taste score.
import assert from 'node:assert/strict';
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { loadPlaywright } from './audit.mjs';
import { serveExample } from './serve-example.mjs';

const out = resolve(process.argv[2] || 'test-results/atelier');
mkdirSync(out, { recursive: true });
const {server, url} = await serveExample(resolve('docs/fixes/atelier'));
let browser;
const report = {scope:'Targeted repair replay, not a new design benchmark or accessibility certification', checks:[], errors:[]};
const pass = name => report.checks.push(name);
try {
  const pw = await loadPlaywright();
  browser = await pw.chromium.launch({headless:true, executablePath:process.env.BROWSER_EXECUTABLE || undefined});
  const context = await browser.newContext({viewport:{width:390,height:844},reducedMotion:'reduce'});
  const page = await context.newPage();
  page.on('pageerror', e => report.errors.push(e.message));
  await page.goto(url);
  await page.evaluate(() => document.fonts.ready);
  for (const width of [320,390,1440]) {
    await page.setViewportSize({width,height:width===1440?950:844});
    await page.evaluate(() => scrollTo(0,0));
    // Text-fragment geometry detects clipping even with overflow-x:hidden.
    const clipped = await page.evaluate(() => {
      const bad=[];
      for (const el of document.querySelectorAll('.hero-title,.hero-subtitle,.hero-thesis,.hero-series-badge,.hero-actions-group button,.hero-actions-group a')) {
        const walker=document.createTreeWalker(el,NodeFilter.SHOW_TEXT);
        while(walker.nextNode()) {
          if(!walker.currentNode.textContent.trim()) continue;
          const range=document.createRange(); range.selectNodeContents(walker.currentNode);
          for(const r of range.getClientRects()) if(r.left < -1 || r.right > innerWidth+1) bad.push(el.className);
        }
      }
      return bad;
    });
    assert.deepEqual(clipped, [], `hero text/actions clipped at ${width}`);
    await page.screenshot({path:join(out,`${width}.png`)});
    pass(`Visible hero text/action fragments contained at ${width}px, reduced motion`);
  }
  await page.setViewportSize({width:390,height:844});
  const focusInside = id => page.evaluate(id => document.getElementById(id).contains(document.activeElement), id);
  const boundary = async (id,key) => {
    await page.evaluate(({id,key}) => {
      const items=[...document.getElementById(id).querySelectorAll('button,input,select,textarea,a[href],[tabindex]')].filter(e=>!e.disabled&&e.tabIndex>=0&&e.getClientRects().length&&getComputedStyle(e).visibility!=='hidden');
      (key==='Tab'?items.at(-1):items[0]).focus();
    },{id,key});
    await page.keyboard.press(key);
    assert.equal(await focusInside(id),true);
  };
  for (const launcher of ['hero-acquire-btn','open-drawer-btn']) {
    await page.setViewportSize({width:launcher==='open-drawer-btn'?1440:390,height:950});
    await page.locator('#'+launcher).click();
    assert.equal(await page.locator('#drawer-overlay').evaluate(e=>e.open),true);
    assert.equal(await page.evaluate(()=>document.activeElement.id),'close-drawer-btn');
    await page.keyboard.press('Tab'); assert.equal(await focusInside('drawer-overlay'),true);
    await boundary('drawer-overlay','Tab'); await boundary('drawer-overlay','Shift+Tab');
    await page.keyboard.press('Escape');
    assert.equal(await page.locator('#drawer-overlay').evaluate(e=>e.open),false);
    assert.equal(await page.evaluate(()=>document.activeElement.id),launcher);
    pass(`Drawer initial focus, bidirectional boundaries, Escape and return: ${launcher}`);
  }
  await page.locator('#hero-acquire-btn').click();
  await page.locator('.edition-card[data-edition="slipcase"]').click();
  assert.equal((await page.locator('#summary-total-price').textContent()).trim(),'$344 USD');
  await page.locator('#collector-name').fill('Local Review');
  await page.locator('#collector-email').fill('review@example.test');
  await page.locator('#collector-address').fill('Fictional delivery address');
  await page.locator('#acquisition-form button[type="submit"]').click();
  assert.equal(await page.evaluate(()=>document.activeElement.id),'cert-done-btn');
  await boundary('drawer-overlay','Tab'); await boundary('drawer-overlay','Shift+Tab');
  await page.locator('#cert-done-btn').click();
  assert.equal(await page.evaluate(()=>document.activeElement.id),'hero-acquire-btn');
  pass('Local price, confirmation focus, changed-state boundaries and close-button return');
  await page.locator('#tab-1').click();
  assert.equal((await page.locator('#plate-title').textContent()).trim(),'Solstice Terrazzo Villa');
  await page.locator('#archive-search-input').fill('Kyoto');
  assert.equal(await page.locator('.archive-row:visible').count(),2);
  pass('Plate switching and archive search retain expected behavior');
  await page.locator('#inspect-plate-btn').click();
  assert.equal(await page.evaluate(()=>document.activeElement.id),'close-loupe-btn');
  await boundary('loupe-modal','Tab'); await boundary('loupe-modal','Shift+Tab');
  await page.keyboard.press('Escape');
  assert.equal(await page.evaluate(()=>document.activeElement.id),'inspect-plate-btn');
  pass('Loupe initial focus, bidirectional boundaries and return');
  await page.setViewportSize({width:390,height:844});
  await page.locator('#hero-acquire-btn').click();
  await page.screenshot({path:join(out,'390-drawer.png')});
  await page.keyboard.press('Escape');
  await context.close();
  assert.deepEqual(report.errors,[]);
  pass('No uncaught page errors in exercised paths');
  report.status='PASS';
} catch(e) { report.status='FAIL';report.failure=e.message;throw e; }
finally {
  writeFileSync(join(out,'observations.json'),JSON.stringify(report,null,2)+'\n');
  await browser?.close();await new Promise(r=>server.close(r));
}
console.log(`PASS atelier repair replay (${report.checks.length} bounded groups)`);
