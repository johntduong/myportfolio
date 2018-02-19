import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import Header from "./Header2";
import Form from "./Form";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div>
      <Header handler={this.handleToggle} />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
