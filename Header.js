import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">THE POST</div>
      <ul className="nav-links">
        <li><Link to="/">Articles</Link></li>
        <li><Link to="/article">News Letter</Link></li>
        <li><Link to="/other">Other</Link></li>
        <li><Link to="/signup" className="sign-up-btn">Sign Up</Link></li>
      </ul>
    </header>
  );
};

export default Header;
