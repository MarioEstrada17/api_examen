const connection = require('../db/config');

let usuarioModel = {};

usuarioModel.createArea = (usuarioData, callback) => {
    if (connection) {
        const sqlUser = `insert into areas SET
        descripcion = ${connection.escape(usuarioData.descripcion)}`;

        connection.query(sqlUser, (err, result) => {
            if (err) { callback(null,{ "msg": "err", "message": 'Error al crear área'});}
            else {
                callback(null,{ "msg": "success", "message": 'Área creada con éxito.'});
            }
        });
    }
}
usuarioModel.updateArea = (usuarioData, params, callback) => {
    if (connection) {
        const sqlUser = `update areas SET
        descripcion = ${connection.escape(usuarioData.descripcion)} where id_area = ${params.id_area}`;

        connection.query(sqlUser, (err, result) => {
            if (err) { callback(null,{ "msg": "err", "message": 'Error al actualizar área'});}
            else {
                callback(null,{ "msg": "success", "message": 'Área actualizada con éxito.'});
            }
        });
    }
}
usuarioModel.deleteArea = (usuarioData, callback) => {
    if (connection) {
        const sqlUser = `select * from empleados where id_area = ${usuarioData.id_area}`;

        connection.query(sqlUser, (err, result) => {
            if (err) { callback(null,{ "msg": "err", "message": 'Error al eliminar área'});}
            else {
                const tmpResult = Array.from(result);
                if (tmpResult.length === 0) {
                    const sqlUser2 = `delete from areas where id_area = ${usuarioData.id_area}`;

                    connection.query(sqlUser2, (err2, result2) => {
                        if (err2) { callback(null,{ "msg": "err", "message": 'Error al eliminar área'});}
                        else {
                            callback(null,{ "msg": "success", "message": 'Área eliminada con éxito.'});
                        }
                    });
                } else {
                    callback(null,{ "msg": "err", "message": 'Esta área no puede ser eliminada ya que hay empleados registrados con esta área.'});
                }
            }
        });
    }
}
usuarioModel.getAreas = (usuarioData, callback) => {
    if (connection) {
        const sqlUser = `select * from areas`;

        connection.query(sqlUser, (err, result) => {
            if (err) { callback(null,{ "msg": "err", "message": 'Error al obtener las áreas'});}
            else {
                callback(null,{ "msg": "success", "result": result});
            }
        });
    }
}

module.exports = usuarioModel;