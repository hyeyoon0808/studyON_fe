import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TimePicker from "../Container/TimePicker";
import moment from "moment";
import InputLabel from "@material-ui/core/InputLabel";

class RoomCreateForm extends Component {
  // constructor(props) {
  //   super(props);
  //   this.goBack = this.goBack.bind(this);
  // }
  // goBack() {
  //   this.props.history.goBack();
  // }

  state = {
    title: "",
    description: "",
    tag: "",
    peopleNum: 0,
    startTime: moment(),
    studyTime: 0,
    breakTime: 0,
    term: 0,
  };

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
      term,
    } = this.state;
    e.preventDefault();
    this.props.onCreate({
      title: title,
      description: description,
      tag: tag,
      peopleNum: peopleNum,
      startTime: startTime,
      studyTime: studyTime,
      breakTime: breakTime,
      term: term,
    });
    console.log(moment(this.state.startTime).format("hh:mm a"));

    this.setState({
      title: "",
      description: "",
      tag: "",
      peopleNum: 0,
      startTime: moment(),
      studyTime: 0,
      breakTime: 0,
      term: 0,
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
      term,
    } = this.state;
    return (
      <div>
        {/* <button onClick={this.goBack}>취소</button> */}

        <form className="roomCreateForm" onSubmit={this.handleSubmit}>
          <Input
            name="title"
            onChange={this.handleChange}
            value={title}
            placeholder="title..."
          />

          <TextField
            label="Multiline"
            multiline
            rows={4}
            defaultValue="description..."
            variant="filled"
            name="description"
            onChange={this.handleChange}
            value={description}
          />
          <InputLabel htmlFor="age-native-simple">Tag</InputLabel>
          <Select name="tag" value={tag} onChange={this.handleChange}>
            <MenuItem value={"공무원"}>공무원 준비</MenuItem>
            <MenuItem value={"ncs"}>NCS 준비</MenuItem>
            <MenuItem value={"수능"}>수능 준비</MenuItem>
          </Select>
          <TextField
            name="peopleNum"
            label="Contact phone number"
            type="number"
            value={peopleNum}
            onChange={this.handleChange}
            placeholder="Contact phone number"
            margin="normal"
          />
          <TimePicker
            value={startTime}
            onChange={this.handleChangeTime}
            name="startTime"
          />

          {/* studyTime */}
          <TextField
            name="studyTime"
            label="study study"
            type="number"
            value={studyTime}
            onChange={this.handleChange}
            placeholder="studyTime..."
            margin="normal"
          />

          {/* breakTime */}
          <TextField
            name="breakTime"
            label="break study"
            type="number"
            value={breakTime}
            onChange={this.handleChange}
            placeholder="repeat..."
            margin="normal"
            defaultValue={25}
          />

          <TextField
            name="term"
            label="term"
            type="number"
            value={term}
            onChange={this.handleChange}
            placeholder="term..."
            margin="normal"
          />
          <Button variant="contained" color="secondary" type="submit">
            등록
          </Button>
        </form>
      </div>
    );
  }
}

export default RoomCreateForm;
