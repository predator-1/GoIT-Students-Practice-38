const { writeFile, readFile } = require('./file-storage.service');

const database = 'database.txt';

writeFile(database, 'mylogin:mypassword');

const isValidCreds = (login, password) => {
  const db = readFile(database);
  return `${login}:${password}` === db;
};

module.exports = { isValidCreds };
