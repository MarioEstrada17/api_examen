'use strict'
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const fetch = require('cross-fetch');
var app = express();

const areas = require('./routes/areas');
const empleados = require('./routes/empleados');
const login = require('./routes/login');

app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
app.use(bodyParser.json({ limit: '100mb', extended: true }));
app.use(cors({ origin: '*' }));

app.use('/', function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    next();
});

app.use('/areas', areas);
app.use('/empleados', empleados);
app.use('/user', login);

module.exports = app;