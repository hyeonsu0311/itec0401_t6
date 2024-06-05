const faker = require("faker");
const mysql = require("mysql2/promise");
require("dotenv").config();

// countries와 travelPreferences 배열을 정의합니다.
const countries = [
  "서울",
  "부산",
  "대구",
  "인천",
  "광주",
  "대전",
  "울산",
  "창원",
  "경기",
  "강원",
  "충북",
  "충남",
  "전북",
  "전남",
  "경북",
  "경남",
  "제주",
  "세종"
];
const travelPreferences = ["도시", "자연", "상관없음"];

const generatorSeed = async () => {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  });

  for (let i = 0; i < 500; i++) {
    const username = faker.name.findName().substring(0, 50);
    const age = faker.datatype.number({ min: 10, max: 60 });
    const gender = faker.random.arrayElement(["남자", "여자"]);
    const country_of_residence = faker.random.arrayElement(countries);
    const country_to_visit = faker.random.arrayElement(countries);
    const travel_preference = faker.random.arrayElement(travelPreferences);
    const user_id = faker.internet.userName().substring(0, 30);
    const password = faker.internet.password().substring(0, 255);
    const email = faker.internet.email().substring(0, 100);
    const phone_number = faker.phone
      .phoneNumber()
      .replace(/[^\d]/g, "")
      .substring(0, 20);
    const travel_type = faker.random
      .arrayElement(["도보", "차", "대중교통"])
      .substring(0, 50);
    const activities = faker.lorem.sentence().substring(0, 255);
    const travel_budget = faker.random
      .arrayElement(["낮음", "중간", "높음"])
      .substring(0, 20);
    const available_dates = faker.date.future().toISOString().substring(0, 50);
    const start_date = faker.date.soon().toISOString().split("T")[0];
    const duration_days = faker.datatype.number({ min: 1, max: 14 });
    const accommodation_preferences = faker.random
      .arrayElement(["호텔", "민박", "호스텔", "에어비엔비", "당일치기"])
      .substring(0, 100);
    const dietary_preferences = faker.random
      .arrayElement(["채식", "고기", "면", "상관없음"])
      .substring(0, 100);
    const transportation_preferences = faker.random
      .arrayElement(["차", "대중교통", "자전거", "도보"])
      .substring(0, 100);
    const social_media_profiles = faker.internet.userName().substring(0, 255);
    const introduction = faker.lorem.paragraph().substring(0, 255);
    const communication_preferences = faker.random
      .arrayElement(["이메일", "휴대폰", "메신저"])
      .substring(0, 50);
    const emergency_contact_name = faker.name.findName().substring(0, 50);
    const emergency_contact_phone = faker.phone
      .phoneNumber()
      .replace(/[^\d]/g, "")
      .substring(0, 20);
    const health_status = faker.random
      .arrayElement(["건강상 문제없음", "식도염", "피로", "스트레스", "기타"])
      .substring(0, 255);
    const previous_travels = faker.datatype.number({ min: 0, max: 50 });
    const occupation = faker.name.jobTitle().substring(0, 100);

    // INSERT 문을 개선합니다.
    const insertQuery = `
      INSERT INTO Users (username, age, gender, country_of_residence, country_to_visit, travel_preference, user_id, password, email, phone_number, travel_type, activities, travel_budget, available_dates, start_date, duration_days, accommodation_preferences, dietary_preferences, transportation_preferences, social_media_profiles, introduction, communication_preferences, emergency_contact_name, emergency_contact_phone, health_status, previous_travels, occupation) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const insertValues = [
      username,
      age,
      gender,
      country_of_residence,
      country_to_visit,
      travel_preference,
      user_id,
      password,
      email,
      phone_number,
      travel_type,
      activities,
      travel_budget,
      available_dates,
      start_date,
      duration_days,
      accommodation_preferences,
      dietary_preferences,
      transportation_preferences,
      social_media_profiles,
      introduction,
      communication_preferences,
      emergency_contact_name,
      emergency_contact_phone,
      health_status,
      previous_travels,
      occupation,
    ];

    try {
      await connection.execute(insertQuery, insertValues);
    } catch (err) {
      console.error("Error inserting data:", err);
      break; // 오류가 발생하면 루프 중단
    }
  }

  console.log("Data insertion complete.");
  await connection.end();
};

module.exports = { generatorSeed };
