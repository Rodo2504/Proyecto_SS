module.exports = {
    getCarreras: (connection, body, callback) => {
        connection.query('SELECT * FROM carrera;', (err, results) => {
            if (err) {
                callback({ array: null, id: null, success: false, err: JSON.stringify(err) });
                return;
            }
            callback( results );
        })
    }
}