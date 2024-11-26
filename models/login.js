const connection = require('../db/config');
const jwt = require('./../services/jwt');

let usuarioModel = {};

usuarioModel.loginUser = (usuarioData, callback) => {
    if (connection) {
        const sqlUser = `select * from users where correo = ${connection.escape(usuarioData.correo.toString().toLowerCase().trim())}`;

        connection.query(sqlUser, (err, result) => {
        if (err) { callback(null,{ "msg": "err", "message": 'Error al intentar logear al usuario'});}
        else {
                if (result.length === 0) {
                    callback(null, { "msg": "err", "message": 'El correo ingresado no se encuentra registrado en la base de datos.'});
                } else {
                    let tmpUser = Array.from(result);
                    if (usuarioData.pass === tmpUser[0].pass) {
                        const user = {
                            correo: tmpUser[0].correo.toString().toLowerCase().trim(),
                            pass: tmpUser[0].pass
                        };
                        callback(null, { "msg": "success", "message": `¡Bienvenido ${tmpUser[0].nombres} ${tmpUser[0].apellidoPaterno}!`, "result": tmpUser[0], "token": jwt.createToken(user)});
                    } else {
                        callback(null, { "msg": "err", "message": 'La contraseña es incorrecta'});
                    }
                }
            }
        }); 
    }
}

module.exports = usuarioModel;