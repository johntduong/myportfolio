import React, { Component } from "react";
import { Link } from "react-router-dom";
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
            <MenuItem>
              <Link to="/" style={{ textDecoration: "none" }}>
                Home
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/tbd" style={{ textDecoration: "none" }}>
                Artwork
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/tbd" style={{ textDecoration: "none" }}>
                Contact
              </Link>
            </MenuItem>
          </Drawer>
        </MuiThemeProvider>
        <img src={`../images/banner.jpg`} style={{ maxWidth: "100%" }} />
        <ImageGridList />
      </div>
    );
  }
}

export default Home;
