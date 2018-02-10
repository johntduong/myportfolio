import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { Tabs, Tab } from "material-ui/Tabs";
import FontIcon from "material-ui/FontIcon";
import MapsPersonPin from "material-ui/svg-icons/maps/person-pin";

const muiTheme = getMuiTheme({
  tabs: {
    backgroundColor: "#4b626d",
    selectedTextColor: "#fff",
    height: 50
  }
});

const Header = props => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Tabs
      inkBarStyle={{ backgroundColor: "white" }}
      style={{ backgroundColor: "black" }}
    >
      <Tab
        icon={<FontIcon className="material-icons">home</FontIcon>}
        label="HOME"
      />
      <Tab
        icon={<FontIcon className="material-icons">brush</FontIcon>}
        label="GALLERY"
      />
      <Tab
        icon={<FontIcon className="material-icons">email</FontIcon>}
        label="CONTACT"
      />
    </Tabs>
  </MuiThemeProvider>
);

export default Header;
