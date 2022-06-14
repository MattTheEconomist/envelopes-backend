const express = require("express");

const app = express();

// app.get("/", (req, res) => {
//   res.send("this is your app");
// });

app.use(express.static("public"));

const bodyParser = require("body-parser");

app.use(bodyParser.json());

const envRouter = require("./envelopes");

app.use("/envelopes", envRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log("listening on port ", PORT);
});
