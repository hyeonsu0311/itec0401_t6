const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

// CORS 미들웨어 사용
app.use(cors());

// API 라우트를 위한 미들웨어 설정
app.use('/api', require('./src/api'));  // 예시: './src/api' 경로에 API 라우트를 구성

// React 빌드 폴더 서빙
app.use(express.static(path.join('my-app', 'build')));

// 모든 요청을 React 앱으로 리디렉션 (HTML5 History Mode)
app.get('*', (req, res) => {
  res.sendFile(path.join('my-app', 'build', 'index.html'));
});

// 환경 변수에서 포트 설정이 있으면 사용하고, 없으면 기본값 3000을 사용
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
