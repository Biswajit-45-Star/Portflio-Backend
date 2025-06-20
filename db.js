const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345", // your MySQL password
  database: "portfolio"
});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL connected...");
});

module.exports = db;
