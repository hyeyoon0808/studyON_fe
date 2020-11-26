import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import RoomListView from "../view/RoomListView";

@inject("Store", "UserStore")
@observer
class RoomListViewContainer extends Component {
  componentDidMount() {
    const { Store } = this.props;
    const { UserStore } = this.props;
    // const socket = io.connect("http://localhost:8000");

    Store.mySocket.on("your id", (id) => {
      console.log("서버로부터 받은 소켓 아이디 " + id);
      
    });
    
    Store.mySocket.on("show the current term", (owner, term) => {
      console.log("term: "+term);
      
    });

    console.log(Store.mySocket.id);
    //Store.initRoomList();
    Store.mySocket.emit("test", "test send");
    Store.roomList();
    Store.mySocket.on("remove room", (id) => {
      console.log("방 id: " + id);
      this.props.Store.removeRoom(id);
    });
  }

  setRoom = (owner) => {
    this.props.Store.setRoom(owner);
  };

  render() {
    //const rooms = this.props.Store.getTileRooms;
    const rooms = this.props.Store.getRoomList;
    const room = this.props.Store.getRoom;
    const authenticated=this.props.UserStore.getAuthenticated;
    console.log("로그인 되었나요? "+authenticated );
    return (
      <RoomListView
        rooms={rooms}
        room={room}
        setRoom={this.setRoom}
        mySocket={this.props.Store.mySocket}
        authenticated={authenticated}
      />
    );
  }
}

export default RoomListViewContainer;
