require("dotenv").config();

const mysql = require("mysql2");

const connect = mysql.createConnection(process.env.DATABASE_URL);

module.exports = connect;
