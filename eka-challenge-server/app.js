require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const knex = require('knex')({
    client: 'pg',
    version: '7.2',
    connection: {
        host: '127.0.0.1',
        user: 'johnduong',
        password: null,
        database: 'onboarding-dev'
    }
});
const bookshelf = require('bookshelf')(knex);
const path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
}));

module.exports = app;