import test from 'node:test';
import assert from 'node:assert/strict';
import { contrastRatio, composite, textThreshold, aggregate, exitCode, VIEWPORTS } from '../policy.mjs';
import { assessDOM } from '../audit.mjs';

test('WCAG luminance: black/white 21, identical colors 1', () => {
  assert.equal(contrastRatio([0, 0, 0], [255, 255, 255]), 21);
  assert.equal(contrastRatio([120, 80, 55], [120, 80, 55]), 1);
});
test('alpha composition retains true resulting alpha and channels', () => {
  assert.deepEqual(composite([0, 0, 0, 0.5], [255, 255, 255, 1]), [127.5, 127.5, 127.5, 1]);
  assert.deepEqual(composite([0, 0, 0, 0], [255, 0, 0, 0]), [0, 0, 0, 0]);
  assert.equal(composite([20, 40, 60, 0.5], [80, 40, 20, 0.5])[3], 0.75);
});
test('large-text threshold respects size AND weight boundaries', () => {
  assert.equal(textThreshold(24, 400), 3);
  assert.equal(textThreshold(18.66, 700), 3);
  assert.equal(textThreshold(18.65, 700), 4.5);
  assert.equal(textThreshold(20, 600), 4.5);
});
test('incomplete coverage never aggregates to pass; failure dominates', () => {
  assert.equal(aggregate([{ status: 'PASS' }, { status: 'UNVERIFIED' }]), 'UNVERIFIED');
  assert.equal(aggregate([{ status: 'FAIL' }, { status: 'UNVERIFIED' }]), 'FAIL');
  assert.equal(exitCode('UNVERIFIED'), 2);
});
test('reflow width is included and fluid typography reaches both endpoints', () => {
  assert.ok(VIEWPORTS.some(v => v.width === 320));
  const m = (8 - 3) * 16 / (1440 - 375), b = 3 - m * 375 / 16;
  assert.ok(Math.abs(b * 16 + 100 * m * 3.75 - 48) < 1e-8);
  assert.ok(Math.abs(b * 16 + 100 * m * 14.4 - 128) < 1e-8);
});
const dom = () => ({ overflow: 0, brokenImages: [], pendingImages: [], lang: 'en', unnamed: [], text: [{ text: 'Readable', fg: [0, 0, 0, 1], layers: [[255, 255, 255, 1]], px: 16, weight: 400 }], skipped: [], pseudo: [], animations: [] });
test('one pixel is tolerated, two pixels fail', () => {
  const d = dom(); d.overflow = 1;
  assert.equal(assessDOM(d, []).find(c => c.id === 'overflow').status, 'PASS');
  d.overflow = 2;
  assert.equal(assessDOM(d, []).find(c => c.id === 'overflow').status, 'FAIL');
});
test('one unknown contrast sample remains unverified', () => {
  const d = dom(); d.skipped.push({ text: 'Over photo', reason: 'image' });
  assert.equal(assessDOM(d, []).find(c => c.id === 'flat-text-contrast').status, 'UNVERIFIED');
});
test('low contrast fails even when some content is unverified', () => {
  const d = dom(); d.text[0].fg = [200, 200, 200, 1]; d.skipped.push({ text: 'Other' });
  assert.equal(assessDOM(d, []).find(c => c.id === 'flat-text-contrast').status, 'FAIL');
});
test('remaining reduced CSS animation requires context, never silently passes', () => {
  const d = dom(); d.animations.push({ duration: 500, iterations: 'infinite' });
  assert.equal(assessDOM(d, [], true).find(c => c.id === 'reduced-css-motion').status, 'UNVERIFIED');
});
