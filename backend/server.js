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
    console.log(userID);
    
    const query = `INSERT INTO Users (user_id, username, age, gender, country_of_residence, country_to_visit, travel_preference, password, email, phone_number)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ON DUPLICATE KEY UPDATE
    username=VALUES(username), age=VALUES(age), gender=VALUES(gender), country_of_residence=VALUES(country_of_residence),
    country_to_visit=VALUES(country_to_visit), travel_preference=VALUES(travel_preference), password=VALUES(password),
    email=VALUES(email), phone_number=VALUES(phone_number)`;
    const values = [userID, 'John Doe', 30, 'Male', 'South Korea', 'Japan', 'City', 'password123', 'email@example.com', '010-1234-5678'];
    
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


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});