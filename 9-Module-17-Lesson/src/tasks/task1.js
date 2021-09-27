/**
 * Create new file and add to file any text
 * Read file and return text
 */

const { writeFile, readFile } = require('./file-storage.service');

const fileName = 'some-file.txt';

writeFile(fileName, 'this is my text');

const text = readFile(fileName);

console.log(text);
