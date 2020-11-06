import moment from "moment";

class RoomApiModel {
  userId = 98799;
  title = "기본 제목";
  description = "기본 공지";
  startTime = moment().toString();
  studyTime = "30";
  breakTime = "5";
  //currentPeopleNum = 1;
  maxPeopleNum = 4;
  tag = "ncs";
  //currentTerm = 1;
  maxTerm = 6;
  owner = 98799;

  constructor(
    title,
    description,
    startTime,
    studyTime,
    breakTime,
    //currentPeopleNum,
    maxPeopleNum,
    tag,
    //currentTerm,
    maxTerm
  ) {
    this.title = title;
    this.description = description;
    this.startTime = startTime.toString();
    this.studyTime = studyTime;
    this.breakTime = breakTime;
    //this.currentPeopleNum = currentPeopleNum;
    this.maxPeopleNum = maxPeopleNum;
    this.tag = tag;
    //this.currentTerm = currentTerm;
    this.maxTerm = maxTerm;
  }
  getJson() {
    let json = {
      userId: 9282,
      roomInfo: {
        title: this.title,
        description: this.description,
        startTime: this.startTime,
        studyTime: this.studyTime,
        breakTime: this.breakTime,
        //currentPeopleNum: this.currentPeopleNum,
        maxPeopleNum: this.maxPeopleNum,
        tag: this.tag,
        //currentTerm: this.currentTerm,
        maxTerm: this.maxTerm,
        owner: this.userId,
      },
    };
    return json;
  }
  // setRoomId(roomId) {
  //   this.roomId = roomId;
  // }
}

export default RoomApiModel;
