import React from "react";

// use react router for navigation links
import { NavLink } from "react-router-dom";

// styling
import "../styles/NavBar.css";

const NavBar = props => {
  return (
    <div className="nav">
      <a href="/">
        <img
          className="navLogo"
          src="http://localhost:3000/images/sww_logo.png"
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
