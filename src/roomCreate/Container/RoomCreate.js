import React, { Component } from "react";
import RoomCreateForm from "../view/RoomCreateForm";

class RoomCreate extends Component {
  id = 0;
  state = {
    roomInfo: [],
  };

  handleCreate = (data) => {
    console.log(data);
    const { roomInfo } = this.state;
    this.setState({
      roomInfo: roomInfo.concat({
        ...data,
        id: this.id++,
      }),
    });
  };
  render() {
    const { roomInfo } = this.state;
    return (
      <div>
        <RoomCreateForm onCreate={this.handleCreate} />
        <div>
          <span>json: {JSON.stringify(roomInfo)}</span>
        </div>
      </div>
    );
  }
}

export default RoomCreate;
