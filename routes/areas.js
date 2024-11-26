'use strict'
var express = require('express');
var UserController = require('../controllers/areas');
var router = express.Router();
var auth = require('./../middlewares/authenticate');

router.post('/createArea', auth.authenticate, UserController.createArea);
router.put('/updateArea/:id_area', auth.authenticate, UserController.updateArea);
router.delete('/deleteArea/:id_area', auth.authenticate, UserController.deleteArea);
router.get('/getAreas', auth.authenticate, UserController.getAreas);

module.exports = router;