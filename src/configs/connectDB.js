// get the client
// const mysql = require('mysql2');
import mysql from "mysql2/promise"
// create the connection to database
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodejsbasic',
    password:'08122002'
});


export default pool;