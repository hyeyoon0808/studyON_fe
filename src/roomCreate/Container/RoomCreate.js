import React, { Component } from "react";
import RoomCreateForm from "../view/RoomCreateForm";
import Header from "../../header/view/Header";
import Footer from "../../footer/view/Footer";

class RoomCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roomInfo: [],
      message: null,
    };
  }

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
        <Header />
        <RoomCreateForm onCreate={this.handleCreate} />
        <div>
          {/* <span>json: {JSON.stringify(roomInfo)}</span> */}
          {this.state.roomInfo.map((room) => (
            <div>{room.title}</div>
          ))}
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default RoomCreate;
