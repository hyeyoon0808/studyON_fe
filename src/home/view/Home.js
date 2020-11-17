import React, { Component } from "react";
import Footer from "../../footer/view/Footer";
import Header from "../../header/view/Header";
import Carousel from "./Carousel";

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <Carousel />
        <Footer />
      </>
    );
  }
}

export default Home;
