import React from "react";

// show page for an individual person

const Person = props => {
  return (
    <div className="personShowPage">
      <div className="personShowPage">
        <div className="personShowImg">
          <img
            src="https://dummyimage.com/250x250/fff/aaa"
            alt="Star Wars Character"
          />
        </div>
        <div className="personShowName">
          <h1>Name Here</h1>
        </div>
        <div className="personShowDetails">
          <h3>List of details here</h3>
        </div>
      </div>
    </div>
  );
};

export default Person;
