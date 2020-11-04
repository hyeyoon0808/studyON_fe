import React, { Component } from "react";
import RoomListView from "./RoomListView";
import SearchBar from "./SearchBar";
import Header from "../../header/view/Header";
import Footer from "../../footer/view/Footer";
import "../scss/RoomList.scss";
import SearchBarContainer from "../container/SearchBarContainer";
import RoomEntrance from "../../roomEntrance/view/RoomEntrance";
import { Route } from "react-router-dom";
import RoomListViewContainer from "../container/RoomListViewContainer";
function RoomList({ match }) {
  return (
    <>
      <Header />
      <div className="roomList">
        <SearchBarContainer />
        {/* <Route exact path={match.path} component={RoomListView} /> */}
        <Route exact path={match.path} component={RoomListViewContainer} />
        <Route path={`room-entrance/:userId`} component={RoomEntrance} />
      </div>
      <Footer />
    </>
  );
}

export default RoomList;
