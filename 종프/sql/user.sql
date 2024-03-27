DROP DATABASE IF EXISTS mydatabase;
CREATE DATABASE mydatabase;
USE mydatabase;
DROP TABLE IF EXISTS Users;

CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY, -- 고유키
    username VARCHAR(50) NOT NULL, -- 이름 
    age INT, -- 나이 
    gender VARCHAR(10), -- 성별 
    country_of_residence VARCHAR(50), -- 주거 국가 
    country_to_visit VARCHAR(50), -- 방문할 국가 
    travel_preference VARCHAR(15), -- 도시, 자연 
    user_id VARCHAR(30) UNIQUE NOT NULL, -- 사용자 ID
    password VARCHAR(255) NOT NULL, -- 사용자 비밀번호 
    email VARCHAR(100), -- 사용자 이메일 
    phone_number VARCHAR(1024), -- 전화번호
    travel_type VARCHAR(50), -- 많이 걸어다니는것, 많이 걷지 않는것
    activities VARCHAR(255), -- 그 나라에서 꼭 해보고 싶은 활동 
    travel_budget VARCHAR(20), -- 돈
    available_dates VARCHAR(50), -- 기간
    start_date DATE, -- 출발 날짜
    duration_days INT, -- 귀국 날짜
    accommodation_preferences VARCHAR(100), -- 호텔, 에어비앤비, 게스트하우스 ...
    dietary_preferences VARCHAR(100), -- 식사 ex) 못먹는 음식 또는 좋아하는 음식
    transportation_preferences VARCHAR(100), -- 이동수단
    social_media_profiles VARCHAR(255), -- SNS ex) 인스타 이름
    introduction TEXT, -- 소개 
    communication_preferences VARCHAR(50), -- 어떤 방식으로 연락
    emergency_contact_name VARCHAR(50), -- 비상시 연락할 이름 ex) 부모
    emergency_contact_phone VARCHAR(255), -- 비상연락처
    health_status VARCHAR(255),  -- 건강에 대한 이상상태
    previous_travels INT, -- 이전에 여행을 해본 횟수 
    occupation VARCHAR(100) -- 직업
);

/* 이름: JaneDoe
나이: 28
성별: Female
주거 국가: South Korea
방문할 국가: Italy
여행 선호: City
사용자 ID: janedoe123
비밀번호: password123!
이메일: jane.doe@example.com
전화번호: 010-1234-5678
여행 유형: Walking
활동: Wine tasting, Historical tours
여행 예산: Medium
가능한 여행 기간: 2024-04-01 to 2024-04-15
출발 날짜: 2024-04-01
여행 기간(일): 14
숙박 선호도: Hotel
식사 선호도: No dietary restrictions
교통 수단 선호: Public transport, Walking
소셜 미디어 프로필: @janedoe
자기소개: Love to explore new cultures and cuisines!
커뮤니케이션 선호: Email
비상 연락처 이름: John Doe
비상 연락처 전화번호: 010-8765-4321
건강 상태: No health issues
이전 여행 횟수: 5
직업: Content Writer */

INSERT INTO Users (
    username, age, gender, country_of_residence, country_to_visit, 
    travel_preference, user_id, password, email, phone_number, 
    travel_type, activities, travel_budget, available_dates, 
    start_date, duration_days, accommodation_preferences, 
    dietary_preferences, transportation_preferences, social_media_profiles, 
    introduction, communication_preferences, emergency_contact_name, 
    emergency_contact_phone, health_status, previous_travels, occupation
) VALUES (
    'Kim', 28, 'Female', 'South Korea', 'Italy', 
    'City', 'janedoe123', 'password123!', 'jane.doe@example.com', '010-1234-5678', 
    'Walking', 'Wine tasting, Historical tours', 'Medium', '2024-04-01 to 2024-04-15', 
    '2024-04-01', 14, 'Hotel', 'No dietary restrictions', 'Public transport, Walking', 
    '@janedoe', 'Love to explore new cultures and cuisines!', 'Email', 'John Doe', 
    '010-8765-4321', 'No health issues', 5, 'Content Writer'
);

SELECT
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
WHERE 
  age BETWEEN 20 AND 60 AND
  gender IN ('Male', 'Female') AND
  travel_preference IN ('City', 'Nature', 'Both')
GROUP BY age_group, gender, travel_preference
ORDER BY age_group ASC, gender ASC, travel_preference ASC;


select * from Users;