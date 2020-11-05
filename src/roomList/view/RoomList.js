import React, { Component } from "react";
import RoomListView from "./RoomListView";
import SearchBar from "./SearchBar";
import Header from "../../header/view/Header";
import Footer from "../../footer/view/Footer";
import "../scss/RoomList.scss";
import SearchBarContainer from "../container/SearchBarContainer";
import RoomEntrance from "../../roomEntrance/view/RoomEntranceView";
import { Route } from "react-router-dom";
import RoomListViewContainer from "../container/RoomListViewContainer";
import RoomEntranceContainer from "../../roomEntrance/container/RoomEntranceContainer";

function RoomList({ match }) {
  return (
    <>
      <Header />
      <div className="roomList">
        <SearchBarContainer />
        {/* <Route exact path={match.path} component={RoomListView} /> */}
        <Route exact path={match.path} component={RoomListViewContainer} />
        {/* <Route path={`room-entrance/:id`} component={RoomEntranceContainer} /> */}
      </div>
      <Footer />
    </>
  );
}

export default RoomList;
