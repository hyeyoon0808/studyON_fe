import React from "react";
import * as AiIcons from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";

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
];

export const MenuData = [
  {
    name: "Room",
    icon1: <BsFillPeopleFill />,
    cName1: "nav-text1",
  },
];
