// src/findMatchingTravelers.js
const connection = require('./database'); // 데이터베이스 설정 파일을 올바르게 참조해야 합니다.

const findMatchingTravelers = (preferences) => {
  const query = `
    SELECT * FROM Users 
    WHERE 
      gender = ? AND
      travel_preference = ? AND
      country_to_visit = ? AND
      travel_budget = ? AND
      accommodation_preferences = ?
  `;

  connection.query(query, [
    preferences.gender,
    preferences.travelPreference,
    preferences.countryToVisit,
    preferences.travelBudget,
    preferences.accommodationPreferences
  ], (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      return;
    }
    console.log('Matching travelers:', results);
  });
};

// 예시 사용자 선호도 객체
const examplePreferences = {
  gender: 'Male',
  travelPreference: 'City',
  countryToVisit: 'France',
  travelBudget: 'Medium',
  accommodationPreferences: 'Hotel'
};

// 함수 실행
findMatchingTravelers(examplePreferences);
