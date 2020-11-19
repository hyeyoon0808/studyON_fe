import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import RoomEntranceView from "../view/RoomEntranceView";

@inject("Store", "UserStore")
@observer
class RoomEntranceContainer extends Component {
<<<<<<< HEAD
    componentDidMount() {
        const { Store } = this.props;
        const { UserStore } = this.props;
        const currentUser = UserStore.getCurrentUser;
        console.log("roomentrance did mount!!!");
        // Store.roomList();
        Store.mySocket.emit("enter room", {
            owner: this.props.match.params.id,
            userId: Store.mySocket.id,
        });
        //Store.mySocket.emit("enter room", {owner: this.props.match.params.id, userId: this.props.currentUser.id});
        Store.mySocket.on("enter event", (res) => {
            console.log(res + "가 입장!");
        });
        Store.mySocket.on("leave event", (res) => {
            console.log(res + "가 나감!");
        });
    }
=======
  componentDidMount() {
    const { Store } = this.props;
    const {UserStore} = this.props;
    const currentUser=UserStore.getCurrentUser;
    console.log("roomentrance did mount!!!");
    // Store.roomList();
    //Store.mySocket.emit("enter room", {owner: this.props.match.params.id, userId: Store.mySocket.id});
    Store.mySocket.emit("enter room", {owner: this.props.match.params.id, userId: currentUser.name});
    Store.mySocket.on("enter event", (res) => {
      console.log(res + "가 입장!");
    })
    Store.mySocket.on("leave event", (res) => {
      console.log(res + "가 나감!");
    })
  }
>>>>>>> 323f5857dbe98e402775dfba9eefd136c40a7982

    componentWillUnmount() {
        const { Store } = this.props;
        Store.mySocket.emit("leave room", {
            owner: this.props.match.params.id,
        });
    }

    updateIsPlaying = () => {
        const { Store } = this.props;
        let room = this.props.Store.room;
        Store.updateIsPlaying(room);
    };
    render() {
        const { Store } = this.props;

<<<<<<< HEAD
        //const roomList = this.props.Store.getRoomList;
        const mySocket = this.props.Store.mySocket;
        const room = this.props.Store.getRoom;
        const rooms = this.props.Store.getRoomList;
        console.log(this.props.match);
        console.log(rooms);

        return (
            <RoomEntranceView
                updateIsPlaying={this.updateIsPlaying}
                mySocket={mySocket}
                room={room}
                rooms={rooms}
                match={this.props.match}
                owner={this.props.match.params.id}
            />
        );
    }
=======
  }
  render() {    
    //const roomList = this.props.Store.getRoomList;
    const mySocket=this.props.Store.mySocket;
    const room = this.props.Store.getRoom;
    const rooms = this.props.Store.getRoomList;
    const currentUser=this.props.UserStore.getCurrentUser;
    console.log(this.props.match);
    console.log(rooms);
    
    return <RoomEntranceView mySocket={mySocket} room={room} rooms={rooms} match={this.props.match} owner={this.props.match.params.id} currentUser={currentUser}/>;
  }
>>>>>>> 323f5857dbe98e402775dfba9eefd136c40a7982
}

export default RoomEntranceContainer;
