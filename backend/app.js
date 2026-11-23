const express = require("express");
const app = express();
app.use(express.json());

const books = [
  { id: 1, title: "Kimiya-e-Saadat", price: 1200 },
  { id: 2, title: "Ihya Ulum al-Din", price: 2500 },
];

app.get("/health", (req, res) => res.json({ status: "ok" }));
app.get("/api/books", (req, res) => res.json(books));

module.exports = app;