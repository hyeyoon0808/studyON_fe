import React, { Component } from "react";
import Header from "../../header/view/Header";
import Footer from "../../footer/view/Footer";
import "../scss/RoomList.scss";
import SearchBarContainer from "../container/SearchBarContainer";
import RoomEntrance from "../../roomEntrance/view/RoomEntrance";
import { Route } from "react-router-dom";
import RoomListViewContainer from "../container/RoomListViewContainer";
import TagView from "./TagView";
import TagContainer from "../container/TagContainer";

function RoomList({ match }) {
    return (
        <>
            <Header />
            <div className="roomList">
                <SearchBarContainer />
                <TagContainer />
                <Route
                    exact
                    path={match.path}
                    component={RoomListViewContainer}
                />
                <Route path={`room-entrance/:id`} component={RoomEntrance} />
            </div>
            <Footer />
        </>
    );
}

export default RoomList;
