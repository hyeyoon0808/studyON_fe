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

const RoomCreateForm = (props) => {
    const { mySocket, room, onAddRoom, onSetRoom } = props;
    const [tagName, setTagName] = React.useState([]);

    const handleChange = (event) => {
        setTagName(event.target.value);
        onSetRoom("tag", event.target.value.toString());
    };
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
                        // value={room.tag}
                        onChange={handleChange}
                        // onChange={(e) => onSetRoom("tag", e.target.value)}
                        className="form_tag"
                        color="secondary"
                        multiple
                        value={tagName}
                        renderValue={(selected) => (
                            <div className="chips">
                                {selected.map((value) => (
                                    <Chip
                                        key={value}
                                        label={value}
                                        className="chip"
                                    />
                                ))}
                            </div>
                        )}
                    >
                        {tagData.map((tag) => (
                            <MenuItem
                                key={tag.id}
                                value={tag.title}
                                // style={getStyles(name, personName, theme)}
                            >
                                {tag.title}
                            </MenuItem>
                        ))}
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
                    <Link to={`/room-entrance/${mySocket.id}`}>등록</Link>
                </Button>
            </form>
        </div>
    );
};

export default RoomCreateForm;
