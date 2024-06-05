// server/app.js
const express = require("express");
const path = require("path");
const cors = require("cors");
const apiRouter = require("./api/index");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/service1", (req, res, next) => {
  res.send("<h1>nginx good</h1>");
});
app.use("/service1/api", apiRouter); // API routes

module.exports = app;
