import React from "react";
import { FaHome, FaCoins } from "react-icons/fa";
import { RiTodoLine } from "react-icons/ri";
import "../../scss/Section2.scss";
var sectionStyle = {
  width: "100%",
  height: "24rem",
  background: "#fcfafa",
};
const Section2 = () => {
  return (
    <div>
      <section style={sectionStyle} id="section2">
        <div className="title_service">studyON 서비스 소개</div>
        <div className="icons">
          <FaHome className="icon_service" />
          <RiTodoLine className="icon_service" />
          <FaCoins className="icon_service" />
        </div>
        <div style={{ position: "relative", top: "8rem" }}>
          <div className="service_left">
            시간과 공간의 제약이 없습니다.
            <br /> 언제 어디서든 사용해보세요
          </div>
          <div className="service_middle">
            매일 나의 학습도를 체크하고 오늘 나의 할 일을 체크할 수 있습니다.
            <br />
            오늘 할 일을 작성하며 하루를 시작해보세요
          </div>
          <div className="service_right">
            카페, 스터디카페에 가서 돈을 쓰지않더라도 집에서 집중할 수 <br />
            있습니다.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section2;
