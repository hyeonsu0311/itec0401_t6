ALTER USER 'root'@'%' IDENTIFIED BY 'root';
FLUSH PRIVILEGES;


CREATE TABLE IF NOT EXISTS Users(
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