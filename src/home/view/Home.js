import React, { Component } from "react";
import "../scss/Home.scss";
import Footer from "../../footer/view/Footer";
import Header from "../../header/view/Header";
import Section1 from "../view/Section/Section1";
import Section2 from "../view/Section/Section2";
import Section3 from "../view/Section/Section3";
import Section4 from "../view/Section/Section4";

class Home extends Component {
  render() {
    return (
      <>
        {/* header */}
        <Header />

        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Footer />
      </>
    );
  }
}

export default Home;
