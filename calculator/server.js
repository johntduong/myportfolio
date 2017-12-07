'user strict';

const express = require('express');
const app = express();
const {callCalculate, callAssembleString} = require('./handlers');

const headers = {
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'access-control-allow-headers': 'x-parse-application-id, x-parse-rest-api-key, content-type, accept',
    'access-control-max-age': 10,
    'Content-Type': 'application/json'
};

app.get('/api/calculator/string/:str/input/:input', callAssembleString);
app.get('/api/calculator/string/:str', callCalculate);

app.listen(3000, function () {
    console.log('listening on port 3000!');
});