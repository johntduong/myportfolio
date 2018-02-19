import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import Header from "./Header2";
import Carousel from "./Carousel";
import Footer from "./Footer";

class Home extends Component {
  state = {
    open: false
  };

  render(props) {
    return (
      <div className="home">
        <Header {...props} />
        <img className="banner" src={`../images/banner.jpg`} />
        <div className="welcomecontainer">
          <h4
            className="welcometext"
            style={{ color: "white", textAlign: "center" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            elementum pellentesque mi ac finibus. Praesent bibendum sollicitudin
            ex vel scelerisque. Ut consectetur in urna vel ornare. Nam dictum
            massa a ipsum vulputate, sed fermentum risus egestas. Mauris rhoncus
            dolor vitae ex dignissim molestie.
          </h4>
        </div>
        <div className="slideshow-container">
          <Carousel />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
