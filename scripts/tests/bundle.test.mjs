import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { validateBundle } from '../validate-skill.mjs';

test('distributed bundle is routed and under its loader target', () => {
  const root = fileURLToPath(new URL('../../', import.meta.url));
  assert.deepEqual(validateBundle(root).errors, []);
});
test('missing helper and unrouted reference are rejected', () => {
  const dir = mkdtempSync(join(tmpdir(), 'iws-validate-'));
  try {
    mkdirSync(join(dir, 'references'));
    writeFileSync(join(dir, 'SKILL.md'), '---\nname: sample\ndescription: A valid description\n---\nUse scripts/missing.mjs\n');
    writeFileSync(join(dir, 'references', 'unused.md'), '# Unused');
    const { errors } = validateBundle(dir);
    assert.ok(errors.some(e => e.includes('missing.mjs')));
    assert.ok(errors.some(e => e.includes('Unrouted')));
  } finally { rmSync(dir, { recursive: true, force: true }); }
});
test('Unicode codepoints are measured instead of UTF16 units', () => {
  const dir = mkdtempSync(join(tmpdir(), 'iws-unicode-'));
  try {
    const s = '---\nname: sample\ndescription: Valid\n---\n' + '😀'.repeat(4100);
    writeFileSync(join(dir, 'SKILL.md'), s);
    assert.ok(s.length > 8192);
    assert.deepEqual(validateBundle(dir).errors, []);
  } finally { rmSync(dir, { recursive: true, force: true }); }
});
