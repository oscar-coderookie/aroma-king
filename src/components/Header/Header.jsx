import React, { useState } from "react";
import "./Header.scss";
import logoImg from "./../../assets/img/logo-blanco.png";
import { Slant as Hamburger } from "hamburger-react";
import marketIcon from "./../../assets/img/market-icon.png";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="header-block">
      <Hamburger
        toggled={open}
        toggle={setOpen}
        easing="ease-in"
        rounded
        hideOutline={false}
        onClick={() => setOpen(!open)}
        color="#ffffff"
        className="header-menu"
      ></Hamburger>
      <img className="header-logo" src={logoImg} alt="logo-aroma-king" />
      <div className="header-icons">
        <span className="header-icons__language">EN</span>
        <img className="header-icons__market" src={marketIcon} />
      </div>
    </div>
  );
};

export default Header;
