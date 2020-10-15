import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <>
        <div>studyON</div>
        <Link to="/login">
          <button>login</button>
        </Link>
        <Link to="/room-create">
          <button>create room</button>
        </Link>
        <Link to="/room-list">
          <button>room list</button>
        </Link>
      </>
    );
  }
}

export default Home;
