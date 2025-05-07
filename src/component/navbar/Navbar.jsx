import React, { useState } from 'react';
import './Navbar.css';
import serverLogo from '../../assets/stonex-logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="left-sec">
        <Link to="/">
          <img src={serverLogo} alt="StoneX Logo" className="serverlogo" />
        </Link>
      </div>
      <div className="right-sec">
        <div className="menu-icon" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link to="/products" onClick={() => setIsMenuOpen(false)}>Products</Link></li>
          <li><Link to="/faq" onClick={() => setIsMenuOpen(false)}>FAQ</Link></li>
          <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;