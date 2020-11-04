import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import RoomListView from "../view/RoomListView";

@inject("Store")
@observer
class RoomListViewContainer extends Component {
    componentDidMount() {
        this.props.Store.initRoomList();
    }
    render() {
        const roomList = this.props.Store.getRoomList;
        console.log(roomList);
        return <RoomListView roomList={roomList} />;
    }
}

export default RoomListViewContainer;
