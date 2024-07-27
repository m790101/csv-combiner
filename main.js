// const express = require('express');
import { parseCsv } from "./parseCsv.js";
import express from "express";
const app = express();
const port = 3000;

app.get("/api/data", async (req, res) => {
  try {
    const data = await parseCsv();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error parsing CSV file");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
