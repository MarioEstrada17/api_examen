'use strict'
const jwt = require('jsonwebtoken');
exports.createToken = function(user) {
    return jwt.sign(user, 'MarioEstradaYm281219', {expiresIn: 60 * 720});
};