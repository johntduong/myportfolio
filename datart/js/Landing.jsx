// @flow

import React, { Component } from "react";
import Header from "./Header";
import ArtCard from "./ArtCard";

class Landing extends Component {
  state = {};
  props: {
    art: Array<Art>
  };
  render() {
    return (
      <div className="landing">
        <Header />
        <div>
          {this.props.art.map(art => <ArtCard key={art.itemNum} {...art} />)}
        </div>
      </div>
    );
  }
}

export default Landing;
