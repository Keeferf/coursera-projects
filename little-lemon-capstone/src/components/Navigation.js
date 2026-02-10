import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  // State to manage mobile menu open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle function for mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navigation">
      <div className="container nav-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src="/logo.svg" alt="Little Lemon" className="logo-img" />
        </Link>

        {/* Mobile Menu Toggle Button (Hamburger) */}
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/menu" onClick={() => setIsMenuOpen(false)}>
              Menu
            </Link>
          </li>
          <li>
            <Link to="/reservations" onClick={() => setIsMenuOpen(false)}>
              Reservations
            </Link>
          </li>
          <li>
            <Link to="/order-online" onClick={() => setIsMenuOpen(false)}>
              Order Online
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={() => setIsMenuOpen(false)}>
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
