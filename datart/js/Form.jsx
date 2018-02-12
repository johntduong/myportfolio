import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import TextField from "material-ui/TextField";

const Form = () => (
  <div className="form-container">
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
    </MuiThemeProvider>
  </div>
);

export default Form;
