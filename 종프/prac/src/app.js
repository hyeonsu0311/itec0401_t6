// src/app.js 
const express = require('express');
const path = require('path');
const cors = require('cors');
const apiRouter = require('./api');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', apiRouter);  // API routes


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
