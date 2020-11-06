import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TimePicker from "../Container/TimePicker";
import "../scss/roomCreate.scss";

const RoomCreateForm = (props) => {
  const { room, onAddRoom, onSetRoom } = props;
  return (
    <div>
      {/* <button onClick={this.goBack}>취소</button> */}
      <img
        src={require("../images/create_img.jpeg")}
        alt="create_img"
        className="create_img"
      />
      <form className="room_create_form">
        <div>
          TITLE &nbsp;
          <Input
            //name="title"
            onChange={(e) => onSetRoom("title", e.target.value)}
            value={room.title}
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
            //name="description"
            onChange={(e) => onSetRoom("description", e.target.value)}
            value={room.description}
            color="secondary"
            className="form_desc"
          />
        </div>
        <div>
          <br />
          Tag &nbsp;
          <Select
            //name="tag"
            value={room.tag}
            onChange={(e) => onSetRoom("tag", e.target.value)}
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
          Start Time 시작시간 &nbsp; &nbsp;
          <TimePicker
            value={room.startTime}
            onChange={(e) => onSetRoom("startTime", e)}
            //name="startTime"
          />
        </div>

        <div>
          <br />
          StudyTime 공부시간 &nbsp; &nbsp;
          <TextField
            //name="studyTime"
            type="number"
            value={room.studyTime}
            onChange={(e) => onSetRoom("studyTime", e.target.value)}
            margin="normal"
            className="form_number"
            color="secondary"
          />
        </div>
        <div>
          <br />
          BreakTime 쉬는시간 &nbsp; &nbsp;
          <TextField
            //name="breakTime"
            type="number"
            value={room.breakTime}
            onChange={(e) => onSetRoom("breakTime", e.target.value)}
            margin="normal"
            className="form_number"
            color="secondary"
          />
        </div>

        <div>
          <br />
          Term 횟수 &nbsp; &nbsp;
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
          variant="contained"
          color="secondary"
          type="submit"
          onClick={onAddRoom}
        >
          등록
        </Button>
      </form>
    </div>
  );
};

export default RoomCreateForm;

// class RoomCreateForm extends Component {
//   constructor(props) {
//     super(props);
//     //   this.goBack = this.goBack.bind(this);

//     // goBack() {
//     //   this.props.history.goBack();
//     // }
//   }

//   const {room}

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//     // 파라미터로 받은 event.target.name이 name 아닐 경우에만 handleCheck함수 실행
//     // setTimeout으로 딜레이를 준 이유는 딜레이를 주지 않았을 경우 setState 변경된 값이 handleCheck에서 바로 반영되지 않음
//     if (e.target.name !== "name") {
//       setTimeout(this.handleCheck, 100);
//     }
//   };

//   //timepicker
//   handleChangeTime = (e) => this.setState({ startTime: e });

//   handleSubmit = (e) => {
//     const {
//       title,
//       description,
//       tag,
//       peopleNum,
//       startTime,
//       studyTime,
//       breakTime,
//       maxTerm,
//     } = this.state;
//     e.preventDefault();
//     let roomInfo = {
//       title: this.state.title,
//       notification: this.state.notification,
//       tag: this.state.tag,
//       number: this.state.number,
//       startTime: this.state.startTime,
//       breakTime: this.state.breakTime,
//       maxTerm: this.state.maxTerm,
//     };
//     this.props.onCreate({
//       title: title,
//       description: description,
//       tag: tag,
//       peopleNum: peopleNum,
//       startTime: startTime,
//       studyTime: studyTime,
//       breakTime: breakTime,
//       maxTerm: maxTerm,
//     });
//     console.log(moment(this.state.startTime).format("hh:mm a"));

//     this.setState({
//       title: "",
//       description: "",
//       tag: "",
//       peopleNum: 0,
//       startTime: moment(),
//       studyTime: 0,
//       breakTime: 0,
//       maxTerm: 0,
//     });
//   };

//   render() {
//     const {
//       title,
//       description,
//       tag,
//       peopleNum,
//       startTime,
//       studyTime,
//       breakTime,
//       maxTerm,
//     } = this.state;
//     return (
//       <div>
//         {/* <button onClick={this.goBack}>취소</button> */}
//         <img
//           src={require("../images/create_img.jpeg")}
//           alt=""
//           className="create_img"
//         />
//         <form onSubmit={this.handleSubmit} className="room_create_form">
//           <div>
//             TITLE &nbsp;
//             <Input
//               name="title"
//               onChange={this.handleChange}
//               value={title}
//               className="form_title"
//               variant="outlined"
//               color="secondary"
//             />
//           </div>

//           <div>
//             <br /> Description 공지 &nbsp;
//             <TextField
//               multiline
//               rows={3}
//               fullWidth
//               variant="outlined"
//               name="description"
//               onChange={this.handleChange}
//               value={description}
//               color="secondary"
//               className="form_desc"
//             />
//           </div>
//           <div>
//             <br />
//             Tag &nbsp;
//             {/* <InputLabel htmlFor="age-native-simple">Tag</InputLabel> */}
//             <Select
//               name="tag"
//               value={tag}
//               onChange={this.handleChange}
//               className="form_tag"
//               color="secondary"
//             >
//               <MenuItem value={"공무원"}>공무원 준비</MenuItem>
//               <MenuItem value={"ncs"}>NCS 준비</MenuItem>
//               <MenuItem value={"수능"}>수능 준비</MenuItem>
//             </Select>
//           </div>

//           <div>
//             <br />
//             People Number &nbsp; &nbsp;
//             <TextField
//               name="peopleNum"
//               type="number"
//               value={peopleNum}
//               onChange={this.handleChange}
//               margin="normal"
//               className="form_number"
//               color="secondary"
//             />
//           </div>
//           <div>
//             <br />
//             Start Time 시작시간 &nbsp; &nbsp;
//             <TimePicker
//               value={startTime}
//               onChange={this.handleChangeTime}
//               name="startTime"
//             />
//           </div>

//           <div>
//             <br />
//             StudyTime 공부시간 &nbsp; &nbsp;
//             <TextField
//               name="studyTime"
//               type="number"
//               value={studyTime}
//               onChange={this.handleChange}
//               margin="normal"
//               className="form_number"
//               color="secondary"
//             />
//           </div>
//           <div>
//             <br />
//             BreakTime 쉬는시간 &nbsp; &nbsp;
//             <TextField
//               name="breakTime"
//               type="number"
//               value={breakTime}
//               onChange={this.handleChange}
//               margin="normal"
//               className="form_number"
//               color="secondary"
//             />
//           </div>

//           <div>
//             <br />
//             Term 횟수 &nbsp; &nbsp;
//             <TextField
//               name="maxTerm"
//               type="number"
//               value={maxTerm}
//               onChange={this.handleChange}
//               margin="normal"
//               className="form_number"
//               color="secondary"
//             />
//           </div>
//           <Button variant="contained" color="secondary" type="submit">
//             등록
//           </Button>
//         </form>
//       </div>
//     );
//   }
// }

// export default RoomCreateForm;
