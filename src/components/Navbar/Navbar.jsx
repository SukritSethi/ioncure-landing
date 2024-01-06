import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

import logo from "../../assets/ioncure-logo.jpg";

import "./Navbar.css";

const Navbar = () => {
  const [displayNavbar, setdisplayNavbar] = useState(false);
  useEffect(() => {
    console.log(displayNavbar);
  }, [displayNavbar])
  


  return (
    <nav>
      <div className="nav__main">
        <img src={logo} alt="Logo" className="logo_img" />
        <div className="nav_right">
          <div className="nav_link">
            <Link to="/" className="link">
              Home
            </Link>

            <Link to="/about" className="link">
              About
            </Link>

            <Link to="/contact" className="link">
              Contact
            </Link>
          </div>
          <div className="nav_youtubebtn">Documentaries</div>
        </div>
      </div>
      <div className="nav__main__mobile">
        <img src={logo} alt="Logo" className="logo_img" />
        <div className="nav__main__mobile__right" onClick={()=>setdisplayNavbar(!displayNavbar)}>
          <RxHamburgerMenu />
        </div>
      </div>
        <div className={`nav__mobile__display ${displayNavbar?'show':'hide'}`}>
          <div className="nav__mobile__links">
            <Link to="/" onClick={()=>setdisplayNavbar(false)} className="link link__mobile">
              Home
            </Link>

            <Link to="/about" onClick={()=>setdisplayNavbar(false)} className="link link__mobile">
              About
            </Link>

            <Link to="/contact" onClick={()=>setdisplayNavbar(false)} className="link link__mobile">
              Contact
            </Link>

            <div className="link_to_youtube">Documentaries</div>
          </div>

        </div>
    </nav>
  );
};

export default Navbar;
