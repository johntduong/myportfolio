const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // use SSL
  auth: {
    user: "datduongart@gmail.com", // generated ethereal user
    pass: "datloan2949@" // generated ethereal password
  }
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/send", (req, res) => {
  let mailOptions = {
    from: "Contact Form Request: <" + req.query.from + ">", // sender address
    to: "datduongart@gmail.com", // list of receivers
    subject: "Contact Form Message", // Subject line
    text: "Hello", // plain text body
    html:
      "From: " +
      req.query.name +
      "<br>" +
      "User's email: " +
      req.query.user +
      "<br>" +
      "Message: " +
      req.query.text // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    res.end("sent");

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  });
});

const port = 1337;
app.listen(port);
console.log("Listening on port", port);
