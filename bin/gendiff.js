#!/usr/bin/env node
import program from 'commander';
import genDiff from '../src/index.js';

program
  .version('1.0.0', '-V, --version', 'output the version number')
  .description('Compares two configuration files and shows a difference')
  .option('-f --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    const result = genDiff(filepath1, filepath2, program.format);
    console.log(result);
  })
  .parse(process.argv);
