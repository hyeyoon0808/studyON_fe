import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "../scss/Navbar.scss";
import Navbar from "./Navbar/Navbar";
import Button from "@material-ui/core/Button";

import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { inject, observer } from "mobx-react";

@inject("UserStore")
@observer
class Header extends Component {
  render() {
    const { UserStore } = this.props;
    return (
      <div className="header">
        <Navbar className="navbar" />
        <NavLink to="/">
          <img
            src={require("../images/logo_mini1.gif")}
            alt=""
            className="header_logo"
          />
        </NavLink>
        {UserStore.getAuthenticated ? (
          <div className="button_login">
            <Button>
              <PersonOutlineIcon />
              <NavLink to="/profile" className="button_login_text">
                Mypage
              </NavLink>
            </Button>
            <Button onClick={UserStore.handleLogout}>
              <AccountCircleIcon />
              <NavLink to="/" className="button_login_text">
                Logout
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
    );
  }
}

export default Header;
