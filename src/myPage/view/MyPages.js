import React, { Component } from "react";
import "../scss/MyPages.scss";
import { Card, Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';
import Profile from "../images/Profile.png";
import Header from "../../header/view/Header";
import Footer from "../../footer/view/Footer";
import TodoContainer from "../container/TodoContainer";
import CalendarContainer from "../container/CalendarContainer";
import { inject, observer } from "mobx-react";

@inject("TodoStore", "UserStore")
@observer
class MyPages extends Component {
  componentWillMount() {
    console.log("mypageContainer--");
    const { UserStore } = this.props;
    this.onAddUser();
    let currentUser = this.props.UserStore.currentUser;
    UserStore.checkPoint(currentUser.id);
    console.log(currentUser.id)
  }

  onAddUser = () => {
    const { UserStore } = this.props;
    // let currentUser = UserStore.currentUser;
    // UserStore.setUserPointProp("userId", currentUser.id);
    // UserStore.setUserPointProp("state", "initial");
    // UserStore.setUserPointProp("owner", false);
    let point = UserStore.point;
    UserStore.addUserPoint(point);
  };

  render() {
    const date = this.props.TodoStore.getDate;
    return (
      <div className="mypage">
        <Header />
        <div className="row" style={{ marginLeft: "180px" }}>
          {/* <div className="image">
            <img class="disabled medium ui image" src={Profile} />
          </div> */}
          <Avatar size={210} icon={<UserOutlined />} />
          <div className="profile" style={{ left: "80px" }}>
            <br />
            <strong style={{ fontSize: "25px" }}>Profile</strong>
            <div className="profileCard">
              <br />
              <div style={{ marginLeft: "60px" }}>
                <p>
                  <strong>Name:</strong>&nbsp; {this.props.currentUser.name}
                </p>
                <p>
                  <strong>Email:</strong>&nbsp; {this.props.currentUser.email}
                </p>
                <p>
                  <strong>Your Point:</strong>&nbsp;
                {this.props.UserStore.userPoint.point}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row2">
          <CalendarContainer date={date} />
          <div className="todo">
            <p style={{ textAlign: "right", marginRight: "22px" }}><strong style={{ fontSize: "11px" }}>{"<" + `${date}` + ">"}</strong></p>
            <TodoContainer />
          </div>
        </div>
        {/* <Footer /> */}
      </div >
    );
  }
}

export default MyPages;
