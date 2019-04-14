import React, { Fragment } from "react";

// components found in components folder
import NavBar from "../components/NavBar";
import Starship from "../components/vehicles/ShowPage/Starship";

const StarshipShow = props => {
  return (
    <Fragment>
      <NavBar />
      <Starship />
    </Fragment>
  );
};

export default StarshipShow;
