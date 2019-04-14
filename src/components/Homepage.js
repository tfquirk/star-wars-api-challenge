import React from "react";

import PeopleCards from "./people/PeopleCards";
import PlanetCards from "./planets/PlanetCards";
import VehicleCards from "./vehicles/VehicleCards";

// generalized styling for html, movementContainer and buttons
import "../styles/Homepage/Homepage.css";

const Homepage = props => {
  return (
    <div className="homepageContainer">
      {/*RouterProps are passed as props to all three sections,
      RouterProps will be used by individual cards to push to show pages */}
      <PeopleCards {...props} />
      <PlanetCards {...props} />
      <VehicleCards {...props} />
    </div>
  );
};

export default Homepage;
