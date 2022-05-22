import { rowType } from '../types/rowType';
// import { promisify } from 'util';
import fs from 'fs';

// import * as yaml from 'js-yaml';

export const result = readYaml('../data/GithubRepo.yaml');
// export const result = readYaml('README.md');

function readYaml(path: string) {
  const yaml = require('js-yaml');
  // const fs = require('fs');
  console.log('\n *BEFORE* \n');
  const location = fs.readFileSync(path, 'utf8');
  console.log('\n *STARTING* \n');

  const result = yaml.load(location) as rowType[];
  console.log(result);
  return result;
}

// async function getRepoInfo(path: string) {
//   const data = await loadYamlFile(path);
//   console.log(data);
// }

// // Get document, or throw exception on error
// try {
//   const doc = yaml.load(fs.readFileSync('/home/ixti/example.yml', 'utf8'));
//   console.log(doc);
// } catch (e) {
//   console.log(e);
// }

// export default document;
