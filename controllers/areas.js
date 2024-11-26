const Usuario = require('../models/areas');

var controller = {
    createArea: function(req, res){
        Usuario.createArea(req.body, (err, data) => {
            if (data.msg == 'success') {res.json({success: true, data: data})}
            else {res.status(201).json({success: false, data: data})}
        });
    },
    updateArea: function(req, res){
        Usuario.updateArea(req.body, req.params, (err, data) => {
            if (data.msg == 'success') {res.json({success: true, data: data})}
            else {res.status(201).json({success: false, data: data})}
        });
    },
    deleteArea: function(req, res){
        Usuario.deleteArea(req.params, (err, data) => {
            if (data.msg == 'success') {res.json({success: true, data: data})}
            else {res.status(201).json({success: false, data: data})}
        });
    },
    getAreas: function(req, res){
        Usuario.getAreas(req.query, (err, data) => {
            if (data.msg == 'success') {res.json({success: true, data: data})}
            else {res.status(201).json({success: false, data: data})}
        });
    },
}

module.exports = controller;