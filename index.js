'use strict';

const express = require('express')
const app = express()
const config = require('./config');
const bodyParser = require('body-parser');

const UsersController = require('./controllers/users.controller');

require('./database');

app.use(bodyParser());

app.post('/users', UsersController.create)

app.listen(config.PORT, () => console.log(`Example app listening on port ${config.PORT}!`))
