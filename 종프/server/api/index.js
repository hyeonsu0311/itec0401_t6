// server/api/index.js 파일을 만들어서 서버 측 API 라우트를 구성합니다. 이 파일은 서버 측 API 라우트를 정의하고, 데이터베이스에서 데이터를 가져오는 데 사용됩니다. 이 파일은 Express 라우터를 사용하여 API 엔드포인트를 정의하고, 데이터베이스에서 데이터를 가져오는 데 사용됩니다.
const express = require("express");
const router = express.Router();
const { originalPool } = require("../configs/db.config"); // 데이터베이스 설정을 가져옵니다.

// 매칭된 데이터를 조회하는 API 엔드포인트
router.post("/findMatches", async (req, res) => {
  const {
    gender,
    travelPreference,
    countryToVisit,
    travelBudget,
    accommodationPreferences,
  } = req.body;
  console.log(
    gender,
    travelPreference,
    countryToVisit,
    travelBudget,
    accommodationPreferences
  );
  try {
    const query = `
      SELECT * FROM Users WHERE
      gender = ? AND
      travel_preference = ? AND
      country_to_visit = ? AND
      travel_budget = ? AND
      accommodation_preferences = ?;
    `;
    const [results, fields] = await originalPool.query(query, [
      gender,
      travelPreference,
      countryToVisit,
      travelBudget,
      accommodationPreferences,
    ]);

    res.json(results); // Send back the query results as JSON
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).send("Server error");
  }
});

// 메시지 보내기 API 엔드포인트
router.post("/sendMessage", async (req, res) => {
  const { sender, receiver, message } = req.body;
  console.log("Sending message from", sender, "to", receiver, ":", message);

  try {
    const query = `
      INSERT INTO Messages (SenderID, ReceiverID, Content, Timestamp, ReadStatus)
      VALUES (?, ?, ?, NOW(), FALSE);
    `;
    // 이 예시에서는 sender와 receiver를 ID 대신 사용자 이름으로 가정합니다.
    // 실제 구현에서는 사용자의 ID를 사용해야 할 수도 있습니다.
    const [result] = await originalPool.query(query, [sender, receiver, message]);
    console.log("Message saved:", result);
    res.json({ message: "Message sent successfully!" });
  } catch (err) {
    console.error("Error sending message:", err);
    res.status(500).send("Error sending message");
  }
});

// Express 라우터 설정 예시
router.post("/apply", async (req, res) => {
  const { applicantID, receiverID } = req.body;

  try {
    const query = `
      INSERT INTO Applications (ApplicantID, ReceiverID)
      VALUES (?, ?);
    `;
    const [result] = await originalPool.query(query, [applicantID, receiverID]);
    console.log("Application submitted:", result);
    res.json({ message: "Application submitted successfully!" });
  } catch (err) {
    console.error("Error submitting application:", err);
    res.status(500).send("Error submitting application");
  }
});


module.exports = router;
