import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../home/view/Home";
import Login from "../user/view/Login";
import RoomCreateContainer from "../roomCreate/Container/RoomCreateContainer";
import RoomList from "../roomList/view/RoomList";
import RoomEntranceView from "../roomEntrance/view/RoomEntranceView";
import MyPages from "../myPage/view/MyPages";
import ScrollToTop from "../assets/ScrollToTop";
import RoomListViewContainer from "../roomList/container/RoomListViewContainer";
import RoomEntranceContainer from "../roomEntrance/container/RoomEntranceContainer";

class MainRouter extends Component {
  render() {
    return (
      <div>
        <ScrollToTop>
          {/* <BrowserRouter> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/room-create" component={RoomCreateContainer} />
            <Route path="/room-list" component={RoomList} />
            <Route
              path="/room-entrance/:id"
              component={RoomEntranceContainer}
            />
            <Route path="/myPages" component={MyPages} />
          </Switch>
          {/* </BrowserRouter> */}
        </ScrollToTop>
      </div>
    );
  }
}

export default MainRouter;
