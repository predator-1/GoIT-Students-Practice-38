/** Create Authorization API
 * 1. Saving creds in file
 * 2. Add 404 error
 */

const { isValidCreds } = require('./auth.service');
const express = require('express');

const app = express();

app.get('/auth', function (req, res) {
  const { login, password } = req.query;
  const textResp = `you creds is ${
    isValidCreds(login, password) ? 'valid' : 'invalid'
  }`;
  res.send(textResp);
});

app.get('*', function (req, res) {
  res.status(404).send('Not found');
});

app.listen(3000);
