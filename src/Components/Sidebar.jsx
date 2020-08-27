import React from "react";
import "../Components Css/Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import SideBarRow from "./SideBarRow";
import whatshotIcon from "@material-ui/icons/Whatshot";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

function Sidebar() {
  return (
    <div class="sidebar">
      <SideBarRow selected Icon={HomeIcon} title="Home" />
      <SideBarRow Icon={whatshotIcon} title="Trending" />
      <SideBarRow Icon={SubscriptionsIcon} title="Subscriptions" />
      <hr />
      <SideBarRow Icon={VideoLibraryIcon} title="Library" />
      <SideBarRow Icon={HistoryIcon} title="History" />
      <SideBarRow Icon={OndemandVideoIcon} title="Your videos" />
      <SideBarRow Icon={WatchLaterIcon} title="Watch Later" />
      <SideBarRow Icon={ThumbUpAltOutlinedIcon} title="Liked Videos" />
      <SideBarRow Icon={ExpandMoreOutlinedIcon} title="Show More" />
    </div>
  );
}

export default Sidebar;
