import React, { useEffect, useState, useRef } from "react";
import "../scss/Timer.scss";


export default function Timer(props) {
    const {mySocket, owner, room} = props;
    const [playing, setPlaying] = useState(false);
    const [key, setKey] = useState(0);
    const socketRef = useRef();



    useEffect(() => {
        console.log(mySocket.id);
        socketRef.current = mySocket;
        socketRef.current.on("your id", (id) => {
        });

        socketRef.current.on("timer start", (message) => {
            console.log(message);
                setPlaying(true);
        });
    }, []);
    

    return (
        <div className="App">
            <h1>
                StudyON Timer
            </h1>
           
        </div>
    );
}
