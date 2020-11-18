import React from "react";
import * as AiIcons from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsFillPersonLinesFill } from "react-icons/bs";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/About",
    icon: <AiIcons.AiFillBook />,
    cName: "nav-text",
  },
  {
    title: "Create Room",
    path: "/room-create",
    icon: <BsFillPeopleFill />,
    cName: "nav-text",
  },
  {
    title: "Room List",
    path: "/room-list",
    icon: <BsFillPersonLinesFill />,
    cName: "nav-text",
  },
];
