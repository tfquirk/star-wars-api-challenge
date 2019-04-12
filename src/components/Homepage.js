import React, { Fragment } from "react";

import CharacterCards from "./characters/CharacterCards";

// styling
import "../styles/Homepage.css";

const Homepage = () => {
  return (
    <Fragment>
      <div className="homepageContainer">
        <CharacterCards />
      </div>
    </Fragment>
  );
};

export default Homepage;
