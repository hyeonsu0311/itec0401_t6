DROP DATABASE IF EXISTS mydatabase;
CREATE DATABASE mydatabase;
USE mydatabase;
DROP TABLE IF EXISTS Users;


-- 사용자 정보를 가진 테이블

CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY, -- 고유키
    username VARCHAR(50) NOT NULL, -- 이름 
    age INT, -- 나이 
    gender VARCHAR(10), -- 성별 
    country_of_residence VARCHAR(50), -- 주거 국가 
    country_to_visit VARCHAR(50), -- 방문할 국가 
    travel_preference VARCHAR(15), -- 도시, 자연 
    user_id VARCHAR(30) UNIQUE NOT NULL, -- 사용자 ID
   
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

-- 사용자의 정보중 일치하는 사용자끼리 그룹화를 진행한 테이블 

-- groupData.js 파일을 실행해서 그룹화를 진행하고 그룹화된 데이터들이 저장되게 했음
CREATE TABLE IF NOT EXISTS GroupedTravelers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    country_of_residence VARCHAR(255),
    country_to_visit VARCHAR(255),
    age_group VARCHAR(255),
    gender VARCHAR(255),
    travel_preference VARCHAR(255),
    count INT
);



-- Users 테이블과 연결되는 Schedule 테이블 

CREATE TABLE Schedule (
    Schedule_id INT AUTO_INCREMENT PRIMARY KEY,
    Schedule_author INT, -- Users 테이블의 id를 참조
    Schedule_name VARCHAR(255),
    Start_date DATE,
    End_date DATE,
    FOREIGN KEY (Schedule_author) REFERENCES Users(id)
);

-- Users 테이블과 연결되는 Schedule_candidate 테이블 

CREATE TABLE Schedule_candidate (
    Schedule_id INT,
    User_id INT, -- Users 테이블의 id를 참조
    PRIMARY KEY (Schedule_id, User_id),
    FOREIGN KEY (Schedule_id) REFERENCES Schedule(Schedule_id),
    FOREIGN KEY (User_id) REFERENCES Users(id)
);

CREATE TABLE Schedule_content (
    Schedule_id INT,
    Schedule_day DATE,
    Content TEXT,
    PRIMARY KEY (Schedule_id, Schedule_day),
    FOREIGN KEY (Schedule_id) REFERENCES Schedule(Schedule_id)
);

CREATE TABLE Schedule_memo (
    Schedule_id INT,
    Schedule_day DATE,
    Content TEXT,
    PRIMARY KEY (Schedule_id, Schedule_day),
    FOREIGN KEY (Schedule_id) REFERENCES Schedule(Schedule_id)
);

CREATE TABLE Schedule_place (
    Schedule_id INT,
    Schedule_day DATE,
    Place_name VARCHAR(255),
    PRIMARY KEY (Schedule_id, Schedule_day),
    FOREIGN KEY (Schedule_id) REFERENCES Schedule(Schedule_id)
);




CREATE TABLE Country (
    Country_id INT AUTO_INCREMENT PRIMARY KEY,
    Country_name VARCHAR(255)
);

CREATE TABLE City (
    City_id INT AUTO_INCREMENT PRIMARY KEY,
    City_name VARCHAR(255),
    Country_id INT,
    FOREIGN KEY (Country_id) REFERENCES Country(Country_id)
);

CREATE TABLE Place (
    Place_id INT AUTO_INCREMENT PRIMARY KEY,
    Place_name VARCHAR(255),
    Country_id INT,
    FOREIGN KEY (Country_id) REFERENCES Country(Country_id)
);

CREATE TABLE Place_category (
    Place_id INT,
    Place_category VARCHAR(255),
    PRIMARY KEY (Place_id, Place_category),
    FOREIGN KEY (Place_id) REFERENCES Place(Place_id)
);

CREATE TABLE Place_img (
    Place_id INT,
    Place_img VARCHAR(255),
    PRIMARY KEY (Place_id, Place_img),
    FOREIGN KEY (Place_id) REFERENCES Place(Place_id)
);

CREATE TABLE Place_content (
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    content TEXT
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


