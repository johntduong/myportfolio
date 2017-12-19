require('dotenv').config()
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const router = express.Router();
const { Client } = require('pg');
const client = new Client({
    user: 'johnduong',
    host: '127.0.0.1',
    database: 'redux-contributors-dev',
    password: null,
    port: 5432,
});
const path = require('path');
const app = express();

client.connect();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('*', (req, res) => {
    return fetch('https://api.github.com/repos/reactjs/redux/contributors?client_id=' + process.env.GITHUB_CLIENTID + '&client_secret=' + process.env.GITHUB_SECRET)
    .then((apiResponse) => apiResponse.json())
    .then((json) => json.map((contributor) => {
        return {
            name: contributor.login,
            avatarURL: contributor.avatar_url,
        }
    }))
    .then((modifiedContributors) => {
        modifiedContributors.forEach((modifiedContributor) => {
            client.query('INSERT INTO contributors(name, avatar) values($1, $2)',
            [modifiedContributor.name, modifiedContributor.avatarURL],
            (err, res) => {
                console.log(err ? err.stack : 'DONE!');
            });
        })
    })
})

module.exports = app;