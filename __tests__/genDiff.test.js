import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const expectedJSON = fs.readFileSync(getFixturePath('json.txt'), 'utf-8');

const jsonFilePath1 = getFixturePath('file1.json');
const jsonFilePath2 = getFixturePath('file2.json');

test('json', () => {
  const diff = genDiff(jsonFilePath1, jsonFilePath2);
  expect(diff).toEqual(expectedJSON);
});
