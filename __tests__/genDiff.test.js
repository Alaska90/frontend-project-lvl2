import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filetypes = ['json', 'yml'];
const fileformats = ['plain'];

const testArguments = fileformats.flatMap((format) => (
  filetypes.map((filetype) => [filetype, format])
));
test.each(testArguments)('genDiff %s', (filetype, format) => {
  const getFixturePath = (filename) => path.join(__dirname, '..', `__fixtures__/${filename}`);
  const before = getFixturePath(`before.${filetype}`);
  const after = getFixturePath(`after.${filetype}`);
  const expectedResult = fs.readFileSync(getFixturePath(format), 'utf-8');
  expect(genDiff(before, after, format)).toEqual(expectedResult);
});
