const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.post("/formsubmissons", (req, res) => {
  fs.appendFileSync("formsubmissons.json", JSON.stringify({ name: req.body.name, email: req.body.email }));
  //   fs.appendFileSync("formsubmissons.json", JSON.stringify({ email: req.body.email }));
  res.send(
    `Thank you ${req.body.name}, your email has been sent to ${req.body.email}, DO NOT MOVE A MUSCLE or the email will end up in the abyss!`
  );
});

app.use("/url/:id", (req, res, next) => {
  let id = req.params.id;
  console.log(req.originalUrl);
  next();
});

app.use(express.static(path.join(__dirname, "/public")));
app.get("/", (req, res) => {
  res.send("Hello from the web server side...");
});
app.listen(3000, () => console.log("server connected"));
