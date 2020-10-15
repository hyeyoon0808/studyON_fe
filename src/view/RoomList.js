import React, { Component } from "react";
import { Link } from "react-router-dom";

class RoomList extends Component {
  render() {
    return (
      <>
        <div>RoomList Page</div>
        <Link to="/login">
          <button>login</button>
        </Link>
        <Link to="/room-create">
          <button>방 만들기</button>
        </Link>
      </>
    );
  }
}

export default RoomList;
