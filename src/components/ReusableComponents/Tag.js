import React from "react";

// return a list of tags that will be displayed
// on the Person, Planet, or Vehicle pages
// or on their cards

const Tag = props => {
  // TODO: WRITE A METHOD TO DELETE TAG ONCLICK

  return (
    <div className={`tag ${props.tagColor}`}>
      <i className="fas fa-tag"> {props.tagName.toUpperCase()}</i>
    </div>
  );
};

export default Tag;
