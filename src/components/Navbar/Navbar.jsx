import React from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

import logo from "../../assets/ioncure-logo.jpg";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav__main">
        <img src={logo} alt="Logo" className="logo_img" />
        <div className="nav_left">
          <div className="nav_link">
            <Link to="/" className="link">Home</Link>

            <Link to="/about" className="link">About</Link>

            <Link to="/contact" className="link">Contact</Link>
          </div>
          <div className="nav_youtubebtn">
            Documentaries
          </div>
        </div>
      </div>
      <div className="nav__main__mobile">
        <img src={logo} alt="Logo" className="logo_img" />
        <div className="nav__main__mobile__right"><RxHamburgerMenu/></div>
        
      </div>
    </nav>
  );
};

export default Navbar;
