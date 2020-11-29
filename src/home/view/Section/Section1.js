import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Background from "../../images/mainpage-bg.png";
import "../../scss/Home.scss";

var sectionStyle = {
  width: "100%",
  height: "43rem",
  background: `url(${Background}) no-repeat center center/cover`,
};
class Section1 extends Component {
  render() {
    return (
      <>
        <section style={sectionStyle} id="section1">
          <img
            src={require("../../images/studyon.png")}
            alt=""
            className="logo"
          />
          <strong className="logo_desc">
            지금, 여기서, study mode ON
            <p className="logo_desc2">
              하루의 공부시간을 설정하고 목표량을 달성해보세요
            </p>
          </strong>

          <Link
            activeClass="active"
            to="section3"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            <h3 className="scroll_next">Study Mode ON</h3>
          </Link>
        </section>
      </>
    );
  }
}

export default Section1;
