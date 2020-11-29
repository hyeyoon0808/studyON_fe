import React, { useEffect, useState, useRef } from "react";
import "../scss/Timer.scss";

export default function AchievementBoard(props) {
  const { mySocket, owner, room } = props;
  const [playing, setPlaying] = useState(false);
  const [key, setKey] = useState(0);
  const [name, setName] = useState("");
  const [messages, setMessages] = useState([]);
  const [todochecked, setTodoChecked] = useState([]);
  const socketRef = useRef();

  useEffect(() => {
    console.log(mySocket.id);
    socketRef.current = mySocket;

    //알람 끈 유저 반환
    socketRef.current.on("show user name", (name, count) => {
      const msg = (
        <p style={{ color: " #3C36F7", fontFamily: "GmarketSansTTF Medium" }}>
          {name} 님이 {count + 1} 번째 알람을 눌렀습니다.
        </p>
      );
      setMessages((oldMsgs) => [...oldMsgs, msg]);
    });

    //투두 체크한 유저 반환
    socketRef.current.on("show todo checked", (todoDesc, userName) => {
      const msg = (
        <p style={{ color: " #4A73D0", fontFamily: "GmarketSansTTF Medium" }}>
          {userName} 님이 {todoDesc} 를 완료했습니다.
        </p>
      );
      setMessages((oldTodos) => [...oldTodos, msg]);
    });

    //현재 공부 텀 확인
    socketRef.current.on("show the current term", (owner, term) => {
      const msg = (
        <p style={{ color: " #00001a", fontFamily: "GmarketSansTTF Medium" }}>
          쉬는 시간이 끝나면 {term + 1} 번째 공부시간이 시작됩니다.
        </p>
      );
      setMessages((oldTerm) => [...oldTerm, msg]);
    });

    //방에 접속한 멤버 확인
    socketRef.current.on("enter event", (owner, userName) => {
      const msg = (
        <p style={{ color: "#000033", fontFamily: "GmarketSansTTF Medium" }}>
          {userName}님이 들어왔습니다.
        </p>
      );
      setMessages((oldUser) => [...oldUser, msg]);
    });
  }, []);

  return (
    <div className="App">
      <div>
        {messages.map((m, index) => {
          return <div>{m}</div>;
        })}
      </div>
    </div>
  );
}
