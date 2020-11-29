import React from "react";
import MainImage from "../../images/main.png";
import "../../scss/Section3.scss";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

var sectionStyle = {
  width: "100%",
  height: "38rem",
  background: "#fcfafa",
};
const Section3 = () => {
  return (
    <div>
      <hr style={{ width: "80rem" }} />
      <section style={sectionStyle} id="section3">
        <img src={MainImage} alt="" className="image_todo" />
        <p className="image_todo_desc">
          매일 studyON을 이용하여
          <br />
          나의 캘린더에 성취도를 찍어보세요 !
          <div className="sec3_button">
            <Button variant="outlined">
              <Link to="/room-list" className="button_text">
                공부하러 가기
              </Link>
            </Button>
          </div>
        </p>
      </section>
    </div>
  );
};

export default Section3;
