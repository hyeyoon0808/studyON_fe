import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
<<<<<<< HEAD
import Home from "../home/view/Home";
import Login from "../login/view/Login";
import RoomCreate from "../roomCreate/Container/RoomCreate";
import RoomList from "../roomList/view/RoomList";
import RoomEntrance from "../roomEntrance/view/RoomEntrance";
import MyPages from "../myPage/view/MyPages";
import ScrollToTop from "../assets/ScrollToTop";
=======
import Home from "../view/Home";
import Login from "../view/Login";
import RoomCreate from "../view/RoomCreate";
import RoomList from "../view/RoomList";
>>>>>>> 0f4890cb6e29e71f71c34d84f40b536261aca7af

class MainRouter extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div>
        <ScrollToTop>
          {/* <BrowserRouter> */}
=======
      <>
        <BrowserRouter>
>>>>>>> 0f4890cb6e29e71f71c34d84f40b536261aca7af
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/room-create" component={RoomCreate} />
            <Route path="/room-list" component={RoomList} />
<<<<<<< HEAD
            <Route path="/room-entrance" component={RoomEntrance} />
            <Route path="/myPages" component={MyPages} />
          </Switch>
          {/* </BrowserRouter> */}
        </ScrollToTop>
      </div>
=======
          </Switch>
        </BrowserRouter>
      </>
>>>>>>> 0f4890cb6e29e71f71c34d84f40b536261aca7af
    );
  }
}

export default MainRouter;
