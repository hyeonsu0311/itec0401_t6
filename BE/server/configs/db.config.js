// src/database.js
const mysql = require("mysql2");
require("dotenv").config();

// 기존 데이터베이스용 Pool
const originalPool = mysql
  .createPool({
    host: "mysql-docker", // Docker Compose에서 정의한 MySQL 컨테이너 이름
    user: "user",
    password: "root",
    database: "mydatabase",
  })
  .promise();

module.exports = { originalPool };
