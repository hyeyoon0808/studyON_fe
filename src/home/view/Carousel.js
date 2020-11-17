import React from "react";
import { Carousel } from "react-responsive-carousel";
import picture from "../images/mainpage-bg.png";
import picture2 from "../images/mainpage-bg2.png";
import picture3 from "../images/mainpage-bg3.png";
import "../scss/Carousel.scss";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

export default () => (
  <Carousel autoPlay>
    <div>
      <img alt="" src={picture} />
      <div className="logo_desc">Take responsibility for your study time</div>
    </div>
    <div>
      <img alt="" src={picture2} />
      <div className="section2_desc">
        <div className="section2_desc_bold">지금, 여기서, study mode ON</div>
        <div>지금 바로 시작해보세요</div>
        <div className="section2_buttons">
          <Button variant="outlined">
            <Link to="/room-create" className="button_text">
              방 만들기
            </Link>
          </Button>
          <Button variant="outlined">
            <Link to="/room-list" className="button_text">
              방 찾기
            </Link>
          </Button>
        </div>
      </div>
    </div>
    <div>
      <img alt="" src={picture3} />
      <div className="section3_desc">
        <div className="section3_desc_title">studyON은 </div>
        <br />
        <p>여러분의 공부시간을 응원합니다! </p>
        <p>하루의 공부시간을 설정하고 목표량을 달성해보세요.</p>
        <div className="section3_buttons">
          <Button variant="outlined">
            <Link to="/room-create" className="button_text">
              방 만들기
            </Link>
          </Button>
          <Button variant="outlined">
            <Link to="/room-list" className="button_text">
              방 찾기
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </Carousel>
);
