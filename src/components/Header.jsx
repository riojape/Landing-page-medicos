import React, { useState } from "react";
import logo from "../assets/medicina-general.svg";
import Navbar from "./Navbar";
import "../css/Header.css";
import menuIcon from "../assets/list.svg";
import { Icon } from "./styledComponents/Home";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const onMenuClick = () => {
    setMenu(!menu);
  };
  console.log(menu);
  return (
    <div className="header">
      <img src={logo} alt="logo" width="40px" />
      <div className="header-left">
        <Navbar menu={menu} />
      </div>
      <Icon
        url={menuIcon}
        size="30px"
        className="menu-icon"
        onClick={onMenuClick}
      ></Icon>
    </div>
  );
};

export default Header;
