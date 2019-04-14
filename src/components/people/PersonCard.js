import React from "react";

// return a card with planet information

const PersonCard = props => {
  return (
    <div className="personCard" onClick={() => console.log(props.person)}>
      <div className="personImg">
        <img
          src="https://dummyimage.com/250x250/fff/aaa"
          alt="Star Wars Character"
        />
      </div>
      <div className="personName">
        <h3>{props.person.name}</h3>
      </div>
    </div>
  );
};

export default PersonCard;
