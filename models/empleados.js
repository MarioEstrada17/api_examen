const connection = require('../db/config');
const encrypt = require('../services/encrypt');
const decrypt = require('../services/decrypt');

let usuarioModel = {};

usuarioModel.createEmpleado = (usuarioData, callback) => {
    if (connection) {
        const sqlUser = `insert into empleados SET
        nombres = ${connection.escape(encrypt.encrypt(usuarioData.nombres))},
        apellidoPaterno = ${connection.escape(encrypt.encrypt(usuarioData.apellidoPaterno))},
        apellidoMaterno = ${usuarioData.apellidoMaterno !== '' ? connection.escape(encrypt.encrypt(usuarioData.apellidoMaterno)) : null},
        correo = ${connection.escape(encrypt.encrypt(usuarioData.correo))},
        telefono = ${connection.escape(encrypt.encrypt(usuarioData.telefono))},
        id_area = ${usuarioData.id_area}`;

        connection.query(sqlUser, (err, result) => {
            if (err) { callback(null,{ "msg": "err", "message": 'Error al crear empleado'});}
            else {
                callback(null,{ "msg": "success", "message": 'Empleado creado con éxito.'});
            }
        });
    }
}
usuarioModel.updateEmpleado = (usuarioData, params, callback) => {
    if (connection) {
        const sqlUser = `update empleados SET
        nombres = ${connection.escape(encrypt.encrypt(usuarioData.nombres))},
        apellidoPaterno = ${connection.escape(encrypt.encrypt(usuarioData.apellidoPaterno))},
        apellidoMaterno = ${usuarioData.apellidoMaterno !== '' ? connection.escape(encrypt.encrypt(usuarioData.apellidoMaterno)) : null},
        correo = ${connection.escape(encrypt.encrypt(usuarioData.correo))},
        telefono = ${connection.escape(encrypt.encrypt(usuarioData.telefono))},
        id_area = ${usuarioData.id_area} where id_empleados = ${params.id_empleados}`;

        connection.query(sqlUser, (err, result) => {
            if (err) { callback(null,{ "msg": "err", "message": 'Error al actualizar empleado'});}
            else {
                callback(null,{ "msg": "success", "message": 'Empleado actualizado con éxito.'});
            }
        });
    }
}
usuarioModel.deleteEmpleado = (usuarioData, callback) => {
    if (connection) {
        const sqlUser = `delete from empleados where id_empleados = ${usuarioData.id_empleados}`;

        connection.query(sqlUser, (err, result) => {
            if (err) { callback(null,{ "msg": "err", "message": 'Error al eliminar empleado'});}
            else {
                callback(null,{ "msg": "success", "message": 'Empleado eliminado con éxito.'});
            }
        });
    }
}
usuarioModel.getEmpleados = (usuarioData, callback) => {
    if (connection) {
        const sqlUser = `select e.*, a.descripcion as desc_area from empleados as e
        INNER JOIN areas as a ON a.id_area = e.id_area`;

        connection.query(sqlUser, (err, result) => {
            if (err) { callback(null,{ "msg": "err", "message": 'Error al obtener empleados'});}
            else {
                let tmpResult = Array.from(result);
                tmpResult = tmpResult.map((mapeo) => {
                    return {
                        ...mapeo,
                        nombres: decrypt.decrypt(mapeo.nombres),
                        apellidoPaterno: decrypt.decrypt(mapeo.apellidoPaterno),
                        apellidoMaterno: mapeo.apellidoMaterno ? decrypt.decrypt(mapeo.apellidoMaterno) : '',
                        correo: decrypt.decrypt(mapeo.correo),
                        telefono: decrypt.decrypt(mapeo.telefono),
                        nombreCompleto: `${decrypt.decrypt(mapeo.nombres)} ${decrypt.decrypt(mapeo.apellidoPaterno)} ${mapeo.apellidoMaterno ? decrypt.decrypt(mapeo.apellidoMaterno) : ''}`
                    }
                });
                if (tmpResult.length > 0) {
                    callback(null,{ "msg": "success", "result": tmpResult});
                } else {
                    callback(null,{ "msg": "success", "result": []});
                }
            }
        });
    }
}

module.exports = usuarioModel;