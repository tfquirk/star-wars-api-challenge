import React from "react";

// return a back btn that will perform an action onClick
// this action is passed as a prop based on where the button is - for example,
// a ForwardBtn used by Characters on the homepage will make a new call to
// fetchCharacters from apis/CharacterApiCall
const BackBtn = props => {
  return (
    <button
      aria-label={`see previous ${props.type}`}
      className="backBtn"
      onClick={() => props.action()}
    >
      <i className="fas fa-caret-left fa-6x" />
    </button>
  );
};

export default BackBtn;
