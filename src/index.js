import fs from 'fs';
import path from 'path';
import union from 'lodash/union.js';
import has from 'lodash/has.js';
import isObject from 'lodash/isObject.js';
import render from './render.js';

const getData = (filepath) => {
  const absolutePathFile = path.resolve(process.cwd(), filepath);
  const dataFile = fs.readFileSync(absolutePathFile, 'utf-8');
  const parseFile = JSON.parse(dataFile);
  return parseFile;
};

const buildDiff = (data1, data2) => {
  const keys = union(Object.keys(data1), Object.keys(data2)).sort();
  const result = keys.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];
    if (!has(data1, key)) {
      return { key, type: 'added', currentValue: value2 };
    }
    if (!has(data2, key)) {
      return { key, type: 'removed', removedValue: value1 };
    }
    if (value1 === value2) {
      return { key, type: 'equal', currentValue: value1 };
    }
    if (isObject(value1) && isObject(value2)) {
      return { key, type: 'nested', currentValue: buildDiff(value1, value2) };
    }
    return {
      key,
      type: 'changed',
      removedValue: value1,
      currentValue: value2,
    };
  });
  return result;
};
// передать 3-им параметром format
const genDiff = (path1, path2) => {
  const data1 = getData(path1);
  const data2 = getData(path2);
  const difference = buildDiff(data1, data2);
  const result = render(difference);
  return result;
};

export default genDiff;
