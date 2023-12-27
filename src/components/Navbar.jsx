// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

// Import the image
import logo from '../assets/ioncure-logo.jpg';

const Navbar = () => {
  return (
    <nav>
      

      <div className='nav__main'>
        <img src={logo} alt="Logo" className='logo_img'/>
          <Link to="/">Home</Link>
    
          <Link to="/about">About</Link>
        
    
          <Link to="/contact">Contact</Link>
        
      </div>
    </nav>
  );
};

export default Navbar;
