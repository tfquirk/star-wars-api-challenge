import React from "react";

// connect to Redux state
import { connect } from "react-redux";

// use react router for navigation links
import { NavLink } from "react-router-dom";

// styling
// import "../styles/Navbar.css";

const NavBar = props => {
  return (
    <div className="nav">
      <a href="/">
        <img
          className="navLogo"
          src="/images/sww_log.png"
          alt="Star Wars Wiki Logo"
        />
      </a>
      <div className="links">
        <ul>
          <NavLink className="navLink" to="/history">
            MY VISIT LOG
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
