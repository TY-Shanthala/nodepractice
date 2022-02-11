const express = require("express");
const mongoUrl = `mongodb+srv://admin:admin@cluster0.jqqjo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const mongoose = require("mongoose");

const app = express();
app.get("/", (req, res) => {
  res.send("hello");
});
app.get("/api/learning", (req, res) => {
  res.send(["hi", "hello"]);
});
app.listen(3000, () => {
  mongoose
    .connect(mongoUrl)
    .then(() => console.log("connection success"))
    .catch((err) => {
      console.log(err, "connection err");
    });
  console.log("i am working in testyantra");
});
