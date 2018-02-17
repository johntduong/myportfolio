const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const nodemailer = require("nodemailer");

nodemailer.createTestAccount() => {
  let transporter = nodemailer.createTransport();
  let mailOptions = {

  }
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview Url: %s', nodemailer.getTestMessageUrl(info));
  })
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const sendEmail = () => {};

app.post("/email", sendEmail);

const port = 1337;
app.listen(port);
console.log("Listening on port", port);
