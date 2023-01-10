import React, { useState } from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import logoImg from "./../../assets/img/logo-blanco.png";
import { Slant as Hamburger } from "hamburger-react";
import marketIcon from "./../../assets/img/market-icon-white.png";
import SearchBar from "../SearchBar/SearchBar";
import NavSocial from "../NavSocial/NavSocial";

const Header = () => {
  const [open, setOpen] = useState(false);
  const ubication = window.location.pathname;

  const menuLinks = [
    { name: "About us", url: "/about" },
    { name: "Contact", url: "/contact" },
    { name: "Dealers", url:"/dealers"}
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

        <NavLink className="header-nav__icons" to="/shop-cart">
          <img
            className="header-icons__market"
            src={marketIcon}
            alt="market-icon"
          />
        </NavLink>
      </div>
      {open === false ? null : (
        <nav className="header-nav">
          <SearchBar />
          <div className="header-nav__sections">
            {ubication === "/" ? null : (
              <NavLink
                to="/"
                className="header-nav__links"
                onClick={() => setOpen(!open)}
              >
                Home
              </NavLink>
            )}
            <p className="header__submenu__title">Catalogue:</p>
            <ul className="header__submenu">
              <NavLink
                to="/catalogue/big-puffs"
                className="header__submenu__links"
                onClick={() => setOpen(!open)}
              >
                Big puffs
              </NavLink>
              <NavLink
                to="/catalogue/tpd"
                className="header__submenu__links"
                onClick={() => setOpen(!open)}
              >
                TPD
              </NavLink>
            </ul>
            {menuLinks.map((links, index) => {
              return (
                <NavLink
                  key={index}
                  to={links.url}
                  className="header-nav__links"
                  onClick={() => setOpen(!open)}
                >
                  {links.name}
                </NavLink>
              );
            })}
          </div>
         <NavSocial/>
        </nav>
      )}
    </div>
  );
};

export default Header;
