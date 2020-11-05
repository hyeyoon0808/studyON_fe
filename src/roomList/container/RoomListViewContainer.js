import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import RoomListView from "../view/RoomListView";

@inject("Store")
@observer
class RoomListViewContainer extends Component {
    componentDidMount() {
        const { Store } = this.props;

        Store.roomList();
    }

    render() {
        //const roomList = this.props.Store.getRoomList;
        const rooms = this.props.Store.getRoomList;
        return <RoomListView rooms={rooms} />;
    }
}

export default RoomListViewContainer;
