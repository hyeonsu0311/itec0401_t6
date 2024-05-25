// server.js
const express = require("express");
const axios = require("axios");
const app = require("./src/app");
const cors = require("cors");
const mysql = require("mysql2");
const PORT = process.env.PORT || 8001;

// 기존 데이터베이스용 Pool
const connection = mysql
  .createPool({
    host: "mysql-docker", // Docker Compose에서 정의한 MySQL 컨테이너 이름
    user: "user",
    password: "root",
    database: "mydatabase",
  })
  .promise();


app.use(cors());
app.use(express.json());
app.get("/service2", (req, res, next) => {
  res.send("<h1>nginx good service2</h1>");
});
app.post("/service2/get-token", async (req, res) => {
  //프론트에서 인가코드를 받아 카카오 api로부터 액세스 토큰을 수령 후 토큰을 프론트로 전송
  const { code } = req.body;
  try {
    const params = new URLSearchParams();
    params.append("grant_type", "authorization_code");
    params.append("client_id", "f6b2dd564814692c3cd96e84e34f50d9"); //api키가 하드코딩 되어있습니다. 나중에 배포시에 환경변수로 바꾸면 좋을것같습니다
    params.append("redirect_uri", "http://localhost:3000"); //리다이렉트 URI
    params.append("code", code);

    const response = await axios.post(
      "https://kauth.kakao.com/oauth/token",
      params.toString(),
      {
        //프론트에서 온 인가코드, 카카오 api를 사용하여 액세스토큰 수령
        headers: {
          "Content-type": "application/x-www-form-urlencoded",
        },
      }
    );
    /*user id 추출 후 db에 삽입
    const userInfoResponse = await axios.get(
      "https://kapi.kakao.com/v2/user/me",
      {
        headers: {
          Authorization: `Bearer ${response.data.access_token}`, // 헤더에 액세스 토큰 포함
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      }
    );
    const userID = userInfoResponse.data.id;
    const username = userInfoResponse.data.properties.nickname; // 예: 카카오 API에서 닉네임을 가져옴
    const email = userInfoResponse.data.kakao_account.email; // 예: 카카오 API에서 이메일을 가져옴
    console.log(userID);
    console.log(username);
    console.log(email);

    const query = `INSERT INTO Users (user_id, username, email)
    VALUES (?, ?,?)
    ON DUPLICATE KEY UPDATE
    username=VALUES(username), email=VALUES(email)`;
    const values = [userID, username, email];

    await connection.query(query, values);
    */
    res.json(response.data); // 액세스 토큰과 다른 정보를 클라이언트에 보냅니다.
  } catch (error) {
    console.error(error);
    res.status(500).send("Authentication failed");
  }
});

app.get("/service2/user/:id", async (req, res) => {
  try {
    //프론트에서 user_id를 통해 해당 user_id 에 대한 정보 접근
    const userId = req.params.id;
    const query = "SELECT * FROM Users WHERE id = ?";
    const [results, field] = await connection.query(query, [userId]);
    console.log(results);
    if (results.length > 0) {
      res.json(results[0]);
    } else {
      res.status(404).send("User not found");
    }
  } catch (err) {
    res.send(err);
  }
});

// 사용자 정보를 업데이트하는 API 엔드포인트
app.put("/service2/user/:id", async (req, res) => {
  try {
    const { name, age, gender } = req.body;
    const userId = req.params.id;

    const query = `UPDATE Users SET username = ?, age = ?, gender = ? WHERE user_id = ?`;
    const values = [name, age, gender, userId];
    console.log(name);
    console.log(age);
    console.log(gender);
    console.log(userId);

    await connection.query(query, values);

    res.send("User information updated successfully");
    console.log("update success");
  } catch (err) {
    res.send(err);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
