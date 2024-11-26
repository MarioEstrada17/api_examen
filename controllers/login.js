const Usuario = require('../models/login');

var controller = {
    loginUser: function(req, res){
        Usuario.loginUser(req.query, (err, data) => {
            if (data.msg == 'success') {res.json({success: true, data: data})}
            else {res.status(201).json({success: false, data: data})}
        });
    },
}

module.exports = controller;