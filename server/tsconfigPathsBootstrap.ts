import * as tsconfigPaths from 'tsconfig-paths';
import { parse } from 'jsonc-parser';
import fs from 'fs';
import path from 'path';

const filepath = path.resolve(__dirname, 'tsconfig.json');
const file = fs.readFileSync(filepath, 'utf-8')
const tsconfig = parse(file);

const registerParams = {
  baseUrl: tsconfig.compilerOptions.outDir,
  paths: tsconfig.compilerOptions.paths
}

tsconfigPaths.register(registerParams);
