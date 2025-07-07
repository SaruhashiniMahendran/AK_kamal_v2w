import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="AK Kamal Photography" className="logo-image" />
          <span>AK Kamal</span>
        </Link>
      </div>
      <div className="navbar-menu">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/gallery" className="nav-link">Gallery</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
