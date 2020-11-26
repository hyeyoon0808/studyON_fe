import React, { useEffect, useState, useRef } from "react";
import "../scss/Timer.scss";


export default function AchievementBoard(props) {
    const {mySocket, owner, room} = props;
    const [playing, setPlaying] = useState(false);
    const [key, setKey] = useState(0);
    const [name, setName] = useState("");
    const [messages, setMessages] = useState([]);
    const [todochecked, setTodoChecked] = useState([]);
    const socketRef = useRef();



    useEffect(() => {
        console.log(mySocket.id);
        socketRef.current = mySocket;
        socketRef.current.on("show user name", (name, count) => {
            setMessages((oldMsgs) => [...oldMsgs, name + "가 " + (count + 1) + "째 알람을 눌렀습니다."]);
        });
        socketRef.current.on("show todo checked", (todoDesc, userName) => {
            setMessages((oldTodos) => [...oldTodos, userName + "가 " + todoDesc + "를 완료했습니다."]);
        });
    }, []);


    return (
        <div className="App">
            <div>
                {messages.map((m, index) => {

                    return (
                        
                        //알람누른 유저 메세지 (유저 & 카운트 갯수)
                        <div><p><strong>{m}</strong></p></div>
                    );
                })}
            </div>

        </div>
    );
}
