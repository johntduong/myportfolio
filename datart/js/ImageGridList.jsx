import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import images from "../data.json";

class ImageGridList extends Component {
  render() {
    const images = [
      {
        original:
          "https://images-na.ssl-images-amazon.com/images/I/814Qpd98BKL._SL1440_.jpg",
        thumbnail: "http://lorempixel.com/250/150/nature/1/"
      },
      {
        original:
          "https://images-na.ssl-images-amazon.com/images/I/81QcNeDZRlL._SL1440_.jpg",
        thumbnail: "http://lorempixel.com/250/150/nature/2/"
      },
      {
        original:
          "https://images-na.ssl-images-amazon.com/images/I/A1LckeUNrOL._SL1500_.jpg",
        thumbnail: "http://lorempixel.com/250/150/nature/3/"
      }
    ];

    return <ImageGallery items={images} />;
  }
}

export default ImageGridList;
