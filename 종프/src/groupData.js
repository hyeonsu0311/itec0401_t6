const { originalPool} = require('./database');

const insertGroupedDataIntoNewTable = async (groupedData) => {
  // Promise.all을 사용하여 모든 쿼리가 완료될 때까지 기다립니다.
  const insertPromises = groupedData.map(data => {
    const insertQuery = `
      INSERT INTO GroupedTravelers (country_of_residence, country_to_visit, age_group, gender, travel_preference, count)
      VALUES (?, ?, ?, ?, ?, ?);
    `;
    return new Promise((resolve, reject) => {
      originalPool.query(insertQuery, [data.country_of_residence, data.country_to_visit, data.age_group, data.gender, data.travel_preference, data.count], (err, results) => {
        if (err) {
          console.error('Error inserting grouped data:', err);
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  });

  try {
    // 모든 삽입 작업이 완료될 때까지 기다립니다.
    await Promise.all(insertPromises);
    console.log('All grouped data inserted successfully');
  } catch (err) {
    // 에러 처리
    console.error('Error occurred during data insertion:', err);
  }
};

const groupData = () => {
  const query = `
    SELECT 
      country_of_residence, 
      country_to_visit,
      CASE 
        WHEN age BETWEEN 20 AND 30 THEN '20-30'
        WHEN age BETWEEN 31 AND 40 THEN '31-40'
        WHEN age BETWEEN 41 AND 50 THEN '41-50'
        WHEN age BETWEEN 51 AND 60 THEN '51-60'
        ELSE 'Other' 
      END AS age_group,
      gender,
      travel_preference,
      COUNT(*) AS count
    FROM Users
    WHERE age BETWEEN 20 AND 60
    GROUP BY country_of_residence, country_to_visit, age_group, gender, travel_preference
    ORDER BY country_of_residence, country_to_visit, age_group, gender, travel_preference;
  `;

  originalPool.query(query, async (err, results) => {
    if (err) {
      console.error('Error fetching grouped data:', err);
      return;
    }
    console.log('Grouped data:', results);

    // 새 테이블에 그룹화된 데이터 삽입 함수를 호출합니다.
    await insertGroupedDataIntoNewTable(results);
  });
};

groupData();
