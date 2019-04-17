import React from "react";

// import link to be able to push users to the people (character) homeworlds
import { Link } from "react-router-dom";

// displays a Person's homeword details and links to that homeword
const PersonHomeworld = props => {
  return (
    <div className="personHomewold">
      <h2>
        Homeworld:{" "}
        {props.homeworld && (
          <Link to={props.homeworld.url.substring(20)}>
            {props.homeworld.name}
          </Link>
        )}
      </h2>
      <h3>
        Terrain:{" "}
        {props.homeworld &&
          props.homeworld.terrain.charAt(0).toUpperCase() +
            props.homeworld.terrain.substring(1)}
      </h3>
      <h3>
        Climate:{" "}
        {props.homeworld &&
          props.homeworld.climate.charAt(0).toUpperCase() +
            props.homeworld.climate.substring(1)}
      </h3>
      <h3>Population: {props.homeworld && props.homeworld.population}</h3>
    </div>
  );
};

export default PersonHomeworld;
