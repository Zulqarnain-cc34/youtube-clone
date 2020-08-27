import React, { useState } from "react";
import "../Components Css/Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import Avatar from "@material-ui/core/Avatar";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Link } from "react-router-dom";
import ButtonBase from "@material-ui/core/ButtonBase";

function Header() {
  const [InputSearch, SetInputSearch] = useState("");
  return (
    <div className="header">
      <div className="header__left">
        <ButtonBase>
          <MenuIcon className="cursor header__menu" />
        </ButtonBase>

        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
            alt="Youtube"
          />
        </Link>
      </div>
      <div className="header__input">
        <input
          onChange={(e) => SetInputSearch(e.target.value)}
          value={InputSearch}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${InputSearch}`}>
          <SearchIcon className="header__inputbtn" />
        </Link>
      </div>
      <div className="header__icons">
        <VideoCallIcon className="header__icon cursor" />
        <AppsIcon className="header__icon cursor" />
        <NotificationsIcon className="header__icon cursor" />
        <Avatar
          className="cursor"
          src="https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg"
          alt="Mountain"
        />
      </div>
    </div>
  );
}

export default Header;
