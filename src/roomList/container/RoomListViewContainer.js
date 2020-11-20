import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import RoomListView from "../view/RoomListView";

@inject("Store", "UserStore")
@observer
class RoomListViewContainer extends Component {
    componentDidMount() {
        const { Store } = this.props;
        // const socket = io.connect("http://localhost:8000");

        Store.mySocket.on("your id", (id) => {
            console.log("서버로부터 받은 소켓 아이디 " + id);
        });

        console.log(Store.mySocket.id);
        //Store.initRoomList();
        Store.mySocket.emit("test", "test send");
        Store.roomList();
    }

    setRoom = (owner) => {
        this.props.Store.setRoom(owner);
    };

    subFiftyPoint = () => {
        const { UserStore } = this.props;
        let curPoint = UserStore.getCurPoint;
        const setCurPoint = UserStore.setCurPoint;
        curPoint = curPoint - 50;
        console.log(curPoint);
        setCurPoint(curPoint);
    }

    render() {
        //const rooms = this.props.Store.getTileRooms;
        const rooms = this.props.Store.getRoomList;
        const room = this.props.Store.getRoom;
        console.log(room);
        return (
            <RoomListView
                rooms={rooms}
                room={room}
                setRoom={this.setRoom}
                mySocket={this.props.Store.mySocket}
                subFiftyPoint={this.subFiftyPoint}
            />
        );
    }
}

export default RoomListViewContainer;
