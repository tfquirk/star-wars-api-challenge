import React from "react";

import { Link } from "react-router-dom";

const PersonVehicles = props => {
  // return a list of vehicles to use in <ul></ul>
  const mapOverVehicles = () => {
    // this was written to return the names of the vehicles, and link to their
    // individual pages to show more detail
    if (props.vehicles.length > 0) {
      return props.vehicles.map(vehicle => {
        if (vehicle !== undefined) {
          return (
            <li key={vehicle.url}>
              <h3>
                <Link to={vehicle.url.substring(20)}>{vehicle.name}</Link>
              </h3>
            </li>
          );
        } else {
          return null;
        }
      });
    }
  };

  return (
    <div className="personVehicles">
      <h2>Vehicle(s):</h2>
      {props.person.vehicles.length !== 0 ? (
        <ul>{mapOverVehicles()}</ul>
      ) : (
        `${props.person.name} does not have any vehicles.`
      )}
    </div>
  );
};

export default PersonVehicles;
