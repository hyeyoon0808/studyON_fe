import React, { useState, useEffect, useRef } from "react";
import "../scss/RoomEntrance.scss";
import TabsCard from "./TabsCard";
import Footer from "../../footer/view/Footer";
import { Card } from "antd";
import Timer from "./Timer";
import AcheivementBoard from "./AchievementBoard";
import { Checkbox } from "antd";
import AchievementView from "./AchievementView";
import ButtonTemplate from "../../icon/view/ButtonTemplate";
import ExitToApp from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";
import AchievementContainer from "../container/AchievementContainer";
import { Button } from "@material-ui/core";

const RoomEntranceView = ({
  store,
  mySocket,
  room,
  rooms,
  match,
  owner,
  currentUser,
  onUpdateIsPlaying,
  onRefundPoint,
  onRecreateCheck,
  onRecreateRoom,
}) => {
  const params_id = match.params.id;
  const data = rooms.find((tile) => tile.owner === params_id);
  const socketRef = useRef();


  const [popUp, setPopUp] = useState(false);
  const [message, setMessage] = useState("");
  const [socketId, setSocketId] = useState("");
  const [studyKings, setStudyKings] = useState([]);
  const [studyKing, setStudyKing] = useState("what");
  const duringPopUp = popUp ? "during-popup" : "";

  useEffect(() => {
    socketRef.current = mySocket;
    socketRef.current.on("room over, show study king", (owner) => {
      setMessage("room is over " + owner);
      console.log("study king----------------");
      setPopUp(true);
    });
    socketRef.current.on("who is study king", (name) => {
      setStudyKings((oldName) => [...oldName, name]);
      setStudyKing(name);
    });
  }, []);

  return (
    <>
      <div className="RoomEntrance_wrap" key={data.owner}>
        <div className="RoomEntrance_title">{data.title}</div>
        <div className="exit_button">
          <Link to="/room-list">
            <Button style={{ color: "black" }}>
              <ExitToApp />
              EXIT
            </Button>
          </Link>
        </div>
        {/* {store.mySocket.id === owner ?( */}
          <div className="exit_button">
            <Checkbox onChange={onRecreateCheck} />
            &nbsp; 방을 계속 이어나갈껀가요?
          </div>
          {/* ):(<div></div>)
        } */}
        <div className="RoomEntrance_container">
          <div className="RoomEntrance_left">
            <TabsCard
              roomData={data}
              mySocket={mySocket}
              owner={owner}
              className="RoomEntrance_left_item"
            />
          </div>
          <div className="RoomEntrance_right">
            {/* <TabsCard roomData={data} mySocket={mySocket} owner={owner} room={room}/> */}
            <Timer
              store={store}
              mySocket={mySocket}
              owner={owner}
              room={room}
              currentUser={currentUser}
              onUpdateIsPlaying={onUpdateIsPlaying}
              onRefundPoint={onRefundPoint}
            />
          </div>
          <div>
            <Card
              title="실적 게시판"
              className="RoomEntrance_right_item"
              bodyStyle={{ overflow: "scroll", height: "500px" }}
              style={{ overflow: "hidden" }}
            >
              <p
                style={{
                  color: "#808080",
                  fontFamily: "GmarketSansTTF Medium",
                }}
              >
                방장이 타이머를 실행할 때까지 잠시만 기다려주세요 ^_^
              </p>
              <AcheivementBoard
                mySocket={mySocket}
                owner={owner}
                room={room}
                currentUser={currentUser}
              />
              {/* <button onClick={() => setPopUp(true)} className={duringPopUp}>
                실적게시판
              </button> */}
            </Card>
          </div>
        </div>
        <div>
          {/* {popUp && <AchievementView setPopUp={setPopUp} mySocket={mySocket} />} */}
          {popUp && (
            <AchievementContainer
              store={store}
              popUp={popUp}
              setPopUp={setPopUp}
              mySocket={mySocket}
              studyKings={studyKings}
              onRecreateRoom={onRecreateRoom}
              onRecreateCheck={onRecreateCheck}
            />
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default RoomEntranceView;
