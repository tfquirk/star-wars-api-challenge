import React from "react";

// return a card with planet information

const PlanetCard = props => {
  return (
    <div className="planetCard">
      <div className="planetImg">
        <img
          src="https://dummyimage.com/250x250/fff/aaa"
          alt="Star Wars Planet"
        />
      </div>
      <div className="planetName">
        <h3>{props.planet.name}</h3>
      </div>
    </div>
  );
};

export default PlanetCard;
