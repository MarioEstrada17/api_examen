'use strict'
var express = require('express');
var UserController = require('../controllers/empleados');
var router = express.Router();
var auth = require('./../middlewares/authenticate');

router.post('/createEmpleado', auth.authenticate, UserController.createEmpleado);
router.put('/updateEmpleado/:id_empleados', auth.authenticate, UserController.updateEmpleado);
router.delete('/deleteEmpleado/:id_empleados', auth.authenticate, UserController.deleteEmpleado);
router.get('/getEmpleados', auth.authenticate, UserController.getEmpleados);

module.exports = router;