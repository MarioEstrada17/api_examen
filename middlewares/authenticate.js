'use strict'
const secret = 'MarioEstradaYm281219';
const jwt = require('jsonwebtoken');
const moment = require('moment');
exports.authenticate = function(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(403).send({
            "msg": "err",
            "message": 'La petición no tiene la cabecera de autorización'
        });
    } else {
        const token = req.headers.authorization.replace('Bearer ', '');
        jwt.verify(token, secret, function(err, data) {
            if (err) {
                return res.status(401).send({"msg": "err", "message": 'El token no es válido'});
            } else {
                next();
            }
        });
    }
}