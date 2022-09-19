
// index.js Serveur
//****************************************************************************
const express = require("express");
const app = express();
const mysql = require('mysql');
const api = require("./api/api");
const cors = require("cors");
const path = require('path');
require('dotenv').config();

const buildPath = path.join(__dirname + '/public');
app.use(express.static(buildPath));

app.use(cors({ origin: "*" }));

app.use((req, res, next) => {
  const allowedOrigins = [
  "http://localhost",

 ];
 const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
 res.header("Access-Control-Allow-Methods", "GET, OPTIONS, PUT, POST, DELETE"); 
 res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
 res.header("Access-Control-Allow-Credentials", true);
 return next();
});

app.set("port", process.env.PORT || 5500);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", api);

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DBNAME,
});

db.connect(function(err) {
  if (err) {
   return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});

app.listen(app.get("port"), () => {
   console.log(`Express server listening on port ${app.get("port")}`);
});









































































































