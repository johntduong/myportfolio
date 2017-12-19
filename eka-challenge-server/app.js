require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const bookshelf = require('./bookshelf');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const User = bookshelf.Model.extend({
    tableName: 'users',
    idAttribute: 'id',
});

const handleFormOneRequest = (data) => {
    return User.forge({ 'username': 'supergreen' }, { require: false })
    .fetch()
    .then((user) => {
        if (user) {
            return updateTableEntry(user, data)
         } else {
            return createTableEntry(data)
         }
    })
}

const updateTableEntry = (user, formData) => {
    return user.save(formData, {method: 'update'})
    .then((model) => {
        return model.toJSON().id;
    })
};

const createTableEntry = (formData) => {
    return user.save(formData, {method: 'insert'})
    .then((model) => {
        return model.toJSON().id;
    })
};

router.route('/form1')
.get((req, res) => {
    res.json({error: false, data: handleFormOneRequest(req.body)})
})


app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
}));

module.exports = app;