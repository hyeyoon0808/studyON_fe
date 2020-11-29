import React, { useEffect, useState } from "react";
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
import Footer from "../../footer/view/Footer";

const RoomCreateForm = (props) => {
  const { mySocket, room, onSetRoom, onAddRoom, onSetRoomTime } = props;
  const [tagName, setTagName] = useState([]);
  const [method, setMethod] = useState("pomodoro");
  const [studyTime, setStudyTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);

  const handleChange = (event) => {
    setTagName(event.target.value);
    onSetRoom("tag", event.target.value.toString());
  };

  useEffect(() => {
    onSetRoom("studyTime", studyTime);
    onSetRoom("breakTime", breakTime);
  }, []);

  const handleChangeMethod = (e) => {
    setMethod(e.target.value);
    console.log(e.target.value);
    if (e.target.value === "pomodoro") {
      setStudyTime(25);
      setBreakTime(5);
    } else if (e.target.value === "studyon") {
      setStudyTime(50);
      setBreakTime(10);
      onSetRoom("studyTime", 50);
      onSetRoom("breakTime", 10);
    }
  };

  const handleStudyTime = (e) => {
    setStudyTime(e.target.value);
    onSetRoom("studyTime", e.target.value);
  };
  const handleBreakTime = (e) => {
    setBreakTime(e.target.value);
    onSetRoom("breakTime", e.target.value);
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
            <span className="necessary_lang">*필수</span>
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
            <span className="necessary_lang">*필수</span>
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
            placeholder="5명"
          />
        </div>
        <div>
          <br />
          <strong>
            Start Time 시작시간
            <span className="necessary_lang">*필수</span>
          </strong>
          &nbsp; &nbsp;
          <TimePicker
            value={room.startTime}
            onChange={(e) => onSetRoom("startTime", e)}
          />
        </div>
        <div>
          <br />
          <strong>
            Study Pattern 공부 패턴
            <span className="necessary_lang">*필수</span> <br />
          </strong>
          <br />

          <span>
            <Radio
              value="pomodoro"
              onChange={handleChangeMethod}
              checked={method === "pomodoro"}
              name="pomodoro"
            />
            뽀모도로 공부법 (25분 공부+5분 휴식)
          </span>
          <br />
          <span>
            <Radio
              value="studyon"
              onChange={handleChangeMethod}
              checked={method === "studyon"}
              name="studyon"
            />
            스터디온 공부법 <strong>⭐️추천⭐️</strong>(50분 공부+10분 휴식)
          </span>
          <br />
          <span>
            <Radio
              value="etc"
              onChange={handleChangeMethod}
              checked={method === "etc"}
              name="etc"
            />
            나만의 공부방법 설정 (원하는 시간을 설정하세요)
          </span>
        </div>
        <div>
          <br />
          <span>
            <strong>StudyTime 공부시간 (분)</strong>
            &nbsp; &nbsp;
            <TextField
              type="number"
              value={studyTime}
              onChange={handleStudyTime}
              // onChange={(e) => onSetRoom("studyTime", e.target.value)}
              margin="normal"
              className="form_number"
              color="secondary"
              placeholder="25"
            />
          </span>
          <span style={{ marginLeft: "3rem" }}>
            <strong>BreakTime 쉬는시간 (분)</strong>
            &nbsp; &nbsp;
            <TextField
              type="number"
              value={breakTime}
              onChange={handleBreakTime}
              // onChange={(e) => onSetRoom("breakTime", e.target.value)}
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
            <span className="necessary_lang">*필수</span>
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
            placeholder="6번"
          />
        </div>
        <Button
          variant="outlined"
          type="submit"
          style={{ float: "right", right: "10.5rem" }}
        >
          <Link to="/" className="button_text_s">
            취소
          </Link>
        </Button>
        <Button
          variant="outlined"
          type="submit"
          onClick={onAddRoom}
          style={{ float: "right" }}
        >
          <Link to={`/room-entrance/${mySocket.id}`} className="button_text_a">
            <RiCheckboxMultipleFill /> 등록
          </Link>
        </Button>
      </form>
      <div style={{ height: "38rem" }}></div>
      <Footer />
    </div>
  );
};

export default RoomCreateForm;
