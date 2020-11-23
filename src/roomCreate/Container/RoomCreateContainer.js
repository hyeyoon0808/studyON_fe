import React, { Component } from "react";
import RoomCreateForm from "../view/RoomCreateForm";
import Header from "../../header/view/Header";
import { observer, inject } from "mobx-react";

@inject("Store", "UserStore")
@observer
class RoomCreateContainer extends Component {
  onSetRoom = (name, value) => {
    this.props.Store.setRoomProp(name, value);
  };

  onAddRoom = (e) => {
    e.preventDefault();
    let room = this.props.Store.room;
    console.log(room);
    this.props.Store.roomCreate(room);
    this.props.UserStore.setUserPointProp("state", "makeRoom");
  };

  render() {
    const { room, mySocket } = this.props.Store;
    return (
      <div>
        <Header />
        <RoomCreateForm
          room={room}
          onAddRoom={this.onAddRoom}
          onSetRoom={this.onSetRoom}
          mySocket={mySocket}
        />
      </div>
    );
  }
}

export default RoomCreateContainer;
