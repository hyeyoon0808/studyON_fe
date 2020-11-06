import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import RoomListView from "../view/RoomListView";

@inject("RoomStore")
@observer
class RoomListViewContainer extends Component {
  componentDidMount() {
    const { RoomStore } = this.props;
    //Store.initRoomList();
    RoomStore.roomList();
  }

  render() {
    //const rooms = this.props.Store.getTileRooms;
    const rooms = this.props.RoomStore.getRoomList;
    return <RoomListView rooms={rooms} />;
  }
}

export default RoomListViewContainer;
