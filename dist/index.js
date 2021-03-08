"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _union = _interopRequireDefault(require("lodash/union"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getData = filepath => {
  const dataFile = _fs.default.readFileSync(_path.default.resolve(process.cwd(), filepath), 'utf-8');

  const parseFile = JSON.parse(dataFile);
  return parseFile;
};

const buildDiff = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const keys = (0, _union.default)(keys1, keys2);
  console.log(keys);
};

const genDiff = (path1, path2, format) => {
  const data1 = getData(path1);
  const data2 = getData(path2);
  const difference = buildDiff(data1, data2); //   console.log(typeof data1);
  //   console.log(data2);
  //   return difference;
};

var _default = genDiff;
exports.default = _default;