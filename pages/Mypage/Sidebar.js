import React from "react";
import Sidebarrow from "./Sidebarrow";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PlaylistAddOutlinedIcon from "@mui/icons-material/PlaylistAddOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";

function Sidebar() {
  return (
    <>
      <head>
        <link rel="stylesheet" type="text/css" href="/css/Sidebar.css" />
      </head>
      <body className="sidebarr">
        <div className="sidebar">
          <Sidebarrow Icon={HomeOutlinedIcon} title="خانه" />
          <Sidebarrow Icon={PlaylistAddOutlinedIcon} title="پیام ها" />
          <Sidebarrow Icon={DescriptionOutlinedIcon} title="سفارش ها" />
          <Sidebarrow Icon={MonetizationOnOutlinedIcon} title="موجودی" />
          <Sidebarrow Icon={PeopleAltOutlinedIcon} title="مخاطب ها" />
          <Sidebarrow Icon={LanguageOutlinedIcon} title="سرویس ها" />
        </div>
      </body>
    </>
  );
}

export default Sidebar;
