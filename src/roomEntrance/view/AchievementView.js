import React, { useEffect, useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import "../scss/Achievement.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",

    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    flexWrap: "wrap",
    alignItems: "flex-start",

    "& > *": {
      margin: theme.spacing(0),
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  },
}));

const AchievementView = (props) => {
  const {
    store,
    setPopUp,
    mySocket,
    onClickGood,
    onClickNormal,
    onClickBad,
    studyKings,
    onRecreateRoom,
    onRecreateCheck,
  } = props;
  const classes = useStyles();
  const socketRef = useRef();
  const notify2 = () => toast("포인트가 환급됩니다.");
  notify2();
  return (
    <div className="PopUp">
      {/* x close window */}
      <Link to="/room-list">
        <button className="popup-x" onClick={""}>
          X
        </button>
      </Link>
      <div className="today-king">
        <h3>오늘의 공부왕</h3>
      </div>
      <div className="study-king-container">
        {studyKings?.map((value) => {
          return (
            <div className={classes.root}>
              <Avatar alt="T" src={require("./popup/tomato.jpg")} />
              <p className="study-king">{value}</p>
            </div>
          );
        })}
      </div>
      <div className="pu-content-container">
        {/* <img className="pu-img" alt="bone" /> */}
        <h2>오늘 한 공부에 만족하셨습니까? ^_^</h2>
      </div>
      {/* button controls */}
      <div classes="three-btn">
        <button onClick={onClickGood} className="good_btn">
          만족!
        </button>
        <button onClick={onClickNormal} className="normal_btn">
          보통!
        </button>
        <button onClick={onClickBad} className="bad_btn">
          불만족!
        </button>
      </div>
      {store.getContinueRoom === true ? (
        <>
          <div className="pu-content-container">
            {/* <img className="pu-img" alt="bone" /> */}
            <h3>방장님이 이방을 연장하셨습니다.</h3>
            <></>
            <h3>이 방의 공부법이 좋았다면 또 함께 공부해요~!</h3>
          </div>
          <div classes="three-btn">
            <button onClick={() => setPopUp(false)} className="good_btn">
              함께 할래요
            </button>
            <Link to="/room-list">
              <button onClick={""} className="normal_btn">
                그만 할래요
              </button>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="pu-content-container">
            {/* <img className="pu-img" alt="bone" /> */}
            <h3>이 방의 공부법이 좋았다면 방장이 되어 방을 연장시켜보세요</h3>
          </div>
          <div classes="three-btn">
            <Link to="/room-list">
              <button onClick={onRecreateRoom} className="good_btn">
                연장 할래요
              </button>
            </Link>
            <Link to="/room-list">
              <button onClick={""} className="normal_btn">
                그만 할래요
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default AchievementView;
