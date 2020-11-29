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
    const { Store, UserStore } = this.props;
    let room = this.props.Store.room;
    console.log(room);
    Store.roomCreate(room);
    UserStore.setUserPointProp("state", "makeRoom");
    UserStore.setUserPointProp("owner", true);
    console.log("방장님 포인트 차감 -100", UserStore.point);
    UserStore.modifyPoint(UserStore.point);
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
          userStore={this.props.UserStore}
        />
      </div>
    );
  }
}

export default RoomCreateContainer;
