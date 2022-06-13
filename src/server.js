// console.log("index logging");

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("this is your app");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log("listening on port ", PORT);
});
