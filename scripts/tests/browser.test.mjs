import test from 'node:test';
import assert from 'node:assert/strict';
import { loadPlaywright, collectDOM, assessDOM } from '../audit.mjs';

test('real browser fixtures: contrast, unknown backgrounds, names, overflow, motion and errors', { skip: !process.env.BROWSER_EXECUTABLE }, async () => {
  const pw = await loadPlaywright();
  const browser = await pw.chromium.launch({ headless: true, executablePath: process.env.BROWSER_EXECUTABLE });
  try {
    const context = await browser.newContext({ viewport: { width: 375, height: 812 }, reducedMotion: 'reduce' });
    const page = await context.newPage();
    const sample = async html => {
      await page.setContent('<!doctype html><html lang="en"><head><style>body{background:#fff;color:#000}</style></head><body>' + html + '</body></html>');
      return page.evaluate(collectDOM);
    };
    let d = await sample('<p>Plain readable text</p><button>Save</button>');
    assert.equal(assessDOM(d, []).find(c => c.id === 'flat-text-contrast').status, 'PASS');
    d = await sample('<p style="color:#ccc">Unreadable</p>');
    assert.equal(assessDOM(d, []).find(c => c.id === 'flat-text-contrast').status, 'FAIL');
    d = await sample('<p style="background:linear-gradient(white,black)">Unknown image pair</p>');
    assert.equal(assessDOM(d, []).find(c => c.id === 'flat-text-contrast').status, 'UNVERIFIED');
    d = await sample('<p style="color:rgba(0,0,0,.1)">Translucent text</p>');
    assert.equal(assessDOM(d, []).find(c => c.id === 'flat-text-contrast').status, 'FAIL');
    d = await sample('<p>Visible</p><span style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);color:#eee">Screen-reader only</span>');
    assert.equal(assessDOM(d, []).find(c => c.id === 'flat-text-contrast').status, 'PASS');
    d = await sample('<style>input::placeholder{color:#ddd;opacity:1}</style><label for="p">Name</label><input id="p" placeholder="Enter name">');
    assert.equal(assessDOM(d, []).find(c => c.id === 'flat-text-contrast').status, 'FAIL');
    d = await sample('<style>input::placeholder{color:#000;opacity:.1}</style><label for="p">Name</label><input id="p" placeholder="Low opacity">');
    assert.equal(assessDOM(d, []).find(c => c.id === 'flat-text-contrast').status, 'FAIL');
    d = await sample('<label for="q">Search</label><input id="q"><button aria-label="Close"></button>');
    assert.equal(d.unnamed.length, 0);
    d = await sample('<label for="r">Position</label><input id="r" type="range" value="50" style="color:white;background:white"><label for="c">Choose</label><input id="c" type="checkbox" value="Not rendered" style="color:white;background:white">');
    assert.equal(d.text.some(s => s.text === '50' || s.text === 'Not rendered'), false);
    assert.equal(assessDOM(d, []).find(c => c.id === 'flat-text-contrast').status, 'PASS');
    d = await sample('<input type="submit" value="Visible submit text" style="color:white;background:white">');
    assert.equal(assessDOM(d, []).find(c => c.id === 'flat-text-contrast').status, 'FAIL');
    d = await sample('<label for="secret">Password</label><input id="secret" type="password" value="not-public-report-text">');
    assert.equal(d.text.some(s => s.text.includes('not-public-report-text')), false);
    d = await sample('<button></button><p>Visible</p>');
    assert.equal(assessDOM(d, []).find(c => c.id === 'control-names').status, 'UNVERIFIED');
    d = await sample('<div style="width:1000px">Overflow</div>');
    assert.equal(assessDOM(d, []).find(c => c.id === 'overflow').status, 'FAIL');
    d = await sample('<style>@keyframes turn{to{transform:rotate(360deg)}}p{animation:turn 10s infinite}</style><p>Moving</p>');
    assert.equal(assessDOM(d, [], true).find(c => c.id === 'reduced-css-motion').status, 'UNVERIFIED');
    assert.equal(assessDOM(d, ['Real page error']).find(c => c.id === 'page-errors').status, 'FAIL');
    await context.close();
  } finally { await browser.close(); }
});
