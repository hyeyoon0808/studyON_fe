import React, { useState } from "react";
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
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
const RoomCreateForm = (props) => {
  const { mySocket, room, onSetRoom, onAddRoom } = props;
  const [tagName, setTagName] = useState([]);
  const [method, setMethod] = useState("pomodoro");
  const [studyTime, setStudyTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);

  const handleChange = (event) => {
    setTagName(event.target.value);
    onSetRoom("tag", event.target.value.toString());
  };

  const handleChangeMethod = (e) => {
    setMethod(e.target.value);
    console.log(e.target.value);
    if (e.target.value === "pomodoro") {
      setStudyTime(25);
      setBreakTime(5);
    } else if (e.target.value === "studyon") {
      setStudyTime(50);
      setBreakTime(10);
    } else {
      setStudyTime(room.studyTime);
      setBreakTime(room.breakTime);
    }
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
          <strong>
            TITLE
            <span
              style={{
                fontWeight: "normal",
                fontSize: "0.1em",
                color: "red",
                verticalAlign: "super",
              }}
            >
              *필수
            </span>
          </strong>
          &nbsp;&nbsp;
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
          <br /> <strong>Notice 공지</strong>&nbsp;
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
          <strong>
            Tag 태그
            <span
              style={{
                fontWeight: "normal",
                fontSize: "0.1em",
                color: "red",
                verticalAlign: "super",
              }}
            >
              *필수
            </span>
          </strong>{" "}
          &nbsp;
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
          <strong>People Number 인원수</strong> &nbsp; &nbsp;
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
          <strong>
            Start Time 시작시간
            <span
              style={{
                fontWeight: "normal",
                fontSize: "0.1em",
                color: "red",
                verticalAlign: "super",
              }}
            >
              *필수
            </span>
          </strong>
          &nbsp; &nbsp;
          <TimePicker
            value={room.startTime}
            onChange={(e) => onSetRoom("startTime", e)}
          />
        </div>
        <div>
          <FormControl>
            <FormLabel>
              <RadioGroup
                aria-label="method"
                name="method1"
                value={method}
                onChange={handleChangeMethod}
              >
                <FormControlLabel
                  value="pomodoro"
                  control={<Radio />}
                  label="뽀모도로"
                ></FormControlLabel>
                <FormControlLabel
                  value="studyon"
                  control={<Radio />}
                  label="스터디온"
                ></FormControlLabel>
                <FormControlLabel
                  value="etc"
                  control={<Radio />}
                  label="나만의 공부방법 설정"
                ></FormControlLabel>
              </RadioGroup>
            </FormLabel>
          </FormControl>
        </div>
        <div>
          <br />
          <span>
            <strong>
              StudyTime 공부시간 (분)
              <span
                style={{
                  fontWeight: "normal",
                  fontSize: "0.1em",
                  color: "red",
                  verticalAlign: "super",
                }}
              >
                *필수
              </span>
            </strong>
            &nbsp; &nbsp;
            <TextField
              //name="studyTime"
              type="number"
              value={studyTime}
              onChange={(e) => onSetRoom("studyTime", e.target.value)}
              margin="normal"
              className="form_number"
              color="secondary"
              placeholder="25"
            />
          </span>
          <span style={{ marginLeft: "180px" }}>
            <strong>
              BreakTime 쉬는시간 (분)
              <span
                style={{
                  fontWeight: "normal",
                  fontSize: "0.1em",
                  color: "red",
                  verticalAlign: "super",
                }}
              >
                *필수
              </span>
            </strong>
            &nbsp; &nbsp;
            <TextField
              //name="breakTime"
              type="number"
              value={breakTime}
              onChange={(e) => onSetRoom("breakTime", e.target.value)}
              margin="normal"
              className="form_number"
              color="secondary"
              placeholder="5"
            />
          </span>
        </div>
        <div>
          <br />
          <strong>
            Term 횟수
            <span
              style={{
                fontWeight: "normal",
                fontSize: "0.1em",
                color: "red",
                verticalAlign: "super",
              }}
            >
              *필수
            </span>
          </strong>{" "}
          &nbsp; &nbsp;
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
