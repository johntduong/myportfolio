'user strict';

const express = require('express');
const app = express();
const handlers = require('./handlers');

const headers = {
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'access-control-allow-headers': 'x-parse-application-id, x-parse-rest-api-key, content-type, accept',
    'access-control-max-age': 10,
    'Content-Type': 'application/json'
};

app.get('/api/calculator/string/:str/input/:in', handlers.callAssembleString);
app.get('/api/calculator/string/:str', handlers.callCalculate);

app.listen(3000, function () {
    console.log('listening on port 3000!');
});