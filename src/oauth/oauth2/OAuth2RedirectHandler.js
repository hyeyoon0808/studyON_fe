import React, { Component } from "react";
import { ACCESS_TOKEN } from "../constants";
import { Redirect } from "react-router-dom";
import { inject, observer } from "mobx-react";

@inject("UserStore")
@observer
class OAuth2RedirectHandler extends Component {
  getUrlParameter(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");

    var results = regex.exec(this.props.location.search);
    return results === null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  //   onAddUser = () => {
  //     const { UserStore } = this.props;
  //     let currentUser = UserStore.currentUser;
  //     UserStore.setUserPointProp("userId", currentUser.id);
  //     console.log(">>>>>>>>>", currentUser.id);
  //     UserStore.setUserPointProp("state", "initial");
  //     UserStore.setUserPointProp("owner", false);
  //     let point = UserStore.point;
  //     UserStore.addUserPoint(point);
  //   };

  render() {
    const token = this.getUrlParameter("token");
    const error = this.getUrlParameter("error");

    if (token) {
      localStorage.setItem(ACCESS_TOKEN, token);
      return (
        <Redirect
          to={{
            pathname: "/profile",
            state: { from: this.props.location },
          }}
        />
      );
    } else {
      return (
        <Redirect
          to={{
            pathname: "/login",
            state: {
              from: this.props.location,
              error: error,
            },
          }}
        />
      );
    }
  }
}

export default OAuth2RedirectHandler;
