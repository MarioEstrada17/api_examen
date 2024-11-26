'use strict'
var app = require('./app');
var cors = require('cors');
var port = 8002;
var hostname = 'localhost';

const fetch = require('cross-fetch');

app.use(cors({ origin: 'http://localhost/' }));

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.listen(port, () => {
    console.log(`Server inicializado en el puerto: ${port}, ${hostname} ` );
});