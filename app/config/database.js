const knex = require ('knex');

module.exports = knex({
    client: 'pg',        //indicara que se utilizara postgres como motor de BD.
    connection: 'postgres://postgres:daniel1234@localhost:5432/banco', //cadena de conexión.
    pool: {min: 1, max: 2},
    acquireConnectionTimeout: 5000,
});