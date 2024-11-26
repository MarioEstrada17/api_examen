const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const keyStr = '825492ec110791b24e6dae80862060ff8c9ec938f4254619f554fe01ab0045ca';
const ivStr = '2273203bac5c3f968fbf6a7d011e5064';

exports.encrypt = function(text) {
    const bufferKey = Buffer.from(keyStr, 'hex');
    const bufferIv = Buffer.from(ivStr, 'hex');
    let cipher = crypto.createCipheriv(algorithm, Buffer.from(bufferKey), bufferIv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return encrypted.toString('hex');
}