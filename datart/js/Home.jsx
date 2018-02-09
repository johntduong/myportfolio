import React, { Component } from "react";
import Header from "./Header";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import ImageGridList from "./ImageGridList";

class Home extends Component {
  state = {
    open: false
  };
  render() {
    return (
      <div className="home">
        <Header />
        <ImageGridList />
      </div>
    );
  }
}

export default Home;
