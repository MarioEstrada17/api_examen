const Usuario = require('../models/empleados');

var controller = {
    createEmpleado: function(req, res){
        Usuario.createEmpleado(req.body, (err, data) => {
            if (data.msg == 'success') {res.json({success: true, data: data})}
            else {res.status(201).json({success: false, data: data})}
        });
    },
    updateEmpleado: function(req, res){
        Usuario.updateEmpleado(req.body, req.params, (err, data) => {
            if (data.msg == 'success') {res.json({success: true, data: data})}
            else {res.status(201).json({success: false, data: data})}
        });
    },
    deleteEmpleado: function(req, res){
        Usuario.deleteEmpleado(req.params, (err, data) => {
            if (data.msg == 'success') {res.json({success: true, data: data})}
            else {res.status(201).json({success: false, data: data})}
        });
    },
    getEmpleados: function(req, res){
        Usuario.getEmpleados(req.query, (err, data) => {
            if (data.msg == 'success') {res.json({success: true, data: data})}
            else {res.status(201).json({success: false, data: data})}
        });
    },
}

module.exports = controller;