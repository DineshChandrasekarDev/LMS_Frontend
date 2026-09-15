import React from "react";
import {
  FaBars,
  FaBell,
  FaSearch,
  FaChevronDown
} from "react-icons/fa";
import "../css/layouts/Header.css"
const Header = () => {
  return (
    <div className="header-container">
      {/* Left */}
      <div className="header-left">
        <FaBars className="menu-icon" />

        <h3>
          Welcome back, Dinesh <span>👋</span>
        </h3>
      </div>

      {/* Right */}
      <div className="header-right">

        <div className="search-box">
          <input
            type="text"
            placeholder="Search for courses, topics..."
          />
          <FaSearch />
        </div>

        <div className="notification">
          <FaBell />
          <span className="badge">3</span>
        </div>

        <div className="profile-section">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
          />

          <span>Dinesh</span>

          <FaChevronDown />
        </div>

      </div>
    </div>
  );
};

export default Header;