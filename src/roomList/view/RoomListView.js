import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
//import { tileData } from "../tileData.json";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import ButtonTemplate from "../../icon/view/ButtonTemplate";
import Divider from "@material-ui/core/Divider";
import moment from "moment";
import { PropTypes } from "mobx-react";
import { BiArrowToRight } from "react-icons/bi";
import ExitToApp from "@material-ui/icons/ExitToApp";

const UseStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "100%",
    padding: "0 5rem 0 5rem",
    // height: 450,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  img: {
    width: "252px",
    position: "absolute",
  },
}));

export default function RoomListView(props) {
  const classes = UseStyles();
  const { rooms, room, setRoom, mySocket, authenticated } = props;
  const [open, setOpen] = useState(false);
  const socketRef = useRef();

  const handleClickOpen = (owner) => {
    setOpen(true);
    setRoom(owner);
  };

  const handleClose = () => {
    setOpen(false);
    // console.log("room.isPlaying", room.isPlaying);
  };

  return (
    <div className={classes.root}>
      <GridList cols={5} cellHeight={180} className={classes.gridList}>
        {rooms.map((room) => {
          return (
            <GridListTile
              key={room.owner}
              // onClick={() => handleClickOpen(room.owner)}
              onClick={() => handleClickOpen(room.owner)}
            >
              {room.isPlaying === "false" ? (
                room.maxTerm%2 === 0 ?(
              <img
                src={require("./before7.jpg")}
                alt=""
                className={classes.img}
              />):
              (<img
                src={require("./before3.jpg")}
                alt=""
                className={classes.img}
              />)
               ) : (
                room.maxTerm%2 === 0 ?(
                  <img
                    src={require("./after1.png")}
                    alt=""
                    className={classes.img}
                  />):
                  (<img
                    src={require("./after3.png")}
                    alt=""
                    className={classes.img}
                  />)
                )
              }
              <GridListTileBar
                title={room.title}
                subtitle={
                  <span>
                    {" "}
                    {room.tag
                      ? room.tag.split(",").map((tag) => `#${tag} `)
                      : null}
                  </span>
                }
                actionIcon={
                  <IconButton
                    aria-label={`info about ${room.title}`}
                    className={classes.icon}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          );
        })}
      </GridList>
      {authenticated ? (
        room.isPlaying === "false" ? (
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            className="dialog"
          >
            <DialogTitle id="alert-dialog-title" className="dialog-title">
              <span className="dialog-title_room">[{room.title}]</span>
            </DialogTitle>
            <DialogContent className="big-input-block">
              <div class="input-block">
                <span className="content-title">공부 시작 시간</span>
                <span className="content-title_bold">
                  {moment(room.startTime).format("YYYY-MM-DD hh:mm a")}
                </span>
              </div>
              <div class="input-block">
                <span className="content-title">공부 시간</span>
                <span className="content-title_bold">{room.studyTime} 분</span>
              </div>
              <div class="input-block">
                <span className="content-title">쉬는 시간</span>
                <span className="content-title_bold">{room.breakTime} 분</span>
              </div>
              {/* <div class="input-block">
              <span className="content-title">현재 인원</span>
              <span>1 바꿔야됨</span>
            </div> */}
              <div class="input-block">
                <span className="content-title">최대 인원</span>
                <span className="content-title_bold">
                  {room.maxPeopleNum} 명
                </span>
              </div>
              {/* <div class="input-block">
                <span className="content-title">현재 싸이클</span>
                <span className="content-title_bold">{currentTerm}</span>
              </div> */}
              <div class="input-block">
                <span className="content-title">총 싸이클 횟수</span>
                <span className="content-title_bold">{room.maxTerm} 회</span>
              </div>

              <div className="input-block_p">
                <p
                  style={{
                    color: "red",
                  }}
                >
                  <strong>* 포인트 50점이 차감됩니다 *</strong>
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    fontFamily: "GmarketSansTTF Medium",
                  }}
                >
                  <strong>[{room.title}] 에 입장하시겠습니까?</strong>
                </p>
              </div>
            </DialogContent>
            <DialogActions>
              <Link
                to={`/room-entrance/${room.owner}`}
                className="button_entrance"
              >
                <Button variant="outlined">
                  <BiArrowToRight size="20px" /> &nbsp; 방입장
                </Button>
              </Link>
            </DialogActions>
          </Dialog>
        ) : (
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              className="dialog"
            >
              <DialogTitle id="alert-dialog-title" className="dialog-title">
                이미 공부 시작된 방입니다! <br />
              다른 방을 이용해보세요 ^_^
            </DialogTitle>
              <DialogActions>
                <Button onClick={handleClose}>
                  <ExitToApp /> 나가기
              </Button>
              </DialogActions>
            </Dialog>
          )
      ) : (
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            className="dialog"
          >
            <DialogTitle id="alert-dialog-title" className="dialog-title">
              로그인 후 입장해 주세요~!
          </DialogTitle>
            <DialogActions>
              {/* <ButtonTemplate onClick={handleClose} text={"나가기"} /> */}
              <Button onClick={handleClose}>
                <ExitToApp /> 나가기
            </Button>
            </DialogActions>
          </Dialog>
        )}
    </div>
  );
}