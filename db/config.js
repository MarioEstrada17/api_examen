const mysql = require('mysql2');
const {promisify} = require('util');

const config = {
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'Ym281219',
    database: 'bal'
}
const pool = mysql.createPool(config);
pool.getConnection((err, connection) => {
    if (err){
        switch (err.code) {
            case 'PROTOCOL_CONNECTION_LOST':
                console.error('CONEXIÓN CERRADA');
                break;
        
            case 'ER_CON_COUNT_ERROR':
                log.error('LA BASE TIENE DEMASIADAS CONEXIONES');
                break;

            case 'ECONNREFUSED':
                console.error('LA CONEXIÓN A LA BD FUE RECHAZADA');
                break;
        }    
    }
    if (connection) {
        connection.release();
        console.log('CONEXIÓN EXITOSA A LA BD');
        return;
    }
})
pool.query = promisify(pool.query)

module.exports = pool;