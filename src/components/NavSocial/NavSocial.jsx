import React from "react";
import './NavSocial.scss';
import { FaFacebook, FaInstagram } from "react-icons/fa";

const NavSocial = () => {
  return (
    <div className="nav__social">
      <a
        href="https://www.facebook.com/people/Aromaking/100071145034911/?hc_ref=ART-TMhQDEpo8UoQsU_IVLUJ6y-XjqMXKBfM8h35ZJa0kvnSoWOWxGzBMqmpTW3bwkU&fref=nf&__xts__[0]=68.ARBwduOPWr4tOUOsMaWpZ5xHnjbgTTvd04GL3mGLHJIOaLG7gcOwUttB1Q7LofGtv9ph0yot1ej3RXph0-0_Cr5sUwotXjzcYHcYtXnYPJ0U7GzVIh__F0_UoB_aOGUfq7GtGsldSDymYmKEFkSZgK6tcBAsN7XLiT0W3-MW-nGRhmr4em9WKAIs5COF4RAetpCYwT64ZsJVlLwGyD5xuFKQQ_xyGDzMBBJgi2cmx6vjwbJx-YezXfTJpTG9tvVpkzGUQ0SpHhSr7u8Yt4Lh1ES-B-q5GZRSng1nEDnosKAPiFaH0fo"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebook className="nav__icons" />
      </a>

      <a
        href="https://www.instagram.com/aromaking.spain/?hl=es"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram className="nav__icons" />
      </a>
    </div>
  );
};

export default NavSocial;
