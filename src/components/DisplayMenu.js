// src/components/DisplayMenu.js

import React, { useState } from 'react';
import './DisplayMenu.css';

function DisplayMenu({ onGroupChange, onOrderChange }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="display-menu">
      <button className="settings-button" onClick={toggleMenu}>
        <i className="icon-menu">&#9776;</i> {/* Hamburger menu icon */}
        <span>Display</span>
        <i className={`icon-arrow ${menuOpen ? 'open' : ''}`}>&#9660;</i> {/* Down arrow icon */}
      </button>

      {menuOpen && (
        <div className="menu-content">
          <div className="menu-option">
            <label>Grouping</label>
            <select onChange={(e) => onGroupChange(e.target.value)}>
              <option value="status">Status</option>
              <option value="userId">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="menu-option">
            <label>Ordering</label>
            <select onChange={(e) => onOrderChange(e.target.value)}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}

export default DisplayMenu;
