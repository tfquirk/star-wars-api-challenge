import React from "react";

import { Link } from "react-router-dom";

const PlanetResidents = props => {
  // return a list of residents to use in <ul></ul>
  const mapOverResidents = () => {
    // this was written to return the names of the residents, and link to their
    // individual pages to show more detail
    if (props.residents.length > 0) {
      return props.residents.map(resident => {
        if (resident !== undefined) {
          return (
            <li key={resident.url}>
              <h3>
                <Link to={resident.url.substring(20)}>{resident.name}</Link>
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
    <div className="planetResidents">
      <h2>Resident(s):</h2>

      {/* If there are residents from this planet, display them */}
      {props.planet.residents.length !== 0 ? (
        <ul>{mapOverResidents()}</ul>
      ) : (
        `${props.planet.name} does not have any residents.`
      )}
    </div>
  );
};

export default PlanetResidents;
