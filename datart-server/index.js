const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // use SSL
  auth: {
    user: "datduongart@gmail.com", // generated ethereal user
    pass: "datloan2949@" // generated ethereal password
  }
});

app.get("/", (req, res) => {
  console.log("GET RECEIVED");
  res.end("ENDING ROOT");
});

app.get("/test", (req, res) => {
  console.log("GET RECEIVED");
  res.end("ENDING TEST");
});

app.post("/api/send", (req, res) => {
  console.log("POST RECEIVED");
  console.log("BODY", req.body);
  let mailOptions = {
    from: "Contact Form Request: <" + req.body.from + ">", // sender address
    to: "datduongart@gmail.com", // list of receivers
    subject: "Contact Form Message", // Subject line
    text: "Hello", // plain text body
    html:
      "From: " +
      req.body.name +
      "<br>" +
      "User's email: " +
      req.body.user +
      "<br>" +
      "Message: " +
      req.body.text // html body
  };

  console.log("These are the mailOptions", mailOptions);

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

const port = process.env.PORT || 1234;
app.listen(port, () => {
  console.log("listening on port 1234!");
});
