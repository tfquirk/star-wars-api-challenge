import React from "react";
import styled from "styled-components";

// return a list of tags that will be displayed
// on the Person, Planet, or Vehicle pages
// or on their cards

const ColorfulTag = styled.div`
  border: 1px solid;
  border-radius: 4px;
  color: ${props => props.color};
  float: right;
  margin: 0.5vh;
  padding: 0.4vh;
`;

const Tag = props => {
  // TODO: WRITE A METHOD TO DELETE TAG ONCLICK

  return (
    <ColorfulTag color={props.tagColor} data-testid="TAG">
      <i className="fas fa-tag"> {props.tagName.toUpperCase()}</i>
    </ColorfulTag>
  );
};

export default Tag;
