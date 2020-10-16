import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/scss/Home.scss";
import Footer from "./Footer";

class Home extends Component {
  render() {
    return (
      <>
        {/* header */}
        <div className="header">
          <h1>studyON</h1>
          <div className="button_login">
            <Link to="/login">
              <button>login</button>
            </Link>
          </div>
        </div>
        <div className="contents">contents</div>

        <Link to="/room-create">
          <button>create room</button>
        </Link>
        <Link to="/room-list">
          <button>room list</button>
        </Link>

        <Footer />
      </>
    );
  }
}

export default Home;
