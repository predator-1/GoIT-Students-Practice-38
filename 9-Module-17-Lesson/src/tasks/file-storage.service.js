const fs = require('fs');

const options = {
  encoding: 'utf-8',
};

const writeFile = (fileName, text) => {
  fs.writeFileSync(fileName, text, options);
};

const readFile = fileName => {
  return fs.readFileSync(fileName, options);
};

module.exports = {
  writeFile,
  readFile,
};
