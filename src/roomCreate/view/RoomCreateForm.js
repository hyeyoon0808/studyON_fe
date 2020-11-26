import React, { Component, useState, useEffect } from "react";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TimePicker from "../Container/TimePicker";
import "../scss/roomCreate.scss";
import { Link } from "react-router-dom";
import tagData from "../../roomList/tagData";
import Chip from "@material-ui/core/Chip";
import { RiCheckboxMultipleFill } from "react-icons/ri";

const RoomCreateForm = (props) => {
  const { mySocket, room, onSetRoom, onAddRoom } = props;
  const [tagName, setTagName] = React.useState([]);

  const handleChange = (event) => {
    setTagName(event.target.value);
    onSetRoom("tag", event.target.value.toString());
  };
  return (
    <div>
      {/* <button onClick={this.goBack}>취소</button> */}
      <div style={{ position: "relative" }}>
        <img
          src={require("../images/roomCreate.jpg")}
          alt="create_img"
          className="create_img"
          style={{ height: "350px", width: "500px", marginLeft: "-50px" }}
        />
        <div
          style={{
            position: "absolute",
            left: "230px",
            top: "35rem",
            color: "red",
            fontFamily: "GmarketSansTTF Medium",
          }}
        >
          * 방 생성 시 100 포인트가 차감됩니다 *
        </div>
      </div>
      <form className="room_create_form" style={{ marginTop: "-350px" }}>
        <div>
          <strong>TITLE</strong> &nbsp;&nbsp;
          <Input
            onChange={(e) => onSetRoom("title", e.target.value)}
            value={room.title}
            className="form_title"
            variant="outlined"
            color="secondary"
            placeholder="방 제목을 입력하세요"
          />
        </div>
        <div>
          <br /> <strong>Description</strong>&nbsp;
          <TextField
            multiline
            rows={3}
            fullWidth
            variant="outlined"
            onChange={(e) => onSetRoom("description", e.target.value)}
            value={room.description}
            color="secondary"
            className="form_desc"
            placeholder="전달하고 싶은 공지를 작성하세요"
          />
        </div>
        <div>
          <br />
          <strong>Tag</strong> &nbsp;
          <Select
            onChange={handleChange}
            className="form_tag"
            color="secondary"
            multiple
            value={tagName}
            renderValue={(selected) => (
              <div className="chips">
                {selected.map((value) => (
                  <Chip key={value} label={value} className="chip" />
                ))}
              </div>
            )}
          >
            {tagData.map((tag) => (
              <MenuItem key={tag.id} value={tag.title}>
                {tag.title}
              </MenuItem>
            ))}
          </Select>
        </div>

        <div>
          <br />
          <strong>People Number</strong> &nbsp; &nbsp;
          <TextField
            //name="maxPeopleNum"
            type="number"
            value={room.maxPeopleNum}
            onChange={(e) => onSetRoom("maxPeopleNum", e.target.value)}
            margin="normal"
            className="form_number"
            color="secondary"
          />
        </div>
        <div>
          <br />
          <strong>Start Time 시작시간</strong> &nbsp; &nbsp;
          <TimePicker
            value={room.startTime}
            onChange={(e) => onSetRoom("startTime", e)}
          />
        </div>
        <div>
          <br />
          <span>
            <strong>StudyTime 공부시간</strong> &nbsp; &nbsp;
            <TextField
              //name="studyTime"
              type="number"
              value={room.studyTime}
              onChange={(e) => onSetRoom("studyTime", e.target.value)}
              margin="normal"
              className="form_number"
              color="secondary"
            />
          </span>
          <span style={{ marginLeft: "180px" }}>
            <strong>BreakTime 쉬는시간</strong> &nbsp; &nbsp;
            <TextField
              //name="breakTime"
              type="number"
              value={room.breakTime}
              onChange={(e) => onSetRoom("breakTime", e.target.value)}
              margin="normal"
              className="form_number"
              color="secondary"
            />
          </span>
        </div>
        <div>
          <br />
          <strong>Term 횟수</strong> &nbsp; &nbsp;
          <TextField
            //name="maxTerm"
            type="number"
            value={room.maxTerm}
            onChange={(e) => onSetRoom("maxTerm", e.target.value)}
            margin="normal"
            className="form_number"
            color="secondary"
          />
        </div>
        <Button
          variant="outlined"
          type="submit"
          onClick={onAddRoom}
          style={{ float: "right", marginRight: "50px" }}
        >
          <Link to={`/room-entrance/${mySocket.id}`} className="button_text_s">
            <RiCheckboxMultipleFill /> 등록
          </Link>
        </Button>
      </form>
    </div>
  );
};

export default RoomCreateForm;
