import React, { Component } from "react";
import RoomCreateForm from "../view/RoomCreateForm";
import Header from "../../header/view/Header";
import Footer from "../../footer/view/Footer";
import { observer, inject } from "mobx-react";

@inject("Store")
@observer
class RoomCreateContainer extends Component {
  onSetRoom = (name, value) => {
    this.props.RoomStore.setRoomProp(name, value);
  };

  onAddRoom = (e) => {
    e.preventDefault();
    let room = this.props.RoomStore.room;
    console.log(room);
    this.props.RoomStore.roomCreate(room);
  };

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     roomInfo: [],
  //     message: null,
  //   };
  // }

  render() {
    //const { roomInfo } = this.state;
    const { room } = this.props.RoomStore;
    return (
      <div>
        <Header />
        <RoomCreateForm
          room={room}
          onSetRoom={this.onSetRoom}
          onAddRoom={this.onAddRoom}
        />

        {/* <div>
          //<span>json: {JSON.stringify(roomInfo)}</span>
          {this.state.roomInfo.map((room) => (
            <div>{room.title}</div>
          ))}
        </div> */}
      </div>
    );
  }
}

export default RoomCreateContainer;
