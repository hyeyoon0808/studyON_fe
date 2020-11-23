import React, { useState, useEffect, useRef } from "react";
import "../scss/RoomEntrance.scss";
import TabsCard from "./TabsCard";
import { Card } from "antd";
import Timer from "./Timer";
import AcheivementBoard from "./AchievementBoard";
import { Checkbox } from "antd";
import AchievementView from "./AchievementView";
import ButtonTemplate from "../../icon/view/ButtonTemplate";
import { Link } from "react-router-dom";
import AchievementContainer from "../container/AchievementContainer";

const RoomEntranceView = ({
  mySocket,
  room,
  rooms,
  match,
  owner,
  currentUser,
  updateIsPlaying,
}) => {
  const params_id = match.params.id;
  const data = rooms.find((tile) => tile.owner === params_id);
  const socketRef = useRef();

  const [popUp, setPopUp] = useState(false);
  const [message, setMessage] = useState("");
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

        <div className="RoomEntrance_container">
          <div className="RoomEntrance_left">
          {studyKings?.map((value) => {
          return (
            <div>
              <p className="study-king">{value}</p>
            </div>
          );
        })}
            <TabsCard
              roomData={data}
              mySocket={mySocket}
              owner={owner}
              className="RoomEntrance_left_item"
            />

            <Card title="실적 게시판" className="RoomEntrance_left_item">
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

          <div className="RoomEntrance_right">
            {/* <TabsCard roomData={data} mySocket={mySocket} owner={owner} room={room}/> */}
            <Card title="TIMER">
              <Timer
                mySocket={mySocket}
                owner={owner}
                room={room}
                currentUser={currentUser}
                updateIsPlaying={updateIsPlaying}
              />
            </Card>
            <div className="exit_button">
              <Link to="/room-list">
                <ButtonTemplate text={"방 나가기"} />
              </Link>
            </div>
          </div>
        </div>
        <div>
          {/* {popUp && <AchievementView setPopUp={setPopUp} mySocket={mySocket} />} */}
          {popUp && (
            <AchievementContainer
              popUp={popUp}
              setPopUp={setPopUp}
              mySocket={mySocket}
              studyKings={studyKings}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default RoomEntranceView;
