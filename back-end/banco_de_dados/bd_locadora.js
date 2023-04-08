/*Arquivo responsavel por criar a conexão com o banco de dados e exportá-la*/

const mysql = require('mysql2') ;

const bd = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'locadora'
});

module.exports = bd;