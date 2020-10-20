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
            <Button variant="contained" color="secondary">
              <Link to="/login" className="login_text">
                login
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
