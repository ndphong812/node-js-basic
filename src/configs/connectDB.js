// get the client
// const mysql = require('mysql2');
import mysql from "mysql2"
// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'nodejsbasic',
    password:'08122002'
});

// simple query


export default connection;