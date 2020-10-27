import React, { Component } from "react";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../assets/scss/Home.scss";
import Button from "@material-ui/core/Button";
import Navbar from "./Navbar/Navbar";

class Header extends Component {
  render() {
    return (
      <div>
        {/* header */}
        <div className="header">
          <Navbar className="navbar" />
          <img
            src={require("../assets/images/logo_mini1.gif")}
            alt=""
            className="header_logo"
          />

          <div className="button_login">
            <Button variant="contained" color="secondary">
              <Link to="/login" className="button_text">
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
