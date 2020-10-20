import React from "react";
import Background from "../../assets/images/mainpage-bg3.png";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

var sectionStyle = {
  width: "100%",
  height: "38rem",
  backgroundImage: `url(${Background})`,
};

const Section3 = () => {
  return (
    <>
      <section style={sectionStyle} id="section3">
        <img
          src={require("../../assets/images/main_photo.png")}
          alt=""
          className="section3_photo"
        />
        <div className="photo_desc">
          <p className="photo_desc_title">studyON은 </p>
          <p>여러분의 공부시간을 응원합니다! </p>
          <p>하루의 공부시간을 설정하고 목표량을 달성해보세요.</p>
        </div>

        {/* 링크 */}
        <div className="section3_button_room">
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
};

export default Section3;
