#!/usr/bin/env node
import { readFileSync, readdirSync, lstatSync, mkdirSync, writeFileSync } from 'node:fs';
import { resolve, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { deflateRawSync } from 'node:zlib';
import { createHash } from 'node:crypto';
import { validateBundle } from './validate-skill.mjs';

// Fixed allowlist: never package the working directory, caches, Git or credentials.
const ROOT_FILES = ['SKILL.md', 'README.md', 'README.ar.md', 'CHANGELOG.md', 'LICENSE', 'package.json', 'CONTRIBUTING.md', 'SECURITY.md', 'CODE_OF_CONDUCT.md'];
const ROOT_DIRS = ['references', 'scripts', 'evals', 'agents', 'assets', 'docs'];
const crcTable = Array.from({ length: 256 }, (_, n) => {
  let c = n;
  for (let k = 0; k < 8; k++) c = (c & 1) ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  return c >>> 0;
});
const crc32 = buffer => {
  let c = 0xffffffff;
  for (const byte of buffer) c = crcTable[(c ^ byte) & 255] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
};

export function packageSkill(root, outputDir = join(root, 'dist')) {
  const checked = validateBundle(root);
  if (checked.errors.length) throw new Error(checked.errors.join('\n'));
  const version = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8')).version;
  if (!/^\d+\.\d+\.\d+$/.test(version)) throw new Error('Expected a plain release version');
  const files = [];
  const add = name => {
    const path = join(root, name), stat = lstatSync(path);
    if (stat.isSymbolicLink()) throw new Error('Symlink excluded: ' + name);
    if (stat.isDirectory()) {
      for (const child of readdirSync(path).sort()) add(join(name, child));
    } else if (stat.isFile()) {
      const archiveName = relative(root, path).replaceAll('\\', '/');
      if (archiveName.split('/').some(p => p === '..' || p.startsWith('.')))
        throw new Error('Unexpected archive path: ' + archiveName);
      if (/(^|\/)(credentials(?:[._-]|$)|[^/]+\.(pem|key)$)/i.test(archiveName))
        throw new Error('Credential-like file excluded: ' + archiveName);
      let data = readFileSync(path);
      if (/\.(?:md|mjs|cjs|js|json|ya?ml|html|css|svg|txt)$/.test(archiveName) || archiveName === 'LICENSE') {
        const text = data.toString('utf8');
        if (/(?:gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{30,}|-----BEGIN(?: [A-Z]+)? PRIVATE KEY-----)/.test(text))
          throw new Error('Possible credential in: ' + archiveName);
        data = Buffer.from(text.replaceAll('\r\n', '\n'));
      }
      files.push({ name: archiveName, data });
    }
  };
  for (const name of [...ROOT_FILES, ...ROOT_DIRS]) add(name);
  files.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
  const local = [], central = [];
  let offset = 0, centralSize = 0;
  // Standard ZIP32, UTF-8 names, raw DEFLATE; fixed DOS date 1980-01-01.
  for (const file of files) {
    const name = Buffer.from(file.name), data = deflateRawSync(file.data, { level: 9 });
    if (name.length > 65535 || file.data.length > 0xffffffff || data.length > 0xffffffff)
      throw new Error('ZIP32 size exceeded');
    const crc = crc32(file.data), header = Buffer.alloc(30);
    header.writeUInt32LE(0x04034b50, 0); header.writeUInt16LE(20, 4);
    header.writeUInt16LE(0x800, 6); header.writeUInt16LE(8, 8);
    header.writeUInt16LE(33, 12); header.writeUInt32LE(crc, 14);
    header.writeUInt32LE(data.length, 18); header.writeUInt32LE(file.data.length, 22);
    header.writeUInt16LE(name.length, 26);
    local.push(header, name, data);
    const record = Buffer.alloc(46);
    record.writeUInt32LE(0x02014b50, 0); record.writeUInt16LE(20, 4);
    record.writeUInt16LE(20, 6); record.writeUInt16LE(0x800, 8);
    record.writeUInt16LE(8, 10); record.writeUInt16LE(33, 14);
    record.writeUInt32LE(crc, 16); record.writeUInt32LE(data.length, 20);
    record.writeUInt32LE(file.data.length, 24); record.writeUInt16LE(name.length, 28);
    record.writeUInt32LE(offset, 42); central.push(record, name);
    centralSize += record.length + name.length;
    offset += header.length + name.length + data.length;
  }
  if (files.length > 65535 || offset + centralSize > 0xffffffff) throw new Error('ZIP32 archive exceeded');
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0); end.writeUInt16LE(files.length, 8);
  end.writeUInt16LE(files.length, 10); end.writeUInt32LE(centralSize, 12);
  end.writeUInt32LE(offset, 16);
  const archive = Buffer.concat([...local, ...central, end]);
  mkdirSync(outputDir, { recursive: true });
  const name = 'immersive-web-studio-' + version + '.skill';
  const path = join(outputDir, name);
  const sha256 = createHash('sha256').update(archive).digest('hex');
  writeFileSync(path, archive);
  writeFileSync(path + '.sha256', sha256 + '  ' + name + '\n');
  return { path, version, files: files.length, bytes: archive.length, sha256 };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const root = resolve(process.argv[2] ?? fileURLToPath(new URL('../', import.meta.url)));
    console.log(JSON.stringify(packageSkill(root), null, 2));
  } catch (error) { console.error(error.message); process.exitCode = 1; }
}
