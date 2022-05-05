import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

import * as SiIcons from "react-icons/si";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/Main/dashboard",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Cryptocurrencies",
    path: "/Main/Cryptocurrencies",
    icon: <SiIcons.SiBitcoinsv />,
    cName: "nav-text",
  },
  {
    title: "Favorites",
    path: "/Main/Favorites",
    icon: <MdIcons.MdFavorite />,
    cName: "nav-text",
  },
  {
    title: "News",
    path: "/Main/News",
    icon: <FaIcons.FaRegNewspaper />,
    cName: "nav-text",
  },
  {
    title: "Logout",
    path: "/",
    icon: <IoIcons.IoMdLogOut />,
    cName: "nav-text",
  },
];
