import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TimePicker from "../Container/TimePicker";
import moment from "moment";
import InputLabel from "@material-ui/core/InputLabel";
import ApiService from "../Api/ApiService";
import "../scss/roomCreate.scss";

class RoomCreateForm extends Component {
  constructor(props) {
    super(props);
    //   this.goBack = this.goBack.bind(this);

    // goBack() {
    //   this.props.history.goBack();
    // }

    this.state = {
      title: "",
      description: "",
      tag: "",
      peopleNum: 0,
      currentPeopleNum: 1,
      maxPeopleNum: 10,
      startTime: moment(),
      studyTime: 25,
      breakTime: 5,
      currentTerm: 0,
      maxTerm: 0,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    // 파라미터로 받은 event.target.name이 name 아닐 경우에만 handleCheck함수 실행
    // setTimeout으로 딜레이를 준 이유는 딜레이를 주지 않았을 경우 setState 변경된 값이 handleCheck에서 바로 반영되지 않음
    if (e.target.name !== "name") {
      setTimeout(this.handleCheck, 100);
    }
  };

  //timepicker
  handleChangeTime = (e) => this.setState({ startTime: e });

  handleSubmit = (e) => {
    const {
      title,
      description,
      tag,
      peopleNum,
      startTime,
      studyTime,
      breakTime,
      maxTerm,
    } = this.state;
    e.preventDefault();
    let roomInfo = {
      title: this.state.title,
      notification: this.state.notification,
      tag: this.state.tag,
      number: this.state.number,
      startTime: this.state.startTime,
      breakTime: this.state.breakTime,
      maxTerm: this.state.maxTerm,
    };
    this.props.onCreate({
      title: title,
      description: description,
      tag: tag,
      peopleNum: peopleNum,
      startTime: startTime,
      studyTime: studyTime,
      breakTime: breakTime,
      maxTerm: maxTerm,
    });
    console.log(moment(this.state.startTime).format("hh:mm a"));

    ApiService.addRoom(roomInfo).then((res) => {
      this.setState({
        message: roomInfo.title + "등록",
      });
      this.props.history.push("/");
    });

    this.setState({
      title: "",
      description: "",
      tag: "",
      peopleNum: 0,
      startTime: moment(),
      studyTime: 0,
      breakTime: 0,
      maxTerm: 0,
    });
  };

  render() {
    const {
      title,
      description,
      tag,
      peopleNum,
      startTime,
      studyTime,
      breakTime,
      maxTerm,
    } = this.state;
    return (
      <div>
        {/* <button onClick={this.goBack}>취소</button> */}
        <img
          src={require("../images/create_img.jpeg")}
          alt=""
          className="create_img"
        />
        <form onSubmit={this.handleSubmit} className="room_create_form">
          <div>
            TITLE &nbsp;
            <Input
              name="title"
              onChange={this.handleChange}
              value={title}
              className="form_title"
              variant="outlined"
              color="secondary"
            />
          </div>

          <div>
            <br /> Description 공지 &nbsp;
            <TextField
              multiline
              rows={3}
              fullWidth
              variant="outlined"
              name="description"
              onChange={this.handleChange}
              value={description}
              color="secondary"
              className="form_desc"
            />
          </div>
          <div>
            <br />
            Tag &nbsp;
            {/* <InputLabel htmlFor="age-native-simple">Tag</InputLabel> */}
            <Select
              name="tag"
              value={tag}
              onChange={this.handleChange}
              className="form_tag"
              color="secondary"
            >
              <MenuItem value={"공무원"}>공무원 준비</MenuItem>
              <MenuItem value={"ncs"}>NCS 준비</MenuItem>
              <MenuItem value={"수능"}>수능 준비</MenuItem>
            </Select>
          </div>

          <div>
            <br />
            People Number &nbsp; &nbsp;
            <TextField
              name="peopleNum"
              type="number"
              value={peopleNum}
              onChange={this.handleChange}
              margin="normal"
              className="form_number"
              color="secondary"
            />
          </div>
          <div>
            <br />
            Start Time 시작시간 &nbsp; &nbsp;
            <TimePicker
              value={startTime}
              onChange={this.handleChangeTime}
              name="startTime"
            />
          </div>

          <div>
            <br />
            StudyTime 공부시간 &nbsp; &nbsp;
            <TextField
              name="studyTime"
              type="number"
              value={studyTime}
              onChange={this.handleChange}
              margin="normal"
              className="form_number"
              color="secondary"
            />
          </div>
          <div>
            <br />
            BreakTime 쉬는시간 &nbsp; &nbsp;
            <TextField
              name="breakTime"
              type="number"
              value={breakTime}
              onChange={this.handleChange}
              margin="normal"
              className="form_number"
              color="secondary"
            />
          </div>

          <div>
            <br />
            Term 횟수 &nbsp; &nbsp;
            <TextField
              name="maxTerm"
              type="number"
              value={maxTerm}
              onChange={this.handleChange}
              margin="normal"
              className="form_number"
              color="secondary"
            />
          </div>
          <Button variant="contained" color="secondary" type="submit">
            등록
          </Button>
        </form>
      </div>
    );
  }
}

export default RoomCreateForm;
