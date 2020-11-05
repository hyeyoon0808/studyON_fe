import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import ButtonTemplate from "../../icon/view/ButtonTemplate";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "0.125rem 0.25rem",
        margin: "1.5rem auto",
        display: "flex",
        alignItems: "center",
        width: "fit-content",
    },
    paper: {
        width: 500,
        float: "left",
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        padding: "0.3rem 0.3rem",
        width: "85%",
    },
    iconButton: {
        float: "right",
        padding: 10,
    },
    text: {
        textDecoration: "none",
        color: "white",
    },
}));

export default function SearchBar(props) {
    const classes = useStyles();

    const { setRoomName, roomName, addRoomList, findMatches } = props;
    const searchRoom = (e) => {
        e.preventDefault();
        findMatches();
    };
    return (
        <div className={classes.root}>
            <Paper
                component="form"
                className={classes.paper}
                onSubmit={searchRoom}
            >
                <InputBase
                    value={roomName}
                    className={classes.input}
                    onChange={setRoomName}
                    placeholder="Search..."
                    inputProps={{ "aria-label": "search google maps" }}
                />
                <IconButton
                    className={classes.iconButton}
                    aria-label="search"
                    onClick={findMatches}
                >
                    <SearchIcon />
                </IconButton>
            </Paper>
            {/* 스토어 되는지 확인하는 코드, 눌렀을 때 roomList가 늘어나서 제대로 렌더링 되는지 */}
            {/* <button onClick={addRoomList}>테스트</button> */}
            {/* <Link to="/room-create" className={classes.text}>
                <ButtonTemplate text={"방 만들기"} />
            </Link> */}

            {/* 임시적으로 방 입장 버튼 만듬 */}
            {/* <Link to="/room-entrance" className={classes.text}>
                <ButtonTemplate text={"방 입장"} />
            </Link> */}
        </div>
    );
}
