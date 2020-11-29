import React, { useEffect, useState, useRef } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import io from "socket.io-client";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import breakSoundUrl from "../images/breakAlarm.mp3";
import studyAlarmUrl from "../images/studyAlarm.mp3";
import Sound from "react-sound";
import "../scss/Timer.scss";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function Timer(props) {
  const {
    store,
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
  const [soundUrl, setSoundUrl] = useState();
  const [savedTerm, setSavedTerm] = useState(room.maxTerm - 2);
  const [goBreak, setGoBreak] = useState(false);
  const [alarmPlay, setAlarmPlay] = useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const handleOn = () => {
  //   setStudyOn(true);
  //   sendTimerSign(true);
  // }

  //타이머 시작시간, 쉬는시간 세팅
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

  //timer 스타트할때 소켓보내기
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

  const notify2 = () => toast("포인트가 환급됩니다.");

  //알람 누른 수
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
      notify2();
    }
    setAlarmPlay(Sound.status.STOPPED);
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
    setGoBreak(false);
    setAlarmPlay(Sound.status.PLAYING);
    setSoundUrl(studyAlarmUrl);
    return [true, study];
  }

  function breakTimeStart() {
    setTerm((preTerm) => preTerm + 1);
    console.log("term: ", term, savedTerm);
    socketRef.current.emit("current term", owner, term);
    if (room.maxTerm == term) {
      socketRef.current.emit(
        "term is over",
        owner,
        currentUser.name,
        term,
        room.maxTerm,
        room.owner
      );
      setGoBreak(false);
      setPlaying(false);
      setTerm(1);
    }
    if (room.maxTerm > term) {
      setOpen(true);
    }
    if (term >= 1 && term <room.maxTerm) {
      setGoBreak(true);
      console.log("break is on");
    }
    setAlarmPlay(Sound.status.PLAYING);
    setSoundUrl(breakSoundUrl);
    setTimeout(handleClose, 5000);
    return [true, breakTime];
  }

  return (
    <div className="App">
      {/* {studyOn ? <h1>StudyON</h1> : <h1>StudyOFF</h1>} */}
      <h1>StudyON Timer</h1>
      {/* <button onClick={() => { sendTimerSign(true) }} className="start_btn"><strong>START</strong></button> */}
      <div className="timer2">
        <div className="timer-wrapper">
          <CountdownCircleTimer
            isPlaying={playing}
            duration={study}
            key={key}
            colors={[["#8091a8", 0.33], ["#80a8a8", 0.33], ["#a9bfd6"]]}
            onComplete={breakTimeStart}
          >
            {children}
          </CountdownCircleTimer>
          <p style={{ color: "#8091a8" }}>
            <strong>Study</strong>
          </p>
        </div>
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
        {/* {store.mySocket.id === owner ?( */}
          <button
            onClick={() => {
              sendTimerSign(true);
            }}
            className="start_btn"
          >
            <p className="btn_font">
              <strong>START</strong>
            </p>
          </button>
          {/* ):(<div></div>)}  */}
        </div>
          
        <div className="timer-wrapper2">
          <CountdownCircleTimer
            isPlaying={goBreak}
            duration={breakTime / 1000}
            key={key}
            colors={[["#c9b3c5", 0.33], ["#ffe0b3", 0.33], ["#b8b8e0"]]}
            onComplete={studyTimeStart}
          >
            {children}
          </CountdownCircleTimer>
          <p style={{ color: "#c9b3c5" }}>
            <strong>Break</strong>
          </p>
        </div>
      </div>
      <Sound
        url={soundUrl}
        playStatus={alarmPlay}
        playFromPosition={300}
        // onLoading={this.handleSongLoading}
        // onPlaying={this.handleSongPlaying}
        // onFinishedPlaying={this.handleSongFinishedPlaying}
      />
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
