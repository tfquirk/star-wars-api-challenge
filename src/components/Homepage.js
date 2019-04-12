import React, { Fragment } from "react";

import CharacterCards from "./characters/CharacterCards";
import PlanetCards from "./planets/PlanetCards";

// styling
import "../styles/Homepage.css";

const Homepage = () => {
  return (
    <Fragment>
      <div className="homepageContainer">
        <CharacterCards />
        <PlanetCards />
      </div>
    </Fragment>
  );
};

export default Homepage;
