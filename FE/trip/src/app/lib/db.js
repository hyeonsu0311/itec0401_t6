import mysql from 'mysql';

const pool = mysql.createPool({
  connectionLimit: 10, // 연결을 풀에 유지할 최대 수
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

export const query = (queryString, params) => {
  return new Promise((resolve, reject) => {
    pool.query(queryString, params, (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
};

export default pool;
