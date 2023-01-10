import React from "react";
import "./Footer.scss";
import logoImg from "./../../assets/img/logo-blanco.png";

const Footer = () => {
  return (
    <div className="footer-block">
      <div className="footer-block__info">
        <img
          className="footer-block__logo"
          src={logoImg}
          alt="logo-aromaking"
        />
        <div className="footer-block__section2">
          <p>INFO@AROMAKING.COM AROMAKING SPAIN OFFICIAL STORE.</p>
          <p>Customer service hours: From Monday to Saturday: 09:00 to 19:00</p>
        </div>
      </div>
    <div className="footer-block__menu">
    <ul className="footer-block__list">
        <li className="footer-block__items">Terms and Conditions of Use</li>
        <li className="footer-block__items">Return Policy</li>
        <li className="footer-block__items">Distributors</li>
        <li className="footer-block__items">Terms of Service</li>
        <li className="footer-block__items">Refund Policy</li>
      </ul>
      <ul className="footer-block__list">
        <li className="footer-block__items">Locate My Order</li>
        <li className="footer-block__items">Shipping</li>
        <li className="footer-block__items">Contact</li>
        <li className="footer-block__items">Legal Notice</li>
        <li className="footer-block__items">Privacy Policy</li>
      </ul>
    </div>
    </div>
      
  );
};

export default Footer;
