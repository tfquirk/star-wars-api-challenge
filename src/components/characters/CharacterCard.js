import React from "react";

// return a card with character information

const CharacterCard = props => {
  return (
    <div className="characterCard">
      <div className="characterImg">
        <img
          src="https://dummyimage.com/250x250/fff/aaa"
          alt="Star Wars Character"
        />
      </div>
      <div className="characterName">
        <h3>{props.character.name}</h3>
      </div>
    </div>
  );
};

export default CharacterCard;
