import React, { useState } from "react";
import "./Header.scss";
import { useAuth } from "../../context/AuthContext";
import { NavLink } from "react-router-dom";
import logoImg from "./../../assets/img/logo-blanco.png";
import dealersLogo from './../../assets/img/dealers-logo.png';
import { Slant as Hamburger } from "hamburger-react";
import marketIcon from "./../../assets/img/market-icon-white.png";
import NavSocial from "../NavSocial/NavSocial";

const Header = () => {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const ubication = window.location.pathname;

  const menuLinks = [
    { name: "About us", url: "/about" },
    { name: "Contact", url: "/contact" },
    { name: "Dealers", url: "/dealers" }
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

        {ubication === '/dealers' ? <img className="header-logo" src={dealersLogo} alt="logo-aroma-king" /> : <img className="header-logo" src={logoImg} alt="logo-aroma-king" />}


        <div className="right-bar">
          {user ? (
            <span className="header-nav__icons" onClick={logout}>
              <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73.18 81.84"fill="white" width={30}>
                <path d="M25.88,81.84c-2.34-.49-4.28-1.82-6.3-2.98-4.98-2.87-9.95-5.75-14.93-8.62C1.56,68.46,.01,65.77,0,62.23,0,44.56,0,26.9,0,9.24,.01,3.88,3.89,0,9.23,0c13.11,0,26.21,0,39.32,0,5.36,0,9.23,3.85,9.26,9.2,.02,3.54,0,7.09,0,10.63,0,1.94-1.21,3.3-2.93,3.31-1.72,.01-2.95-1.35-2.95-3.28,0-3.54,0-7.09,0-10.63,0-2.12-1.2-3.35-3.3-3.35-11.27,0-22.54,0-33.81,0-.2,0-.39,.03-.8,.06,1.37,.79,2.55,1.48,3.74,2.17,4.45,2.57,8.88,5.16,13.35,7.7,3.29,1.87,4.89,4.64,4.88,8.44-.03,12.52-.01,25.04-.01,37.56v1.11c.34,.02,.62,.04,.9,.04,3.84,0,7.67,0,11.51,0,2.34,0,3.54-1.2,3.54-3.53,0-3.04,0-6.07,0-9.11,0-1.89,1.19-3.21,2.89-3.24,1.73-.03,2.98,1.31,2.98,3.24,0,3.12,.02,6.23,0,9.35-.04,5.13-3.65,8.94-8.76,9.1-3.99,.12-7.99,.04-11.99,.04-.32,0-.63,0-1.08,0,0,.38,0,.68,0,.99-.03,1.52,.1,3.06-.13,4.55-.56,3.75-3.33,6.53-7.07,7.34-.17,.04-.34,.11-.51,.17h-2.4Z" />
                <path d="M63.02,31.27c-.97-.95-1.95-1.89-2.9-2.85-1.32-1.32-1.38-3.14-.17-4.33,1.2-1.18,2.98-1.13,4.28,.16,2.66,2.65,5.32,5.3,7.96,7.97,1.33,1.35,1.32,3.04-.03,4.39-2.65,2.66-5.3,5.32-7.97,7.97-1.29,1.28-3.09,1.31-4.27,.11-1.18-1.19-1.12-2.98,.16-4.28,.91-.93,1.84-1.85,2.76-2.78,.04-.04,.06-.09,.19-.3h-.98c-6.66,0-13.32,0-19.97,0-.5,0-1.02-.03-1.5-.18-1.37-.43-2.15-1.81-1.92-3.28,.22-1.36,1.41-2.38,2.89-2.38,5.3-.02,10.6,0,15.9,0,1.83,0,3.66,0,5.49,0,.03-.07,.06-.14,.09-.21Z" />
              </svg>
            </span>
          ) : (
            <NavLink className="header-nav__icons" to="/login">
              <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 77.31 77.3" fill="white" width={30}>
                <path d="M77.29,6.28c-.05-1.65-.66-3.08-1.81-4.27C73.91,.37,71.92,0,69.76,0c-11.5,.02-23,0-34.49,.02-4.26,0-8.16,2.97-9.1,7.13-.42,1.86-.33,3.84-.36,5.77-.02,1.83,1.45,3.22,3.21,3.2,1.75-.02,3.12-1.38,3.17-3.18,.03-.98,0-1.96,.01-2.94,.02-2.22,1.3-3.53,3.51-3.53,4.55,0,9.11,0,13.66,0,.18,0,.36,.03,.73,.07-3.72,1.3-5.04,3.85-5.02,7.5,.07,15.37,.03,30.74,.03,46.11v1c-.31,.02-.54,.04-.76,.04-2.87,0-5.74,0-8.6,0-2.25,0-3.54-1.3-3.55-3.57,0-1.91,0-3.82,0-5.74,0-.4-.01-.81-.11-1.19-.4-1.52-1.88-2.51-3.43-2.35-1.58,.17-2.82,1.47-2.85,3.1-.04,2.16-.03,4.33-.01,6.49,.05,5.52,4.27,9.7,9.8,9.72,2.89,0,5.79,0,8.68,0,.26,0,.53,0,.85,0,0,1.25-.03,2.38,0,3.5,.07,2.01,.91,3.68,2.55,4.81,.86,.6,1.93,.9,2.9,1.34h1.96c.5-.16,1-.3,1.49-.47,6.12-2.04,12.25-4.08,18.37-6.13,3.33-1.11,4.9-3.31,4.9-6.84,0-17.94,0-35.87,0-53.81,0-1.26,.02-2.52-.01-3.77Z" />
                <path d="M34.22,29.67c-4.11-4.11-8.21-8.22-12.32-12.32-1.22-1.22-2.51-1.56-3.82-.97-1.43,.64-1.98,1.81-1.97,3.34,.03,2.82,0,5.63,0,8.45v.82h-.95c-3.72,0-7.45,.05-11.17-.02-1.99-.04-3.34,.68-3.99,2.59v1.36c.7,1.93,2.12,2.59,4.11,2.55,3.7-.08,7.39-.02,11.09-.02,.29,0,.58,.03,.91,.05v.91c0,2.74,0,5.48,0,8.22,0,.45,0,.92,.12,1.34,.68,2.43,3.61,3.12,5.48,1.27,4.18-4.15,8.33-8.32,12.49-12.48,1.64-1.64,1.64-3.45,0-5.08Z" />
              </svg>
            </NavLink>
          )
          }
          <NavLink className="header-nav__icons" to="/shop-cart">
            <img
              className="header-icons__market"
              src={marketIcon}
              alt="market-icon"
            />
          </NavLink>
        </div>
      </div>

      <nav className={`header-nav ${!open ? 'slide-in' : 'slide-out'}`}>
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
          <p className="header__submenu__title">Products:</p>
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
        <NavSocial />
      </nav>

    </div>
  );
};

export default Header;
