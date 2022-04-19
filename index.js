require("dotenv").config();
const connect = require("./connect");
const createUserControl = require("./controls/createUserControl");
const deleteUserControl = require("./controls/deleteUserControl");
const updateUserControl = require("./controls/updateUserControl");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  connect.query(`SELECT * FROM user`, (err, results, fields) => {
    if (err) throw err;
    res.json(results);
  });
});

app.post("/create", (req, res) => {
  createUserControl(req, res);
});
app.delete("/delete/:id", (req, res) => {
  deleteUserControl(req, res);
});
app.put("/update", (req, res) => {
  updateUserControl(req, res);
});

app.listen(5500, () => {
  console.log("Em pé");
});
