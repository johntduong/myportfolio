import React, { Component } from "react";
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

  render() {
    return (
      <div className="home">
        <Header handler={this.handleToggle} />
        <ImageGridList />
      </div>
    );
  }
}

export default Home;
