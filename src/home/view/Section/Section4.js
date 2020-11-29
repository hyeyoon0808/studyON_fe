import React from "react";
import MainImage from "../../images/main2.png";
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
      <section style={sectionStyle} id="section4">
        <img src={MainImage} alt="" className="image_room" />
        {/* <p className="image_room_desc">
          <strong style={{ fontSize: "x-large", lineHeight: "3rem" }}>
            studyON이 주는 새로운 플랫폼, 온라인 스터디룸
          </strong>
          <br />
          뽀모도로 공부법(타이머를 이용하여 25분간 집중해서 일을 한 다음 5분간
          휴식하는 걸 반복하는 방식)을 활용한 'studyON'만의 공부법을 이용할 수
          있는 스터디방을 제공합니다.
          <div className="sec4_button">
            <Button variant="outlined">
              <Link to="/room-create" className="button_text">
                공부하러 가기
              </Link>
            </Button>
          </div>
        </p> */}
        <p className="image_room2_desc">
          studyON을 통해
          <br />
          자신의 공부법을 함께 나눠보세요 !
          <div className="sec4_button">
            <Button variant="outlined">
              <Link to="/room-list" className="button_text">
                스터디방 만들기
              </Link>
            </Button>
          </div>
        </p>
      </section>
    </div>
  );
};

export default Section3;
