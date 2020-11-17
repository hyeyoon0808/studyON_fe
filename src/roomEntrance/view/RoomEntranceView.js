import React from "react";
import "../scss/RoomEntrance.scss";
import TabsCard from "./TabsCard";
import { Card } from "antd";
import Timer from "./Timer";
import { Checkbox } from "antd";
import ButtonTemplate from "../../icon/view/ButtonTemplate";
import { Link } from "react-router-dom";
// import tileData from "../../roomList/tileData";

// function onChange(e) {
//     console.log(`checked = ${e.target.checked}`);
// }

const RoomEntranceView = ({ mySocket, room, rooms, match, owner }) => {
    console.log(rooms);
    const params_id = match.params.id;
    //const data = tileData.find((tile) => tile.id === params_id);
    const data = rooms.find((tile) => tile.owner === params_id);
    console.log(params_id);
    console.log(rooms);
    // const data = {};
    return (
        <>
            <div className="RoomEntrance_wrap" key={data.owner}>
                <div className="RoomEntrance_title">{data.title}</div>

                <div className="RoomEntrance_container">
                    <div className="RoomEntrance_left">
                        {/* <Card title="MY TODO LIST" className="RoomEntrance_left_item">
              <Checkbox onChange={onChange}>todo....</Checkbox>
            </Card> */}
                        <TabsCard
                            roomData={data}
                            className="RoomEntrance_left_item"
                        />

                        <Card
                            title="Acheivement"
                            className="RoomEntrance_left_item"
                        ></Card>
                    </div>

                    <div className="RoomEntrance_right">
                        {/* <TabsCard roomData={data} mySocket={mySocket} owner={owner} room={room}/> */}
                        <Card title="TIMER">
                            <Timer
                                mySocket={mySocket}
                                owner={owner}
                                room={room}
                            />
                        </Card>
                        <div className="exit_button">
                            <Link to="/room-list">
                                <ButtonTemplate text={"방 나가기"} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RoomEntranceView;
