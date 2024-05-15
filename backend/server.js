// server.js
const express = require('express');
const axios = require('axios');
const app = require('./src/app');
const cors = require('cors');
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;


//MySQL 데이터베이스 연결 설정
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'abc',  // 데이터베이스 사용자 이름
  password: '1234',  // 데이터베이스 비밀번호
  database: 'mydatabase'  // 데이터베이스 이름
});

connection.connect(err => {
  if (err) throw err;
  console.log('Connected to the MySQL server.');
});


app.use(cors());
app.use(express.json());

app.post('/get-token', async (req, res) => {
  const { code } = req.body;
  try {
    const params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('client_id', 'f6b2dd564814692c3cd96e84e34f50d9');  // 실제 API 키로 교체 필요
    params.append('redirect_uri', 'http://localhost:3000');  // 실제 리다이렉트 URI로 교체 필요
    params.append('code', code);

    const response = await axios.post('https://kauth.kakao.com/oauth/token', params.toString(), { //프론트에서 온 인가코드, 카카오 api를 사용하여 액세스토큰 수령
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      }
    });
    //user id 추출 후 db에 삽입
    const userInfoResponse = await axios.get('https://kapi.kakao.com/v2/user/me', {
      headers: {
        'Authorization': `Bearer ${response.data.access_token}`, // 헤더에 액세스 토큰 포함
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'}});
    const userID=userInfoResponse.data.id
    const username = userInfoResponse.data.properties.nickname; // 예: 카카오 API에서 닉네임을 가져옴
    const email = userInfoResponse.data.kakao_account.email; // 예: 카카오 API에서 이메일을 가져옴
    console.log(userID);
    console.log(username);
    console.log(email);
    
    const query = `INSERT INTO Users (user_id, username, email)
    VALUES (?, ?,?)
    ON DUPLICATE KEY UPDATE
    username=VALUES(username), email=VALUES(email)`;
    const values = [userID,username,email];
    
    connection.query(query, values, (insertError, insertResults) => {
      if (insertError) {
        console.error('Failed to insert or update user data:', insertError);
        res.status(500).send('Failed to save user information');
        return;
      }
      
    });

    //
    res.json(response.data);  // 액세스 토큰과 다른 정보를 클라이언트에 보냅니다.
  } catch (error) {
    console.error(error);
    res.status(500).send('Authentication failed');
  }
});



app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  const query = "SELECT * FROM Users WHERE user_id = ?";
  connection.query(query, [userId], (err, results) => {
      if (err) {
          console.error('Failed to retrieve user data:', err);
          res.status(500).send('Failed to get user information');
          return;
      }
      if (results.length > 0) {
          res.json(results[0]);
      } else {
          res.status(404).send('User not found');
      }
  });
});

// 사용자 정보를 업데이트하는 API 엔드포인트
app.put('/user/:id', (req, res) => {
  const { name, age, gender } = req.body;
  const userId = req.params.id;

  const query = `UPDATE Users SET username = ?, age = ?, gender = ? WHERE user_id = ?`;
  const values = [name, age, gender, userId];
  console.log(name)
  console.log(age)
  console.log(gender)
  console.log(userId)

  connection.query(query, values, (err, result) => {
      if (err) {
          console.error('Failed to update user data:', err);
          res.status(500).send('Failed to update user information');
          return;
      }
      res.send('User information updated successfully');
      console.log('update success')
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});