const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const nodemailer = require("nodemailer");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const sendEmail = () => {};

app.post("/email", sendEmail);

const port = 1337;
app.listen(port);
console.log("Listening on port", port);
