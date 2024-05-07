// src/api.js 파일을 만들어서 서버 측 API 라우트를 구성합니다. 이 파일은 서버 측 API 라우트를 정의하고, 데이터베이스에서 데이터를 가져오는 데 사용됩니다. 이 파일은 Express 라우터를 사용하여 API 엔드포인트를 정의하고, 데이터베이스에서 데이터를 가져오는 데 사용됩니다.
const express = require('express');
const router = express.Router();
const { originalPool } = require('./database'); // 데이터베이스 설정을 가져옵니다.

// 매칭된 데이터를 조회하는 API 엔드포인트
router.post('/findMatches', async (req, res) => {
  const { gender, travelPreference, countryToVisit, travelBudget, accommodationPreferences } = req.body;
  console.log(gender, travelPreference, countryToVisit, travelBudget, accommodationPreferences)
  try {
    const query = `
      SELECT * FROM Users WHERE
      gender = ? AND
      travel_preference = ? AND
      country_to_visit = ? AND
      travel_budget = ? AND
      accommodation_preferences = ?;
    `;
    const [results, fields] = await originalPool.query(query, [gender, travelPreference, countryToVisit, travelBudget, accommodationPreferences]);
    
    res.json(results);  // Send back the query results as JSON
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
