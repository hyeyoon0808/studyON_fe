import React, { Component, useState, useEffect } from "react";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TimePicker from "../Container/TimePicker";
import "../scss/roomCreate.scss";
import { Link } from "react-router-dom";

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
                        // name="description"
                        onChange={(e) =>
                            onSetRoom("description", e.target.value)
                        }
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
                        <MenuItem value={"취준"}>취업 준비</MenuItem>
                        <MenuItem value={"토익"}>토익</MenuItem>
                        <MenuItem value={"공무원"}>공무원 준비</MenuItem>
                        <MenuItem value={"코딩"}>코딩 연습</MenuItem>
                        <MenuItem value={"기술사"}>기술사 준비</MenuItem>
                        <MenuItem value={"자격증"}>자격증 공부</MenuItem>
                        <MenuItem value={"수능"}>수능 공부</MenuItem>
                        <MenuItem value={"고시"}>고시 준비</MenuItem>
                        <MenuItem value={"오프라인"}>오프라인</MenuItem>
                    </Select>
                </div>

                <div>
                    <br />
                    People Number &nbsp; &nbsp;
                    <TextField
                        //name="maxPeopleNum"
                        type="number"
                        value={room.maxPeopleNum}
                        onChange={(e) =>
                            onSetRoom("maxPeopleNum", e.target.value)
                        }
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
