import { cpSync, rmSync, writeFileSync } from 'fs';
import { join } from 'path';

const root = process.cwd();
const outDir = join(root, 'out');
const docsDir = join(root, 'docs');

rmSync(docsDir, { recursive: true, force: true });
cpSync(outDir, docsDir, { recursive: true });
writeFileSync(join(docsDir, '.nojekyll'), '');
