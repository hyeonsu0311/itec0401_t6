// src/app.js
const express = require('express');
const app = express();
const { originalPool } = require('./database'); // originalPool을 사용합니다.
const path = require('path');

app.use(express.static('public')); // 정적 파일 제공
app.use(express.json()); // JSON 파싱을 위한 미들웨어

app.get('/match', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/select.html'));
});

app.get('/users', (req, res) => {
  originalPool.query('SELECT * FROM Users', (err, results) => { // 수정: originalPool.query 사용
    if (err) {
      console.error('Error fetching data: ' + err.stack);
      res.status(500).send('Server error');
      return;
    }
    res.json(results);
  });
});

app.get('/api/getMatches', (req, res) => {
  const token = req.query.token;
  if (!matchedData[token]) {
    console.log(`No data found for token: ${token}`);
    return res.status(404).send('No match results found.');
  }
  res.json(matchedData[token]);
});



app.post('/addUser', (req, res) => {
  const userData = req.body;
  originalPool.query('INSERT INTO Users SET ?', [userData], (err) => { // 수정: originalPool.query 사용, [userData] 배열로 변경
    if (err) {
      console.error('Error inserting data: ' + err.stack);
      res.status(500).send('Error inserting data');
      return;
    }
    res.status(200).send('User added successfully');
  });
});

app.post('/findMatches', (req, res) => {
  const { gender, travelPreference, countryToVisit, travelBudget, accommodationPreferences } = req.body;
  const query = `
    SELECT * FROM Users WHERE 
    gender = ? AND 
    travel_preference = ? AND 
    country_to_visit = ? AND 
    travel_budget = ? AND 
    accommodation_preferences = ?;
  `;
  originalPool.query(query, [gender, travelPreference, countryToVisit, travelBudget, accommodationPreferences], (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).send('Server error');
    }
    res.json(results);  // 조회된 결과를 바로 JSON 형태로 클라이언트에 반환
  });
});

module.exports = app;