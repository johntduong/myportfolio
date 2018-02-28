const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log("RECEIVED GET");
  res.send("ENDING GET");
});

let port = 1234;
app.listen(port);
console.log("Server is listening at: " + port);
