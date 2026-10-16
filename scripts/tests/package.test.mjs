import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, utimesSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { packageSkill } from '../package-skill.mjs';

function fixture() {
  const root = mkdtempSync(join(tmpdir(), 'thunder-package-'));
  for (const dir of ['references', 'scripts', 'evals', 'agents', 'assets', 'docs', '_build', '.git']) mkdirSync(join(root, dir));
  writeFileSync(join(root, 'SKILL.md'), '---\nname: sample\ndescription: A scoped sample\n---\n# Example\n');
  for (const name of ['README.md', 'README.ar.md', 'CHANGELOG.md', 'LICENSE', 'CONTRIBUTING.md', 'SECURITY.md', 'CODE_OF_CONDUCT.md']) writeFileSync(join(root, name), name);
  writeFileSync(join(root, 'package.json'), JSON.stringify({ version: '1.2.3' }));
  writeFileSync(join(root, '_build', 'private.txt'), 'private build material');
  writeFileSync(join(root, '.git', 'config'), 'not distributable');
  writeFileSync(join(root, 'credentials.json'), 'outside allowlist');
  return root;
}

test('package is reproducible across mtimes/line endings and excludes local state', () => {
  const root = fixture();
  try {
    const first = packageSkill(root), bytes = readFileSync(first.path);
    writeFileSync(join(root, 'SKILL.md'), readFileSync(join(root, 'SKILL.md'), 'utf8').replaceAll('\n', '\r\n'));
    utimesSync(join(root, 'SKILL.md'), new Date(0), new Date(0));
    const second = packageSkill(root);
    assert.equal(second.files, 9);
    assert.equal(first.sha256, second.sha256);
    assert.deepEqual(bytes, readFileSync(second.path));
    assert.ok(!bytes.includes(Buffer.from('private build material')));
    assert.match(readFileSync(second.path + '.sha256', 'utf8'), /^[a-f0-9]{64}  immersive-web-studio-1\.2\.3\.skill\n$/);
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test('package rejects credential-like content and files inside an allowed directory', () => {
  const root = fixture();
  try {
    const suspicious = join(root, 'docs', 'note.md');
    writeFileSync(suspicious, 'gh' + 'p_' + 'A'.repeat(36));
    assert.throws(() => packageSkill(root), /Possible credential in: docs\/note.md/);
    writeFileSync(suspicious, 'safe');
    writeFileSync(join(root, 'assets', 'credentials.json'), '{}');
    assert.throws(() => packageSkill(root), /Credential-like file excluded/);
  } finally { rmSync(root, { recursive: true, force: true }); }
});
