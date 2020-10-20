import React, { Component } from "react";
import { Link } from "react-router-dom";
import Background from "../../assets/images/mainpage-bg2.png";
import Button from "@material-ui/core/Button";

var sectionStyle = {
  width: "100%",
  height: "38rem",
  backgroundImage: `url(${Background})`,
};
class Section2 extends Component {
  render() {
    return (
      <>
        <section style={sectionStyle} id="section2">
          <div className="section2_desc">
            <p className="section2_desc_bold">지금, 여기서, study mode ON</p>
            <p>지금 바로 시작해보세요</p>
          </div>

          {/* 링크 */}
          <div className="button_room">
            <Link to="/room-create">
              <Button variant="contained" color="secondary" size="large">
                방 만들기
              </Button>
            </Link>
            <Link to="/room-list">
              <Button variant="contained" color="secondary" size="large">
                방 찾기
              </Button>
            </Link>
          </div>
        </section>
      </>
    );
  }
}

export default Section2;
