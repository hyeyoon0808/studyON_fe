import React, { useState } from "react";
import "../scss/RoomEntrance.scss";
import TabsCard from "./TabsCard";
import { Card } from "antd";
import { Checkbox } from "antd";
import PopUp from "./popup/PopUp"
// import tileData from "../../roomList/tileData";

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

const RoomEntranceView = ({ mySocket, room, rooms, match, owner }) => {
  console.log(rooms);
  const params_id = match.params.id;
  //const data = tileData.find((tile) => tile.id === params_id);
  const data = rooms.find((tile) => tile.owner === params_id);
  console.log(params_id);
  console.log(rooms);
  // const data = {};

  const [popUp, setPopUp] = useState(false)

  const duringPopUp = popUp ? "during-popup" : ""

  return (
    <>
      <div className="RoomEntrance_wrap" key={data.owner}>
        <div className="RoomEntrance_title">{data.title}</div>

        <div className="RoomEntrance_container">
          <div className="RoomEntrance_left">
            <Card title="MY TODO LIST" className="RoomEntrance_left_item">
              <Checkbox onChange={onChange}>todo....</Checkbox>
            </Card>
            <Card title="Acheivement" className="RoomEntrance_left_item">
              <button onClick={() => setPopUp(true)} className={duringPopUp}>Acheivement</button>
            </Card>
          </div>

          <div className="RoomEntrance_right">
            <TabsCard roomData={data} mySocket={mySocket} owner={owner} room={room} />
          </div>
        </div>
        <div>
          {popUp && <PopUp setPopUp={setPopUp} mySocket={mySocket} />}
        </div>
      </div>
    </>
  );
};

export default RoomEntranceView;
