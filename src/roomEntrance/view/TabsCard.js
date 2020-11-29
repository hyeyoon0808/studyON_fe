import React, { useEffect, useState, useRef } from "react";
import { Tabs } from "antd";
import TodoContainer from "../../myPage/container/TodoContainer";
import {
  SmileOutlined,
  UserOutlined,
  SoundOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { Button } from "@material-ui/core";
import "../scss/Tabs.scss";

const TabsCard = (props) => {
  const { mySocket, roomData, store, owner } = props;
  const { TabPane } = Tabs;
  const [message, setMessage] = useState([]);
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = mySocket;
    socketRef.current.on("enter event", (owner, userName) => {
      const msg = (
        <p>
          <SmileOutlined /> {userName}님
        </p>
      );
      setMessage((oldUser) => [...oldUser, msg]);
    });
  }, []);

  return (
    <div>
      <div className="tabs">
        <Tabs defaultActiveKey="1">
          <TabPane
            tab={
              <span>
                <ProfileOutlined />
                할일
              </span>
            }
            key="1"
          >
            <TodoContainer owner={owner} />
          </TabPane>
          <TabPane
            tab={
              <span>
                <SoundOutlined />
                공지
              </span>
            }
            key="2"
          >
            <div style={{ width: "17rem", height: "25rem" }}>
              {roomData.description.split("\n").map((line) => {
                return (
                  <span>
                    {line}
                    <br />
                  </span>
                );
              })}
            </div>

            {store.mySocket.id === owner ? (
              <Button variant="outlined">수정</Button>
            ) : (
              <div></div>
            )}
          </TabPane>
          <TabPane
            tab={
              <span>
                <UserOutlined />
                멤버
              </span>
            }
            key="3"
          >
            {message.map((m, index) => {
              return <div>{m}</div>;
            })}
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default TabsCard;
