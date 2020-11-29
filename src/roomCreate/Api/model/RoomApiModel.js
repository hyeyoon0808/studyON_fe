import moment from "moment";

class RoomApiModel {
  userId = 0;
  title = "기본 제목";
  description = "기본 공지";
  startTime = moment().toString();
  studyTime = "25";
  breakTime = "5";
  maxPeopleNum = 4;
  tag = "토익";
  maxTerm = 6;
  owner = this.userId;
  isPlaying = false;

  constructor(
    title,
    description,
    startTime,
    studyTime,
    breakTime,
    maxPeopleNum,
    tag,
    maxTerm,
    owner,
    isPlaying
  ) {
    this.userId = owner;
    this.title = title;
    this.description = description;
    this.startTime = startTime.toString();
    this.studyTime = studyTime;
    this.breakTime = breakTime;
    this.maxPeopleNum = maxPeopleNum;
    this.tag = tag;
    this.maxTerm = maxTerm;
    this.owner = owner;
    this.isPlaying = isPlaying;
  }
  getJson() {
    let json = {
      userId: this.userId,
      roomInfo: {
        title: this.title,
        description: this.description,
        startTime: this.startTime,
        studyTime: this.studyTime,
        breakTime: this.breakTime,
        maxPeopleNum: this.maxPeopleNum,
        tag: this.tag,
        maxTerm: this.maxTerm,
        owner: this.owner,
        isPlaying: this.isPlaying,
      },
    };
    return json;
  }
}

export default RoomApiModel;
