import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

import logo from "../../assets/ioncure-logo.jpg";

import "./Navbar.css";

const Navbar = () => {
  const [displayNavbar, setdisplayNavbar] = useState(false);
  useEffect(() => {
    console.log(displayNavbar);
  }, [displayNavbar]);

  return (
    <nav>
      <div className="nav__main">
        <Link to="/" className="logo_img">
          <img src={logo} alt="Logo" className="logo_img" />
        </Link>
        <div className="nav_right">
          <div className="nav_link">
            <Link to="/" className="link">
              Home
            </Link>

            <Link to="/about" className="link">
              About
            </Link>

            {/* <Link to="/contact" className="link">
              Contact
            </Link> */}
          </div>
          <div className="nav_youtubebtn">
            <Link
              className="link__to__youtube__link"
              to="https://www.amazon.com/s?k=%22ioncure+press%22&crid=3FIGH1YDS23UA&sprefix=ioncure+press+%2Caps%2C465&ref=nb_sb_noss"
            >
              Books by Ioncure
            </Link>
          </div>
        </div>
      </div>
      <div className="nav__main__mobile">
        <img src={logo} alt="Logo" className="logo_img" />
        <div
          className="nav__main__mobile__right"
          onClick={() => setdisplayNavbar(!displayNavbar)}
        >
          <RxHamburgerMenu />
        </div>
      </div>
      <div
        className={`nav__mobile__display ${displayNavbar ? "show" : "hide"}`}
      >
        <div className="nav__mobile__links">
          <Link
            to="/"
            onClick={() => setdisplayNavbar(false)}
            className="link link__mobile"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => setdisplayNavbar(false)}
            className="link link__mobile"
          >
            About
          </Link>
          {/* 
            <Link to="/contact" onClick={()=>setdisplayNavbar(false)} className="link link__mobile">
              Contact
            </Link> */}

          <div className="link_to_youtube">
            <Link
              className="link__to__youtube__link"
              to="https://www.amazon.com/s?k=%22ioncure+press%22&crid=3FIGH1YDS23UA&sprefix=ioncure+press+%2Caps%2C465&ref=nb_sb_noss"
            >
              Books by Ioncure
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
