'use strict'
var express = require('express');
var UserController = require('../controllers/login');
var router = express.Router();

router.get('/loginUser', UserController.loginUser);

module.exports = router;