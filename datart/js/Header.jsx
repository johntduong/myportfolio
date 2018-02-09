import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import AppBar from "material-ui/AppBar";

const muiTheme = getMuiTheme({
  palette: {
    color: "blueGrey500"
  },
  appBar: {
    height: 50
  }
});

const Header = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <AppBar
      title="Wall Sculpture and Granite"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
  </MuiThemeProvider>
);

export default Header;
