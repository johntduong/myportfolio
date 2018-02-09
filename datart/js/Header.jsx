import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import AppBar from "material-ui/AppBar";

const muiTheme = getMuiTheme({
  appBar: {
    color: "#607D8B",
    height: 50
  }
});

const Header = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <AppBar iconClassNameRight="muidocs-icon-navigation-expand-more" />
  </MuiThemeProvider>
);

export default Header;