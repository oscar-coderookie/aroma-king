import React, { useState } from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import logoImg from "./../../assets/img/logo-blanco.png";
import { Slant as Hamburger } from "hamburger-react";
import marketIcon from "./../../assets/img/market-icon.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: "Home", url: "/" },
    { name: "About us", url: "/about" },
    { name: "Catalogue", url: "/catalogue" },
    { name: "Contact", url: "/contact"}
  ];

  return (
    <div className="header">
      <div className="header-block">
        <div className="header-menu">
          <Hamburger
            toggled={open}
            toggle={setOpen}
            easing="ease-in"
            rounded
            hideOutline={false}
            onClick={() => setOpen(!open)}
            color="#ffffff"
          ></Hamburger>
        </div>

        <img className="header-logo" src={logoImg} alt="logo-aroma-king" />
        <div className="header-icons">
          <span className="header-icons__language">EN</span>
          <img className="header-icons__market" src={marketIcon} />
        </div>
      </div>
      {open === false ? null : (
        <nav className="header-nav">
          <div className="header-nav__sections">
            {menuLinks.map((links, index)=>{
              return (
                <NavLink
              exact
              to={links.url}
              className="header-nav__links"
              onClick={() => setOpen(!open)}
            >
              {links.name}
            </NavLink>
              )
            })}
          </div>
          <div className="header-nav__social"></div>
        </nav>
      )}
    </div>
  );
};

export default Header;
