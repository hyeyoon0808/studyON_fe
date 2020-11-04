import { observable, computed, action } from "mobx";
//import tileData from "../tileData.json";
//import axios from "axios";
//import { actionFieldDecorator } from "mobx/lib/internal";
import RoomApi from "../Api/RoomApi";

//1.Mobx Store 클래스 선언
class Store {
  roomApi = new RoomApi();
  //2. 관리해야하는 state 객체 @observable 선언 및 초기화
  @observable
  roomName = "";

  @observable rooms = [];

  // @computed
  // get getRooms() {
  //   return this.rooms ? { ...this.rooms } : {};
  // }

  //3. state 데이터 리턴 - @computed get으로 함수 구현
  // @computed
  // get getRoomList() {
  //   return this.roomList ? this.roomList.slice() : [];
  // }
  @computed
  get getRoomList() {
    return this.rooms ? this.rooms.slice() : [];
  }

  @computed
  get getErrorMessage() {
    return this.errorMessage ? this.errorMessage : "FAIL";
  }

  @computed
  get getRoomName() {
    return this.roomName;
  }

  @action
  setRoomName(roomName) {
    this.roomName = roomName;
  }

  @action
  addRoomList() {
    const tmpData = {
      img: "./pomodoro.png",
      title: "테스트 방",
      author: "테스트",
    };
    this.roomList = [...this.roomList, tmpData];

    console.log(this.roomList);
  }

  @action
  async roomList() {
    console.log("roomlist-store");
    this.rooms = await this.roomApi.roomList();
    console.log(this.rooms);
  }
}

//5. 객체 생성해서 export
export default new Store();
