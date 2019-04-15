import React from "react";

const PersonMain = props => {
  return (
    <div className="planetShowPageMain">
      <div className="planetShowImg">
        <img
          src="https://dummyimage.com/250x250/fff/aaa"
          alt="Star Wars Planet"
        />
      </div>
      <div className="displayBlock">
        <div className="planetShowName">
          <h1>{props.planet.name}</h1>
        </div>
        <div className="planetShowDetails">
          <h3>
            Climate:{" "}
            {props.planet.climate.charAt(0).toUpperCase() +
              props.planet.climate.substring(1)}
          </h3>
          <h3>
            Diameter:{" "}
            {props.planet.diameter.charAt(0).toUpperCase() +
              props.planet.diameter.substring(1)}
          </h3>
          <h3>Gravity: {props.planet.gravity}</h3>
          <h3>
            Terrain:{" "}
            {props.planet.terrain.charAt(0).toUpperCase() +
              props.planet.terrain.substring(1)}
          </h3>
          <h3>
            Surface water:{" "}
            {props.planet.surface_water.charAt(0).toUpperCase() +
              props.planet.surface_water.substring(1)}
          </h3>
          <h3>
            Population:{" "}
            {props.planet.population.charAt(0).toUpperCase() +
              props.planet.population.substring(1)}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default PersonMain;