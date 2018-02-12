import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

const Form = () => (
  <div className="form-container">
    <div className="form-img-container">
      <img className="form-img" src={`../images/contactus.jpg`} />
    </div>
    <MuiThemeProvider>
      <TextField hintText="Your email address" floatingLabelText="email" />
      <br />
      <TextField hintText="Subject of email" floatingLabelText="subject" />
      <br />
      <TextField
        hintText="Body of email"
        floatingLabelText="message"
        multiLine={true}
        rows={1}
      />
      <br />
      <div className="contact-submit-container">
        <RaisedButton label="Submit" />
      </div>
    </MuiThemeProvider>
  </div>
);

export default Form;
