import { observable, computed, action } from "mobx";
import tileData from "../tileData";
//1.Mobx Store 클래스 선언
class Store {
    //2. 관리해야하는 state 객체 @observable 선언 및 초기화
    @observable
    roomList = tileData;

    @observable
    roomName = "";
    //3. state 데이터 리턴 - @computed get으로 함수 구현
    @computed
    get getRoomList() {
        return this.roomList ? this.roomList.slice() : [];
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
    }

    @action
    findMatches = () => {
        this.roomList = tileData.filter((room) => {
            // 이 곳에서 검색어와 매치 되는 지를 확인해야 합니다
            const regex = new RegExp(this.roomName, "gi");
            return room.title.match(regex);
        });
    };

    @action
    initRoomList = () => {
        this.roomList = tileData;
    };
}

//5. 객체 생성해서 export
export default new Store();
