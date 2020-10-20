import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/scss/Home.scss";
import Button from "@material-ui/core/Button";

class Header extends Component {
  render() {
    return (
      <div>
        {/* header */}
        <div className="header">
          <h1>studyON</h1>
          <div className="button_login">
            <Link to="/login">
              <Button variant="contained" color="secondary">
                login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
