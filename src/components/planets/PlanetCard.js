import React from "react";

// return a card with planet information

const PlanetCard = props => {
  const pushToPlanetShow = () => {
    // if a user clicks on a card, push them to the show page for that card
    props.history.push(props.planet.url.substring(20));
  };

  // return a card with and image and a name
  return (
    <div className="planetCard" onClick={pushToPlanetShow}>
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
