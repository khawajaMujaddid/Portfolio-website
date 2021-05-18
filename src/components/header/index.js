import React, { useState } from "react";
import "../../styles/header.scss";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";
import { GiSemiClosedEye } from "react-icons/gi";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <GiSemiClosedEye className="logo" />
        </div>
        <ul className={click ? "nav_options active" : "nav_options"}>
          <li className="option" onClick={closeMobileMenu}>
            <a>HOME</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a>ABOUT</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a>PORTFOLIO</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a>BLOG</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a>CONTACT</a>
          </li>
        </ul>
      </div>

      <div className="mobile_menu" onClick={handleClick}>
        {click ? (
          <span className="menu_icon">
            <AiOutlineCloseCircle />
          </span>
        ) : (
          <span className="menu_icon">
            <AiOutlineMenu />
          </span>
        )}
      </div>
    </div>
  );
};

export default NavBar;
