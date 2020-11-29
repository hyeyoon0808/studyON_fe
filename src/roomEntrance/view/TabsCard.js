import React, { useEffect, useState, useRef } from "react";
import { Tabs } from "antd";
import TodoContainer from "../../myPage/container/TodoContainer";
import {
  SmileOutlined,
  UserOutlined,
  SoundOutlined,
  ProfileOutlined,
} from "@ant-design/icons";

const About = ({ mySocket, roomData }) => {
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
      <div style={{ width: "20rem", position: "relative", left: "3rem" }}>
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
            <TodoContainer />
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
            <div>
              {roomData.description.split("\n").map((line) => {
                return (
                  <span>
                    {line}
                    <br />
                  </span>
                );
              })}
            </div>
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

export default About;
