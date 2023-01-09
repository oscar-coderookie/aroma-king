import React, { useState } from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import logoImg from "./../../assets/img/logo-blanco.png";
import { Slant as Hamburger } from "hamburger-react";
import marketIcon from "./../../assets/img/market-icon.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  const [open, setOpen] = useState(false);
  const ubication = window.location.pathname;

  const menuLinks = [
    { name: "About us", url: "/about" },
    { name: "Contact", url: "/contact" },
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
          <NavLink className="header-nav__icons" to="/shop-cart">
            <img
              className="header-icons__market"
              src={marketIcon}
              alt="market-icon"
            />
          </NavLink>
        </div>
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
          <div className="header-nav__social">
            <a
              href="https://www.facebook.com/people/Aromaking/100071145034911/?hc_ref=ART-TMhQDEpo8UoQsU_IVLUJ6y-XjqMXKBfM8h35ZJa0kvnSoWOWxGzBMqmpTW3bwkU&fref=nf&__xts__[0]=68.ARBwduOPWr4tOUOsMaWpZ5xHnjbgTTvd04GL3mGLHJIOaLG7gcOwUttB1Q7LofGtv9ph0yot1ej3RXph0-0_Cr5sUwotXjzcYHcYtXnYPJ0U7GzVIh__F0_UoB_aOGUfq7GtGsldSDymYmKEFkSZgK6tcBAsN7XLiT0W3-MW-nGRhmr4em9WKAIs5COF4RAetpCYwT64ZsJVlLwGyD5xuFKQQ_xyGDzMBBJgi2cmx6vjwbJx-YezXfTJpTG9tvVpkzGUQ0SpHhSr7u8Yt4Lh1ES-B-q5GZRSng1nEDnosKAPiFaH0fo"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook className="header-nav__icons" />
            </a>

            <a
              href="https://www.instagram.com/aromaking.spain/?hl=es"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="header-nav__icons" />
            </a>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Header;
