const mysql = require("mysql2");

const sqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "toruga",
});

module.exports = sqlConnection;
