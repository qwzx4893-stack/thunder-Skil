#!/usr/bin/env node
// Capture/replay support for maker review. No aesthetic grading or pass score.
import { resolve, join, basename, dirname } from 'node:path';
import { pathToFileURL } from 'node:url';
import { mkdirSync, writeFileSync } from 'node:fs';
import { loadPlaywright } from './audit.mjs';

const [htmlArg, outArg, browserArg] = process.argv.slice(2);
if (!htmlArg || !outArg) throw new Error('Usage: node scripts/capture-showcase.mjs <html> <output> [chromium-executable]');
const html = resolve(htmlArg), out = resolve(outArg), name = basename(dirname(html));
mkdirSync(out, { recursive: true });
const pw = await loadPlaywright();
const browser = await pw.chromium.launch({ headless: true, executablePath: browserArg || process.env.BROWSER_EXECUTABLE || undefined });
const observations = { review: 'maker self-review; capture/replay only, no aesthetic score', case: name, views: [], errors: [] };
try {
  for (const [label, width, height] of [['desktop',1440,1000], ['mobile',375,860]]) {
    const context = await browser.newContext({ viewport:{width,height} });
    const page = await context.newPage();
    page.on('pageerror', error => observations.errors.push(error.message));
    await page.goto(pathToFileURL(html).href);
    await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].map(i=>i.complete?Promise.resolve():new Promise(r=>{i.onload=r;i.onerror=r})));});
    await page.screenshot({ path:join(out,label+'.png'),fullPage:true });
    observations.views.push({label,width,height,dom:await page.evaluate(()=>({overflow:Math.max(0,document.documentElement.scrollWidth-innerWidth),images:[...document.images].map(i=>({loaded:i.complete&&i.naturalWidth>0,width:i.naturalWidth,height:i.naturalHeight}))}))});
    if (label==='mobile' && name==='midad') {
      await page.locator('#priorityMobile').click();
      await page.screenshot({path:join(out,'detail.png'),fullPage:true});
      await page.locator('#advance').click();
      observations.afterAction=await page.locator('#prioritySummary').innerText();
      await page.screenshot({path:join(out,'changed.png'),fullPage:true});
    }
    if (label==='mobile' && name==='after-hours') {
      await page.locator('.film').first().click();
      await page.locator('#add').click();
      observations.afterAction=await page.locator('#saved').innerText();
      await page.keyboard.press('Escape');
      await page.locator('#openPlan').click();
      observations.plan=await page.locator('#planList').innerText();
      await page.screenshot({path:join(out,'plan.png'),fullPage:false});
      await page.keyboard.press('Escape');
      await page.locator('[data-day="22"]').click();
      observations.otherDay=await page.locator('#films').innerText();
    }
    if (label==='mobile' && name==='field-notes') {
      await page.locator('#detail').click();
      observations.detail=await page.locator('#viewLabel').innerText();
      await page.screenshot({path:join(out,'detail.png'),fullPage:true});
      await page.locator('#full').click();
      await page.locator('#viewArtwork').click();
      observations.viewer=await page.locator('#viewer').isVisible();
      await page.screenshot({path:join(out,'viewer.png'),fullPage:false});
      await page.keyboard.press('Escape');
      observations.viewerClosed=!(await page.locator('#viewer').isVisible());
    }
    if (label==='mobile' && name==='still-form') {
      await page.locator('#lineDetail').click();
      observations.detail=await page.locator('#imageLabel').innerText();
      await page.screenshot({path:join(out,'detail.png'),fullPage:true});
      await page.locator('#fullFrame').click();
      await page.locator('#openStudy').click();
      observations.viewer=await page.locator('#studyDialog').isVisible();
      await page.screenshot({path:join(out,'study.png'),fullPage:false});
      await page.keyboard.press('Escape');
      observations.viewerClosed=!(await page.locator('#studyDialog').isVisible());
    }
    await context.close();
  }
} finally { await browser.close(); }
writeFileSync(join(out,'observations.json'),JSON.stringify(observations,null,2)+'\n');
console.log(JSON.stringify({case:name,views:observations.views,afterAction:observations.afterAction,errors:observations.errors}));
if (observations.errors.length || observations.views.some(v=>v.dom.overflow>0 || v.dom.images.some(i=>!i.loaded)) || observations.viewer===false || observations.viewerClosed===false) process.exitCode=1;
