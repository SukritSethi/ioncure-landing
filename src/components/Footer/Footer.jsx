import React from 'react'
import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer__main'>
      <div className="footer__left">
        <div className="social__heading">Find us on:</div>
        <div className="social__links">
            <Link to="https://www.linkedin.com/company/ioncure-tech-pvt-ltd/" className="link">
              LinkedIn
            </Link>

            <Link to="https://www.instagram.com/ioncurerx?igsh=MTdlN25yemN4cWMzYQ==" className="link">
              Instagram
            </Link>
            <Link to="https://twitter.com/cure_ion?lang=en" className="link">
              Twitter
            </Link>
            <Link to="https://www.facebook.com/profile.php?id=100057245237815&mibextid=2JQ9oc" className="link">
              Facebook
            </Link>
            
            
        </div>
      </div>
      <div className="footer__right">For partnerships, inquiries, or collaboration opportunities, please contact us. contact@ioncurerx.com
</div>
    
    </div>
  )
}

export default Footer