import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
//import { tileData } from "../tileData.json";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import ButtonTemplate from "../../icon/view/ButtonTemplate";

const UseStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: "100%",
        padding: "0 5rem 0 5rem",
        // height: 450,
    },
    icon: {
        color: "rgba(255, 255, 255, 0.54)",
    },
    img: {
        width: "252px",
        position: "absolute",
        top: "-60px",
    },
}));

export default function RoomListView(props) {
    const classes = UseStyles();
    const { rooms, room, setRoom } = props;

    const [open, setOpen] = useState(false);
    const handleClickOpen = (owner) => {
        setOpen(true);
        setRoom(owner);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <GridList cols={5} cellHeight={180} className={classes.gridList}>
                {rooms?.map((room) => {
                    return (
                        <GridListTile
                            key={room.owner}
                            onClick={() => handleClickOpen(room.owner)}
                        >
                            <img
                                src={require("../../home/images/studyon.png")}
                                alt=""
                                className={classes.img}
                            />
                            <GridListTileBar
                                title={room.title}
                                subtitle={<span># {room.tag}</span>}
                                actionIcon={
                                    <IconButton
                                        aria-label={`info about ${room.title}`}
                                        className={classes.icon}
                                    >
                                        <InfoIcon />
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    );
                })}
            </GridList>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means
                        sending anonymous location data to Google, even when no
                        apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Link to={`/room-entrance/${room.owner}`}>
                        <ButtonTemplate text={"방 입장"} />
                    </Link>
                </DialogActions>
            </Dialog>
        </div>
    );
}
