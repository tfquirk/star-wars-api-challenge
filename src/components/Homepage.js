import React from "react";

import CharacterCards from "./characters/CharacterCards";
import PlanetCards from "./planets/PlanetCards";

// generalized styling for html, movementContainer and buttons
import "../styles/Homepage/Homepage.css";

const Homepage = () => {
  return (
    <div className="homepageContainer">
      <CharacterCards />
      <PlanetCards />
    </div>
  );
};

export default Homepage;
