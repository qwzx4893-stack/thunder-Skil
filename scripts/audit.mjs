#!/usr/bin/env node
import { createRequire } from 'node:module';
import { mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { VIEWPORTS, OVERFLOW_TOLERANCE, contrastRatio, composite, textThreshold, aggregate, exitCode } from './policy.mjs';

export async function loadPlaywright(explicit) {
  const errors = [];
  if (explicit) {
    const imported = await import(pathToFileURL(resolve(explicit)).href);
    return imported.chromium ? imported : imported.default;
  }
  for (const base of [join(process.cwd(), 'package.json'), fileURLToPath(import.meta.url)]) {
    const req = createRequire(base);
    for (const name of ['playwright', 'playwright-core']) {
      try { const m = req(name); if (m.chromium) return m; } catch (e) { errors.push(e.code ?? e.message); }
    }
  }
  throw new Error('Playwright unavailable. Supply an installed module with --playwright; no automatic installation. ' + errors.join(', '));
}

// This function runs inside the browser. Keep all its dependencies in its body.
export function collectDOM() {
  const visible = el => {
    const s = getComputedStyle(el), r = el.getBoundingClientRect();
    const clippedAssistiveText = r.width <= 1 && r.height <= 1 && (s.overflow === 'hidden' || s.clip !== 'auto' || s.clipPath !== 'none');
    return !clippedAssistiveText && r.width > 0 && r.height > 0 && r.bottom > 0 && r.right > 0 && s.visibility !== 'hidden' && s.display !== 'none' && Number(s.opacity) > 0;
  };
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 1;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  const rgba = color => {
    if (!ctx || !CSS.supports('color', color)) return null;
    ctx.clearRect(0, 0, 1, 1); ctx.fillStyle = color; ctx.fillRect(0, 0, 1, 1);
    const d = [...ctx.getImageData(0, 0, 1, 1).data];
    return [d[0], d[1], d[2], d[3] / 255];
  };
  const text = [], skipped = [], unnamed = [], pseudo = [];
  for (const el of document.querySelectorAll('body *')) {
    if (!visible(el)) continue;
    const s = getComputedStyle(el);
    for (const side of ['::before', '::after']) {
      const content = getComputedStyle(el, side).content;
      if (content && !['none', 'normal', '""', "''"].includes(content)) pseudo.push(el.tagName + side);
    }
    const direct = [...el.childNodes].filter(n => n.nodeType === 3).map(n => n.textContent).join('').trim();
    // Inputs do not expose their text as child text nodes; inspect their value/placeholder.
    const value = direct || (el.matches('input,textarea') ? el.value || el.placeholder : '');
    if (value && !el.matches(':disabled') && !el.closest('[inert]')) {
      const layers = []; let reason = null;
      for (let a = el; a; a = a.parentElement) {
        const cs = getComputedStyle(a);
        if (cs.backgroundImage !== 'none' || Number(cs.opacity) !== 1 || cs.filter !== 'none' || cs.mixBlendMode !== 'normal' || cs.textShadow !== 'none') { reason = 'complex background/compositing'; break; }
        const color = rgba(cs.backgroundColor);
        if (!color) { reason = 'unresolved color'; break; }
        layers.push(color);
      }
      const placeholderStyle = !direct && el.matches('input,textarea') && !el.value && el.placeholder ? getComputedStyle(el, '::placeholder') : null;
      const fg = rgba(placeholderStyle ? placeholderStyle.color : s.color);
      if (fg && placeholderStyle) fg[3] *= Number(placeholderStyle.opacity);
      if (reason || !fg) skipped.push({ text: value.slice(0, 70), reason: reason ?? 'unresolved foreground' });
      else text.push({ text: value.slice(0, 70), fg, layers, px: parseFloat(s.fontSize), weight: parseFloat(s.fontWeight) || 400 });
    }
    if (el.matches('button,input:not([type=hidden]),select,textarea,[role=button]')) {
      const refs = (el.getAttribute('aria-labelledby') || '').split(/\s+/).filter(Boolean);
      const name = el.getAttribute('aria-label') || refs.map(id => document.getElementById(id)?.textContent ?? '').join(' ').trim()
        || [...(el.labels || [])].map(l => l.textContent).join(' ').trim() || el.innerText?.trim()
        || (el.matches('input[type=submit],input[type=button]') ? el.value : '') || el.getAttribute('title');
      if (!name) unnamed.push(el.outerHTML.slice(0, 140));
    }
  }
  const animations = document.getAnimations().filter(a => a.playState === 'running' || a.playState === 'pending').map(a => {
    const timing = a.effect?.getComputedTiming();
    return { duration: timing?.duration, iterations: timing?.iterations === Infinity ? 'infinite' : timing?.iterations };
  }).filter(a => typeof a.duration === 'number' && a.duration > 10);
  return {
    overflow: Math.max(0, document.documentElement.scrollWidth - innerWidth),
    brokenImages: [...document.images].filter(i => i.complete && i.naturalWidth === 0).map(i => i.getAttribute('src')),
    pendingImages: [...document.images].filter(i => !i.complete).map(i => i.getAttribute('src')),
    lang: document.documentElement.lang,
    direction: getComputedStyle(document.documentElement).direction,
    text, skipped, pseudo: [...new Set(pseudo)], unnamed, animations,
    canvasCount: document.querySelectorAll('canvas').length,
  };
}

export function assessDOM(dom, errors, reduced = false) {
  const contrastFailures = [];
  for (const t of dom.text) {
    let bg = [255, 255, 255, 1];
    for (const layer of [...t.layers].reverse()) bg = composite(layer, bg);
    const fg = composite(t.fg, bg), ratio = contrastRatio(fg, bg), min = textThreshold(t.px, t.weight);
    if (ratio + 1e-9 < min) contrastFailures.push({ text: t.text, ratio: Number(ratio.toFixed(3)), required: min });
  }
  const coverageGaps = dom.skipped.length + dom.pseudo.length;
  const check = (id, status, detail) => ({ id, status, detail });
  return [
    check('overflow', dom.overflow > OVERFLOW_TOLERANCE ? 'FAIL' : 'PASS', { px: dom.overflow, tolerance: OVERFLOW_TOLERANCE }),
    check('images', dom.brokenImages.length ? 'FAIL' : dom.pendingImages.length ? 'UNVERIFIED' : 'PASS', { broken: dom.brokenImages, pending: dom.pendingImages }),
    check('page-errors', errors.length ? 'FAIL' : 'PASS', errors),
    check('document-language', dom.lang ? 'PASS' : 'FAIL', dom.lang || 'missing html lang'),
    check('control-names', dom.unnamed.length ? 'UNVERIFIED' : 'PASS', { unnamedSignals: dom.unnamed, scope: 'DOM label signals, not full accessibility-tree validation' }),
    check('flat-text-contrast', contrastFailures.length ? 'FAIL' : coverageGaps || dom.text.length === 0 ? 'UNVERIFIED' : 'PASS', { checked: dom.text.length, skipped: dom.skipped.length, pseudo: dom.pseudo, failures: contrastFailures.slice(0, 12), unverified: dom.skipped.slice(0, 8) }),
    ...(reduced ? [check('reduced-css-motion', dom.animations.length ? 'UNVERIFIED' : 'PASS', { running: dom.animations, scope: 'CSS/Web Animations inventory; observed motion needs contextual review' })] : []),
  ];
}

export async function audit(target, options = {}) {
  const out = resolve(options.out ?? 'qa-evidence');
  mkdirSync(out, { recursive: true });
  const report = {
    scope: 'automated-smoke', status: 'UNVERIFIED', target, viewports: [],
    manualChecks: ['primary task and recovery', 'keyboard/focus behavior', 'theme and interaction states', 'non-text and complex-background contrast', 'zoom/enlargement', 'JS/canvas motion and fallback', 'visual/UX critique', 'performance context'].map(id => ({ id, status: 'UNVERIFIED' })),
  };
  let browser;
  try {
    const pw = await loadPlaywright(options.playwright);
    browser = await pw.chromium.launch({ headless: true, ...(options.browser ? { executablePath: options.browser } : {}) });
    const url = /^https?:\/\//i.test(target) ? target : pathToFileURL(resolve(target)).href;
    if (!/^https?:\/\//i.test(target) && !existsSync(resolve(target))) throw new Error('Target HTML missing');
    for (const viewport of options.viewports ?? VIEWPORTS) for (const reduced of [false, true]) {
      const context = await browser.newContext({ viewport, reducedMotion: reduced ? 'reduce' : 'no-preference' });
      const page = await context.newPage();
      const errors = [], resourceIssues = [];
      page.on('pageerror', e => errors.push(e.message));
      page.on('console', m => { if (m.type() === 'error') resourceIssues.push(m.text()); });
      page.on('requestfailed', r => resourceIssues.push(r.url() + ': ' + r.failure()?.errorText));
      try {
        const response = await page.goto(url, { waitUntil: 'load', timeout: 20000 });
        if (response && response.status() >= 400) errors.push('Navigation HTTP ' + response.status());
        await page.evaluate(() => document.fonts?.ready);
        // Two frames allow style/layout to settle; this is a smoke sample, not animation completion evidence.
        await page.evaluate(() => new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r))));
        const dom = await page.evaluate(collectDOM);
        const name = viewport.width + (reduced ? '-reduced' : '-normal') + '.png';
        await page.screenshot({ path: join(out, name), fullPage: true, timeout: 15000 });
        const checks = assessDOM(dom, errors, reduced);
        if (resourceIssues.length) checks.push({ id: 'resource-issues', status: 'UNVERIFIED', detail: resourceIssues });
        report.viewports.push({ viewport, reducedMotion: reduced, screenshot: name, direction: dom.direction, canvasCount: dom.canvasCount, checks, status: aggregate(checks) });
      } catch (e) {
        report.viewports.push({ viewport, reducedMotion: reduced, status: 'UNVERIFIED', checks: [{ id: 'navigation-or-capture', status: 'UNVERIFIED', detail: e.message }] });
      } finally { await context.close(); }
    }
    report.status = aggregate(report.viewports);
  } catch (e) { report.setupError = e.message; }
  finally { if (browser) await browser.close(); }
  writeFileSync(join(out, 'report.json'), JSON.stringify(report, null, 2));
  return report;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  if (!args.length || args.includes('--help')) {
    console.log('Usage: node audit.mjs <url-or-html> --out <dir> [--browser <chromium>] [--playwright <module-path>]');
    process.exitCode = args.includes('--help') ? 0 : 2;
  } else {
    const option = name => args.includes(name) ? args[args.indexOf(name) + 1] : undefined;
    const report = await audit(args[0], { out: option('--out'), browser: option('--browser') ?? process.env.BROWSER_EXECUTABLE, playwright: option('--playwright') });
    console.log(report.status + ' automated-smoke; full acceptance requires the reported manual checks.');
    if (report.setupError) console.error(report.setupError);
    process.exitCode = exitCode(report.status);
  }
}
