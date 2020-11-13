import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "../scss/Navbar.scss";
import Navbar from "./Navbar/Navbar";
import Button from "@material-ui/core/Button";

import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

class Header extends Component {
  render() {
    return (
      <div>
        {/* header */}
        <div className="header">
          <Navbar className="navbar" />
          <img
            src={require("../images/logo_mini1.gif")}
            alt=""
            className="header_logo"
          />
          {this.props.authenticated ? (
            <div className="button_myPages">
              <Button>
                <PersonOutlineIcon />
                <NavLink to="/profile" className="button_login_text">
                  Mypage
                </NavLink>
              </Button>
              {/* <LogoutButton onLogout={this.props.onLogout} /> */}
            </div>
          ) : (
            <div className="button_login">
              <Button>
                <AccountCircleIcon />
                <NavLink to="/login" className="button_login_text">
                  Login
                </NavLink>
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Header;