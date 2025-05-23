import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import menu from './assets/menu_symbol.png';

const Navbar = () => {
  const location = useLocation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-title">DREW FITTON</div>
      <div className="navbar-container">
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          <img className="menu_dropdown" src={menu} alt="MENU"/>
        </button>
        <ul ref={dropdownRef} className={`navbar-list ${isDropdownOpen ? 'active' : ''}`}>
          <li className={`navbar-item ${location.pathname === '/about' ? 'active' : ''}`}>
            <Link to="/about">ABOUT</Link>
          </li>
          <li className={`navbar-item ${location.pathname === '/projects' ? 'active' : ''}`}>
            <Link to="/projects">PROJECTS</Link>
          </li>
          <li className="navbar-item">
            <a href="/AndrewFittonResume.pdf" target="_blank" rel="noopener noreferrer">
              RESUME
            </a>
          </li>
          {/* <li className={`navbar-item ${location.pathname === '/connect' ? 'active' : ''}`}>
            <Link to="/connect">CONNECT</Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
