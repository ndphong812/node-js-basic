import mysql from "mysql2/promise"
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodejsbasic',
    password: '08122002'
});

export default pool;