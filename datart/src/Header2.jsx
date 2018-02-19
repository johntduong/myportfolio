import React, { Component } from "react";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { Tabs, Tab } from "material-ui/Tabs";
import FontIcon from "material-ui/FontIcon";
import MapsPersonPin from "material-ui/svg-icons/maps/person-pin";

// need routes!

const muiTheme = getMuiTheme({
  tabs: {
    backgroundColor: "#fff",
    textColor: "#4b626d",
    selectedTextColor: "#4b626d"
  }
});

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabSelected: "one"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = tabSelected => {
    this.setState({
      tabSelected: tabSelected
    });
    this.props.history.push(tabSelected);
  };

  render() {
    return (
      <div className="header-container">
        <MuiThemeProvider muiTheme={muiTheme}>
          <Tabs
            inkBarStyle={{ backgroundColor: "#4b626d" }}
            value={this.state.tabSelected}
            onChange={this.handleChange}
          >
            <Tab
              value="/"
              path="/"
              icon={<FontIcon className="material-icons">home</FontIcon>}
              label="HOME"
            />
            <Tab
              value="gallery"
              icon={<FontIcon className="material-icons">brush</FontIcon>}
              label="GALLERY"
            />
            <Tab
              value="contact"
              icon={<FontIcon className="material-icons">email</FontIcon>}
              label="CONTACT"
            />
          </Tabs>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withRouter(Header);
