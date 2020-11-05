import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import RoomListView from "../view/RoomListView";

@inject("Store")
@observer
class RoomListViewContainer extends Component {
    componentDidMount() {
        const { Store } = this.props;
        Store.initRoomList();
        // Store.roomList();
    }

    render() {
        const rooms = this.props.Store.getTileRooms;
        // const rooms = this.props.Store.getRoomList;
        return <RoomListView rooms={rooms} />;
    }
}

export default RoomListViewContainer;
