import React from "react";

// return a card with person information
const PersonCard = props => {
  const pushToPersonShow = () => {
    // if a user clicks on a card, push them to the show page for that card
    props.history.push(props.person.url.substring(20));
  };

  // return a card with and image and a name
  return (
    <div className="personCard" onClick={props.onClick || pushToPersonShow}>
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
