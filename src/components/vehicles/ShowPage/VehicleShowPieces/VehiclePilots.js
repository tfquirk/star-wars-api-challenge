import React from "react";

import { Link } from "react-router-dom";

const VehiclePilots = props => {
  // return a list of pilots to use in <ul></ul>
  const mapOverPilots = () => {
    // this was written to return the names of the pilots, and link to their
    // individual pages to show more detail
    if (props.pilots.length > 0) {
      return props.pilots.map(vehicle => {
        if (vehicle !== undefined) {
          return (
            <li key={vehicle.url}>
              <h3>
                <Link to={vehicle.url.substring(20)}>{vehicle.name}</Link>
              </h3>
            </li>
          );
        }
      });
    }
  };

  return (
    <div className="vehiclePilots">
      <h2>Pilot(s):</h2>
      {props.vehicle.pilots.length !== 0 ? (
        <ul>{mapOverPilots()}</ul>
      ) : (
        `${props.vehicle.name} does not have any pilots.`
      )}
    </div>
  );
};

export default VehiclePilots;
