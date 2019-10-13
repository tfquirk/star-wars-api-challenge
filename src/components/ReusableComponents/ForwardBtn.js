import React from "react";

// return a forward btn that will perform an action onClick
// this action is passed as a prop based on where the button is - for example,
// a ForwardBtn used by Characters on the homepage will make a new call to
// fetchCharacters from apis/CharacterApiCall
const ForwardBtn = props => {
  return (
    <button
      aria-label={`see more ${props.type}`}
      className="forwardBtn"
      onClick={props.action}
    >
      <i className="fas fa-caret-right fa-6x" />
    </button>
  );
};

export default ForwardBtn;
