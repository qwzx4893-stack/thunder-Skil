#!/usr/bin/env node
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { resolve, join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { LOADER_CODEPOINT_LIMIT } from './policy.mjs';

// This bundle uses a deliberately small YAML subset: plain name/description only.
// This is not advertised as a general-purpose YAML parser.
export function validateBundle(root) {
  const errors = [], measurements = [];
  const path = join(root, 'SKILL.md');
  if (!existsSync(path)) return { errors: ['SKILL.md missing'], measurements };
  const skill = readFileSync(path, 'utf8').replace(/\r\n/g, '\n');
  const fm = skill.match(/^---\n([\s\S]*?)\n---(?:\n|$)/);
  if (!fm) errors.push('Missing frontmatter');
  else {
    const fields = new Map();
    for (const line of fm[1].split('\n')) {
      const m = line.match(/^(name|description): (.+)$/);
      if (!m || /: |\s#|[\r\n]/.test(m[2])) errors.push('Unsupported or unsafe frontmatter line: ' + line);
      else if (fields.has(m[1])) errors.push('Duplicate field: ' + m[1]);
      else fields.set(m[1], m[2]);
    }
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(fields.get('name') ?? '')) errors.push('Invalid skill name');
    if (!(fields.get('description')?.length > 0)) errors.push('Missing description');
    if ((fields.get('description')?.length ?? 0) > 1024) errors.push('Description exceeds 1024 characters');
  }
  const refDir = join(root, 'references');
  const refs = existsSync(refDir) ? readdirSync(refDir).filter(n => n.endsWith('.md')) : [];
  const files = ['SKILL.md', ...refs.map(n => 'references/' + n)];
  const linked = new Set();
  for (const file of files) {
    const s = readFileSync(join(root, file), 'utf8');
    const count = [...s].length;
    measurements.push({ file, codepoints: count });
    if (count >= LOADER_CODEPOINT_LIMIT) errors.push(file + ' reaches the target loader limit');
    for (const m of s.matchAll(/\b(references\/[a-z0-9-]+\.md|scripts\/[a-z0-9-]+\.mjs)\b/g)) {
      linked.add(m[1]);
      if (!existsSync(join(root, m[1]))) errors.push(file + ' has missing resource: ' + m[1]);
    }
    // Bare sibling reference names are accepted only when they exist beside the file.
    if (file.startsWith('references/')) for (const m of s.matchAll(/(?<![\w/])([a-z0-9-]+\.md)\b/g)) {
      if (m[1] !== 'qa-gates.md' && !refs.includes(m[1])) continue;
      if (!existsSync(join(refDir, m[1]))) errors.push(file + ' missing sibling ' + m[1]);
    }
  }
  for (const ref of refs) if (!linked.has('references/' + ref)) errors.push('Unrouted reference: ' + ref);
  return { errors: [...new Set(errors)], measurements };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const root = resolve(process.argv[2] ?? join(dirname(fileURLToPath(import.meta.url)), '..'));
  const result = validateBundle(root);
  for (const m of result.measurements) console.log(m.file + ': ' + m.codepoints + ' codepoints');
  for (const error of result.errors) console.error('FAIL ' + error);
  console.log(result.errors.length ? 'FAIL bundle' : 'PASS bundle structure (not design quality)');
  process.exitCode = result.errors.length ? 1 : 0;
}
