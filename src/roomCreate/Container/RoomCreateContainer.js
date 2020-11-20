import React, { Component } from "react";
import RoomCreateForm from "../view/RoomCreateForm";
import Header from "../../header/view/Header";
import Footer from "../../footer/view/Footer";
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

    // let owner = this.props.Store.mySocket.id;
    // console.log(owner);
  };

  subHundredPoint = () => {
    const { UserStore } = this.props;
    let curPoint = UserStore.getCurPoint;
    const setCurPoint = UserStore.setCurPoint;
    curPoint = curPoint - 100;
    console.log(curPoint);
    setCurPoint(curPoint);
  }

  onHandleClick = (e) => {
    this.onAddRoom(e);
    this.subHundredPoint();
  }

  render() {
    //const { roomInfo } = this.state;
    const { room, mySocket } = this.props.Store;
    return (
      <div>
        <Header />
        <RoomCreateForm
          room={room}
          onHandleClick={this.onHandleClick}
          onSetRoom={this.onSetRoom}
          mySocket={mySocket}
        />
      </div>
    );
  }
}

export default RoomCreateContainer;
