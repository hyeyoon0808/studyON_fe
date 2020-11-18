import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData, MenuData } from "./SidebarData";
import "../../scss/Navbar.scss";
import { IconContext } from "react-icons";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '10%',
    maxWidth: 30,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClick = (e) => {
    setOpen(!open);
    e.stopPropagation()
  }

  return (
    <>
      <IconContext.Provider value={{ color: "black" }}>
        <div className="navbar">
          <div className="menu-bars" onClick={showSidebar}>
            <FaIcons.FaBars />
            <p className="menu-bars_title">MENU</p>
          </div>
        </div>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars-x">
                <AiIcons.AiOutlineClose style={{ color: "black" }} />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className="nav_title">{item.title}</span>
                  </Link>
                </li>
              );
            })}
            {MenuData.map((MenuData, index1) => {
              return (
                <div>
                  <div key={index1} className={MenuData.cName1} onClick={(e) => handleClick(e)}>
                    <div className="aa">
                      {MenuData.icon1}
                      <span style={{ margin: '16px' }}>{MenuData.name}</span>
                    </div>
                    {/* {open ? <ExpandLess /> : <ExpandMore />} */}
                  </div>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <Link to="/room-create">
                        <ListItem button className={classes.nested}>
                          <ListItemText primary="Create" style={{ color: 'black' }} />
                        </ListItem>
                      </Link>
                    </List>
                    <List component="div" disablePadding>
                      <Link to="/room-list">
                        <ListItem button className={classes.nested}>
                          <ListItemText primary="Search" style={{ color: 'black' }} />
                        </ListItem>
                      </Link>
                    </List>
                  </Collapse>
                </div>
              )
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
