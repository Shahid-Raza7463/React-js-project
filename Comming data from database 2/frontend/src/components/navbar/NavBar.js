import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ setCurrentPage }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" onClick={() => setCurrentPage('home')}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setCurrentPage('about')}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setCurrentPage('contact')}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
