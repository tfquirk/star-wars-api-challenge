import React from "react";

// return a card with planet information

const CharacterCard = props => {
  return (
    <div className="planetCard">
      <div className="planetImg">
        <img
          src="https://dummyimage.com/250x250/fff/aaa"
          alt="Star Wars Character"
        />
      </div>
      <div className="planetName">
        <h3>{props.character.name}</h3>
      </div>
    </div>
  );
};

export default CharacterCard;
