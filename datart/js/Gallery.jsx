import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import Header from "./Header2";

const Gallery = () => {
  return (
    <div>
      <Header handler={this.handleToggle} />
      <Footer />
    </div>
  );
};

export default Gallery;
