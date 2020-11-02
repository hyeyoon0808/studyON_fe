import React, { Component } from "react";
import RoomListView from "./RoomListView";
import SearchBar from "./SearchBar";
import Header from "../../header/view/Header";
import Footer from "../../footer/view/Footer";
import "../scss/RoomList.scss";
import SearchBarContainer from "../container/SearchBarContainer";
import RoomListViewContainer from "../container/RoomListViewContainer";
function RoomList() {
    return (
        <>
            <Header />
            <div className="roomList">
                <SearchBarContainer />
                <RoomListViewContainer />
            </div>
            <Footer />
        </>
    );
}

export default RoomList;
