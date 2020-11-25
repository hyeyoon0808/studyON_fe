import React, { useEffect, useState, useRef } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import io from "socket.io-client";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import soundUrl from "../images/sound.mp3";
import Sound from "react-sound";
import "../scss/Timer.scss";

export default function Timer(props) {
  const {
    mySocket,
    owner,
    room,
    currentUser,
    updateIsPlaying,
    onRefundPoint,
  } = props;
  const [playing, setPlaying] = useState(false);
  const [yourID, setYourID] = useState();
  const [count, setCount] = useState(0);
  const [role, setRole] = useState(owner);
  const [study, setStudy] = useState(room.studyTime * 60);
  const [breakTime, setBreak] = useState(room.breakTime * 60000);
  const [key, setKey] = useState(0);
  const socketRef = useRef();
  const [remainingTime, setRemainingTime] = useState();
  const [open, setOpen] = React.useState(false);
  const [term, setTerm] = useState(1);
  const [studyOn, setStudyOn] = useState(false)
  const [savedTerm, setSavedTerm] = useState(room.maxTerm - 2);
  const [goBreak, setGoBreak] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOn = () => {
    setStudyOn(true);
    sendTimerSign(true);
  }

  const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    console.log("count");
    return (
      <div className="timer">
        <div className="text">Remaining</div>
        <div className="value">
          {minutes}:{seconds}
        </div>
        <div className="text">Time</div>
      </div>
    );
  };

  function sendTimerSign(bool) {
    console.log("dddddd");
    console.log(socketRef.current.id);
    console.log("okay");
    //if(socketRef.current.id === role){
    if (bool) {
      socketRef.current.emit(
        "timer start sign",
        owner,
        socketRef.current.id + "가 timer start!! " + owner
      );
      //updateIsPlaying();
      console.log("got it");
    } else socketRef.current.emit("timer stop sign", "timer stop!!");
    //}
  }

  useEffect(() => {
    socketRef.current = mySocket;
    socketRef.current.on("your id", (id) => {
      setYourID(id);
    });

    socketRef.current.on("timer start", (message) => {
      console.log(message);
      setPlaying(true);
    });
    setTerm(term);
  }, []);

  function countAlarm() {
    setCount(count + 1);
    socketRef.current.emit(
      "alarm off",
      owner,
      currentUser.name,
      count,
      savedTerm
    );
    console.log("알람 누른 수: " + count + savedTerm);
    if (count == savedTerm) {
      socketRef.current.emit(
        "show study king",
        owner,
        currentUser.name,
        term,
        savedTerm
      );
      onRefundPoint(); //add 포인트 획득(일반유저 +50)
    }
    setOpen(false);
  }

  function handleStudyTime(e) {
    setStudy(e.target.value * 60);
    //setStudy(room.studyTime * 60);
    setRemainingTime(study);
    setKey(!key);
  }

  function handleBreakTime(e) {
    //setBreak(e.target.value * 60000);
    setBreak(room.breakTime * 60000);
    setKey(!key);
  }

  function studyTimeStart() {
    setGoBreak(false)
    return [true, study];
  }

  function breakTimeStart() {
    setTerm((preTerm) => preTerm + 1);
    console.log("term: ", term, savedTerm);
    console.log("term: ", savedTerm);
    if (room.maxTerm == term) {
      socketRef.current.emit(
        "term is over",
        owner,
        currentUser.name,
        term,
        room.maxTerm,
        room.owner
      );
    }
    if (room.maxTerm > term) {
      console.log("heyyyyy");
      setOpen(true);
    }
    if (term >= 1) {
      setGoBreak(true);
      console.log("break is on");
    }

    setTimeout(handleClose, 5000);
    return [true, breakTime];
  }

  return (
    <div className="App">
      <div className="start_button">
        {/* <input
          type="number"
          min="1"
          max="60"
          name="study"
          placeholder="Study time"
          onChange={handleStudyTime}
        />
        <input
          type="number"
          min="1"
          max="60"
          name="break"
          placeholder="Break time"
          onChange={handleBreakTime}
        /> */}
        <button onClick={handleOn} className="start_btn"><strong>START</strong></button>
      </div>
      {studyOn ? <h1>StudyON</h1> : <h1>StudyOFF</h1>}
      <div className="timer-wrapper">
        <p style={{ color: "#004777" }}><strong>Study</strong></p>
        <CountdownCircleTimer
          isPlaying={playing}
          duration={study}
          key={key}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          onComplete={breakTimeStart}
        >
          {children}
        </CountdownCircleTimer>
      </div>
      <div className="timer-wrapper2">
        <p style={{ color: "#A30000" }}><strong>Break</strong></p>
        <CountdownCircleTimer
          isPlaying={goBreak}
          duration={breakTime / 1000}
          key={key}
          colors={[["#A30000", 0.33], ["#F7B801", 0.33], ["#004777"]]}
          onComplete={studyTimeStart}
        >
          {children}
        </CountdownCircleTimer>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"쉬는시간 시작"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            공부 끝! 쉬는 시간 시작입니다-!
          </DialogContentText>
          <Sound
            url={soundUrl}
            playStatus={Sound.status.PLAYING}
            playFromPosition={300}
          // onLoading={this.handleSongLoading}
          // onPlaying={this.handleSongPlaying}
          // onFinishedPlaying={this.handleSongFinishedPlaying}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={countAlarm} color="primary" autoFocus>
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}