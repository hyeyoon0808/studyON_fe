import React, { Component } from "react";
import "../scss/Mypage.scss";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Header from "../../header/view/Header";
import Footer from "../../footer/view/Footer";
import TodoContainer from "../container/TodoContainer";
import CalendarContainer from "../container/CalendarContainer";
import { inject, observer } from "mobx-react";
import Mypage from "../images/mypage.png";
import Profile from "../images/Profile.png";

@inject("TodoStore", "UserStore")
@observer
class MyPages extends Component {
  componentWillMount() {
    console.log("mypageContainer--");
    const { UserStore } = this.props;
    this.onAddUser();
    let currentUser = this.props.UserStore.currentUser;
    UserStore.checkPoint(currentUser.id);
    console.log(currentUser.id);
  }

  onAddUser = () => {
    const { UserStore } = this.props;
    let point = UserStore.point;
    UserStore.addUserPoint(point);
  };

  render() {
    const date = this.props.TodoStore.getDate;
    return (
      <div>
        <Header />
        <div>
          <img src={Mypage} />
        </div>
        <div className="middle_m">
          <div className="profile_img">
            <Avatar src={this.props.currentUser.imageUrl} size={210} style={{ top: "2rem" }} />
            {/* <img src={Profile} /> */}
            <div className="profile">
              <p>
                <strong>Name:</strong>&nbsp;
                {this.props.currentUser.name}
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
          <div className="todo">
            {/* <p style={{ textAlign: "right", marginRight: "22px" }}> */}
            <strong style={{ fontSize: "11px" }}>
              {"<" + `${date}` + ">"}
            </strong>
            {/* </p> */}
            <TodoContainer />
          </div>
          <div className="calendar">
            <CalendarContainer date={date} />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default MyPages;
