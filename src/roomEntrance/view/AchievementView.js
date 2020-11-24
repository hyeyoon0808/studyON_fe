import React, { useEffect, useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import "../scss/Achievement.css";
import { Link } from "react-router-dom";

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
    setPopUp,
    mySocket,
    onClickGood,
    onClickNormal,
    onClickBad,
    studyKings,
  } = props;
  const classes = useStyles();
  const socketRef = useRef();

  return (
    <div className="PopUp">
      {/* x close window */}
      <button className="popup-x" onClick={() => setPopUp(false)}>
        X
      </button>
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
        <Link to="/room-list">
          <button onClick={onClickGood} className="good_btn">
            만족!
          </button>
          <button onClick={onClickNormal} className="normal_btn">
            보통!
          </button>
          <button onClick={onClickBad} className="bad_btn">
            불만족!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AchievementView;
