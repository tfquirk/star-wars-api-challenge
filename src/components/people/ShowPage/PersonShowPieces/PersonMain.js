import React from "react";

const PersonMain = props => {
  return (
    <div className="personShowPageMain">
      <div className="personShowImg">
        <img
          src="https://dummyimage.com/250x250/fff/aaa"
          alt="Star Wars Character"
        />
      </div>
      <div className="displayBlock">
        <div className="personShowName">
          <h1>{props.person.name}</h1>
        </div>
        <div className="personShowDetails">
          <h3>
            Hair color:{" "}
            {props.person.hair_color.charAt(0).toUpperCase() +
              props.person.hair_color.substring(1)}
          </h3>
          <h3>
            Eye color:{" "}
            {props.person.eye_color.charAt(0).toUpperCase() +
              props.person.eye_color.substring(1)}
          </h3>
          <h3>Height: {props.person.height}</h3>
          <h3>
            Gender:{" "}
            {props.person.gender.charAt(0).toUpperCase() +
              props.person.gender.substring(1)}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default PersonMain;
