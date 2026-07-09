import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const dist = join(root, 'dist');

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

for (const item of ['index.html', 'src', 'images']) {
  const source = join(root, item);
  if (!existsSync(source)) {
    throw new Error(`Required build input missing: ${item}`);
  }
  cpSync(source, join(dist, item), { recursive: true });
}

if (existsSync(join(root, 'vercel.json'))) {
  cpSync(join(root, 'vercel.json'), join(dist, 'vercel.json'));
}

console.log('Build complete: static site copied to dist/');
