import React from "react";

import PeopleCards from "./people/PeopleCards";
import PlanetCards from "./planets/PlanetCards";
import VehicleCards from "./vehicles/VehicleCards";

// generalized styling for html, movementContainer and buttons
import "../styles/Homepage/Homepage.css";

const Homepage = () => {
  return (
    <div className="homepageContainer">
      <PeopleCards />
      <PlanetCards />
      <VehicleCards />
    </div>
  );
};

export default Homepage;
