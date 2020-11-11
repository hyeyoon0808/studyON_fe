import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import SearchBar from "../view/SearchBar";

@inject("Store")
@observer
class SearchBarContainer extends Component {
    setRoomName = (e) => {
        this.props.Store.setRoomName(e.target.value);
    };
    addRoomList = () => {
        this.props.Store.addRoomList();
    };
    findMatches = () => {
        this.props.Store.findMatches();
    };
    render() {
        const roomName = this.props.getRoomName;
        return (
            <SearchBar
                roomName={roomName}
                setRoomName={this.setRoomName}
                addRoomList={this.addRoomList}
                findMatches={this.findMatches}
            />
        );
    }
}

export default SearchBarContainer;
