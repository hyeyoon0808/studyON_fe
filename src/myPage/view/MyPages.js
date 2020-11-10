import React, {Component}from "react";
import "../scss/MyPages.scss";
import { Card } from "antd";
import Profile from "../images/Profile.png";
import MyCalendar from "./MyCalendar";
import { getCurrentUser } from '../../user/util/APIUtil';
import { ACCESS_TOKEN } from '../../user/constants';
import Alert from 'react-s-alert';
import Header from "../../header/view/Header";

class MyPages extends Component{
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      currentUser: null,
      loading: false
    }

    this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  loadCurrentlyLoggedInUser() {
    this.setState({
      loading: true
    });

    getCurrentUser()
    .then(response => {
      this.setState({
        currentUser: response,
        authenticated: true,
        loading: false
      });
    }).catch(error => {
      this.setState({
        loading: false
      });  
    });    
  }

  handleLogout() {
    localStorage.removeItem(ACCESS_TOKEN);
    this.setState({
      authenticated: false,
      currentUser: null
    });
    Alert.success("You're safely logged out!");
  }

  componentDidMount() {
    this.loadCurrentlyLoggedInUser();
  }
  // const { user } = props;
  render(){
    return (
      <div className="mypage">
        <Header />
        <div className="row">
          <div className="image">
            <img class="disabled medium ui image" src={Profile} />
          </div>
          <div className="profile">
            <strong style={{ fontSize: "25px" }}>Profile</strong>
            <Card className="profileCard">
              <p>Name: name</p>
              <p>Email: user.email</p>
              <p>Your Point: </p>
            </Card>
          </div>

          <div className="row2">
            <div className="todo">
              <Card className="todoCard">
                <strong style={{ fontSize: "18px" }}>Todo List</strong>
                <p>todo1....</p>
                <p>todo2....</p>
                <p>todo3....</p>
              </Card>
            </div>
            <div className="calendar">
              <MyCalendar style={{ width: "100rem" }} />
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default MyPages;
