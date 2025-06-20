const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public")); // Serve static files from 'public' folder

// POST feedback
app.post("/api/feedback", (req, res) => {
  const { name, message } = req.body;
  const sql = "INSERT INTO feedback (name, message) VALUES (?, ?)";
  db.query(sql, [name, message], (err, result) => {
    if (err) return res.status(500).send("Error saving feedback");
    res.send({ success: true, id: result.insertId });
  });
});

// GET feedbacks
app.get("/api/feedback", (req, res) => {
  db.query("SELECT * FROM feedback ORDER BY id DESC", (err, results) => {
    if (err) return res.json([]);
    res.json(results);
  });
});



app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
