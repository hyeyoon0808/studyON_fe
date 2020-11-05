import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import RoomListView from "../view/RoomListView";

@inject("Store")
@observer
class RoomListViewContainer extends Component {
    componentDidMount() {
        const { Store } = this.props;
        //Store.initRoomList();
        Store.roomList();
    }

    setRoom = (owner) => {
        this.props.Store.setRoom(owner);
    };

    render() {
        //const rooms = this.props.Store.getTileRooms;
        const rooms = this.props.Store.getRoomList;
        const room = this.props.Store.getRoom;
        return (
            <RoomListView rooms={rooms} room={room} setRoom={this.setRoom} />
        );
    }
}

export default RoomListViewContainer;
