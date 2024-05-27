import pool from '@/app/lib/db';

export async function GET(req) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        console.error('데이터베이스 연결 실패:', err);
        return reject(new Response(JSON.stringify({ error: 'Database connection failed' }), { status: 500 }));
      }

      connection.query('SELECT 1 + 1 AS solution', (error, results) => {
        connection.release(); // 연결 해제

        if (error) {
          console.error('쿼리 실행 실패:', error);
          return reject(new Response(JSON.stringify({ error: 'Query execution failed' }), { status: 500 }));
        }

        resolve(new Response(JSON.stringify({ result: results[0].solution }), { status: 200 }));
      });
    });
  });
}