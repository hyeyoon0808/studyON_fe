import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../home/view/Home";
import Login from "../user/view/Login";
import RoomCreate from "../roomCreate/Container/RoomCreate";
import RoomList from "../roomList/view/RoomList";
import Signup from "../user/view/Signup";
import PrivateRoute from '../myPage/PrivateRoute';
import { getCurrentUser } from '../user/util/APIUtil';
import { ACCESS_TOKEN } from '../user/constants';
import Alert from 'react-s-alert';
import RoomEntranceView from "../roomEntrance/view/RoomEntranceView";
import MyPages from "../myPage/view/MyPages";
import NotFound from "../myPage/NotFound";
import OAuth2RedirectHandler from '../user/OAuthRedirectHandler';
import ScrollToTop from "../assets/ScrollToTop";
import RoomListViewContainer from "../roomList/container/RoomListViewContainer";
import RoomEntranceContainer from "../roomEntrance/container/RoomEntranceContainer";

class MainRouter extends Component {
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

  render() {
    return (
      <div>
        <ScrollToTop>
          {/* <BrowserRouter> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login}
              render={(props) => <Login authenticated={this.state.authenticated} {...props} />}></Route>
            <Route path="/signup" component={Signup}
            render={(props) => <Signup authenticated={this.state.authenticated} {...props} />}>
            </Route>
            <Route path="/room-create" component={RoomCreate} />
            <Route path="/room-list" component={RoomList} />
            <Route
              path="/room-entrance/:id"
              component={RoomEntranceContainer}
            />
            <PrivateRoute path="/profile" component={MyPages} authenticated={this.state.authenticated} currentUser={this.state.currentUser}/>
            <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}></Route> 
            <Route component={NotFound}></Route>
          </Switch>
          {/* </BrowserRouter> */}
        </ScrollToTop>
      </div>
    );
  }
}

export default MainRouter;
