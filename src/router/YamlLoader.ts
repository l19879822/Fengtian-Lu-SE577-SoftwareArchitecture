import { rowType } from '../types/rowType';
import { promisify } from 'util';
import * as fs from 'fs';
// import * as yaml from 'js-yaml';

export const result = readYaml('../data/GithubRepo.yaml');
// export const result = readYaml('README.md');

function readFile(path: string) {
  return promisify(fs.readFile)(path, { encoding: 'UTF-8' });
}

function readYaml(path: string) {
  const yaml = require('js-yaml');
  // const fs = require('fs');
  console.log('\n *BEFORE* \n');
  const location = readFile(path);
  console.log('\n *STARTING* \n');

  const result = yaml.load(location) as rowType[];
  console.log(result);
  return result;
}

// // Get document, or throw exception on error
// try {
//   const doc = yaml.load(fs.readFileSync('/home/ixti/example.yml', 'utf8'));
//   console.log(doc);
// } catch (e) {
//   console.log(e);
// }

// export default document;
