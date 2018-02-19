import React, { Component } from "react";
import axios from "axios";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      from: "",
      name: "",
      user: "",
      text: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = event => {
    axios
      .post("http://localhost:1387/send", {
        from: "csu_decyx@yahoo.com",
        name: "John Duong",
        user: "csu_decyx@yahoo.com",
        text: "This is a test email"
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
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
            <RaisedButton label="Submit" onClick={this.handleSubmit} />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Form;
