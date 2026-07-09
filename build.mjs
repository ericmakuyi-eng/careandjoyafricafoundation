import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const dist = join(root, 'dist');

function copyIfExists(from, to) {
  if (existsSync(from)) {
    cpSync(from, to, { recursive: true });
    return true;
  }
  return false;
}

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

for (const item of ['index.html', 'src']) {
  const source = join(root, item);
  if (!existsSync(source)) {
    throw new Error(`Required build input missing: ${item}`);
  }
  cpSync(source, join(dist, item), { recursive: true });
}

// Images are included in the ZIP at project root. This fallback prevents Vercel from
// failing the build if a GitHub upload accidentally misses the folder.
const copiedImages =
  copyIfExists(join(root, 'images'), join(dist, 'images')) ||
  copyIfExists(join(root, 'public', 'images'), join(dist, 'images'));

if (!copiedImages) {
  console.warn('Warning: images folder was not found. Build will continue, but page images will be missing. Upload the /images folder to restore photos.');
  mkdirSync(join(dist, 'images'), { recursive: true });
}

copyIfExists(join(root, 'vercel.json'), join(dist, 'vercel.json'));

console.log('Build complete: static site copied to dist/');
