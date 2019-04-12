import React, { Fragment } from "react";

import CharacterCards from "./characters/CharacterCards";

// styling
import "../styles/Homepage.css";

const Homepage = () => {
  return (
    <Fragment>
      <div className="stars">
        <div className="twinkling">
          <div className="clouds">
            <CharacterCards />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Homepage;
