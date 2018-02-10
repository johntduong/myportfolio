import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import AppBar from "material-ui/AppBar";

const muiTheme = getMuiTheme({
  appBar: {
    color: "#37404c",
    height: 50
  }
});

const Header = props => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <AppBar
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      onLeftIconButtonClick={props.handler}
    />
  </MuiThemeProvider>
);

export default Header;
