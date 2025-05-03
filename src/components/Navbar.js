
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from './images/logo.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
     <div className="logo">
  <img src={logo} alt="LifeLink Logo" className="logo-img" />
  <span>LifeLink</span>
</div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/AboutUs" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/DonateBlood" onClick={() => setMenuOpen(false)}>Donate Blood</Link>
        {/* <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link> */}
        <Link to="/Signup" onClick={() => setMenuOpen(false)}>Sign Up</Link>
        <Link to="/Login" onClick={() => setMenuOpen(false)}>Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
