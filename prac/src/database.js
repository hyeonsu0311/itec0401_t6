// src/database.js
const mysql = require('mysql2');
require('dotenv').config();

// 기존 데이터베이스용 Pool
const originalPool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: 3306,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
}).promise();


module.exports = { originalPool};
