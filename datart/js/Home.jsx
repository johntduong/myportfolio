import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import Header from "./Header";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import ImageGridList from "./ImageGridList";

class Home extends Component {
  state = {
    open: false
  };

  handleToggle = event => {
    event.preventDefault();
    this.setState({ open: !this.state.open });
  };

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div className="home">
        <Header handler={this.handleToggle} />
        <MuiThemeProvider>
          <Drawer
            docked={false}
            open={this.state.open}
            onRequestChange={open => this.setState({ open })}
          >
            <MenuItem>Home</MenuItem>
            <MenuItem>Artwork</MenuItem>
            <MenuItem>Contact</MenuItem>
          </Drawer>
        </MuiThemeProvider>
        <ImageGridList />
      </div>
    );
  }
}

export default Home;
