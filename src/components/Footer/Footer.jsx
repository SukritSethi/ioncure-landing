import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className = "footer__wrapper">
      <div className="footer__main">
        <div className="footer__left">
          <div className="social__heading">Find us on:</div>
          <div className="social__links">
            <Link
              to="https://www.linkedin.com/company/ioncure-tech-pvt-ltd/"
              className="footer__link"
            >
              LinkedIn
            </Link>

            <Link
              to="https://www.instagram.com/ioncurerx?igsh=MTdlN25yemN4cWMzYQ=="
              className="footer__link"
            >
              Instagram
            </Link>
            <Link
              to="https://twitter.com/cure_ion?lang=en"
              className="footer__link"
            >
              Twitter
            </Link>
            <Link
              to="https://www.facebook.com/profile.php?id=100057245237815&mibextid=2JQ9oc"
              className="footer__link"
            >
              Facebook
            </Link>
          </div>
        </div>
        <div className="footer__right">
          For partnerships, inquiries, or collaboration opportunities, please
          contact us. <br />
          <br />
          <b>
          <Link
            to='#'
            onClick={(e) => {
                window.location.href = "mailto:contact@ioncurerx.com";
                e.preventDefault();
            }}
        >
            <p className="footer__email">contact@ioncurerx.com</p>
        </Link></b>
        </div>
      </div>
      <hr className="footer__hr"/>
    </div>
  );
};

export default Footer;
