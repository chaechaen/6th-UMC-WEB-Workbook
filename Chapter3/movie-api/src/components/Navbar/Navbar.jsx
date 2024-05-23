// Navbar.jsx

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  // 현재 경로를 가져옴
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">UMC Movie</Link>
      <ul className="navbar-menu">
        <li>
          <Link to="/login" className={location.pathname === '/login' ? 'selected' : ''}>Login</Link>
        </li>
        <li>
          <Link to="/popular" className={location.pathname === '/popular' ? 'selected' : ''}>Popular</Link>
        </li>
        <li>
          <Link to="/now-playing" className={location.pathname === '/now-playing' ? 'selected' : ''}>Now Playing</Link>
        </li>
        <li>
          <Link to="/top-rated" className={location.pathname === '/top-rated' ? 'selected' : ''}>Top Rated</Link>
        </li>
        <li>
          <Link to="/upcoming" className={location.pathname === '/upcoming' ? 'selected' : ''}>Up Coming</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
