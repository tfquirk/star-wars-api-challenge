import React from "react";
import styled from "styled-components";

const Forward = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  margin: auto 0;
  padding: 25vh 16px;

  &:hover {
    color: #ff3e43;
  }
`;

// return a forward btn that will perform an action onClick
// this action is passed as a prop based on where the button is - for example,
// a ForwardBtn used by Characters on the homepage will make a new call to
// fetchCharacters from apis/CharacterApiCall
const ForwardBtn = props => {
  return (
    <Forward aria-label={`see more ${props.type}`} onClick={props.action}>
      <i className="fas fa-caret-right fa-6x" />
    </Forward>
  );
};

export default ForwardBtn;
