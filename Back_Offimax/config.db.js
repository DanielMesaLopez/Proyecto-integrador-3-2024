//Conexión a la BD descrita en .env
const dotenv = require("dotenv");
dotenv.config();
 
const mysql = require('mysql2');
let connection;
 
try {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'daniel0793',
        database: 'offimax'
    });
} catch (error) {
    console.log("Error al conectar con la base de datos");
}
 
module.exports = {connection};