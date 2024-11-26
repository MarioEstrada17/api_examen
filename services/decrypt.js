const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const keyStr = '825492ec110791b24e6dae80862060ff8c9ec938f4254619f554fe01ab0045ca';
const ivStr = '2273203bac5c3f968fbf6a7d011e5064';

exports.decrypt = function(text) {
    const bufferKey = Buffer.from(keyStr, 'hex');
    let iv = Buffer.from(ivStr, 'hex');
    let encryptedText = Buffer.from(text, 'hex');
    let decipher = crypto.createDecipheriv(algorithm, Buffer.from(bufferKey), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}