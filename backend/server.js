// server.js
const express = require('express');
const axios = require('axios');
const app = require('./src/app');
const cors = require('cors');
const PORT = process.env.PORT || 3001;

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
    res.json(response.data);  // 액세스 토큰과 다른 정보를 클라이언트에 보냅니다.
  } catch (error) {
    console.error(error);
    res.status(500).send('Authentication failed');
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});