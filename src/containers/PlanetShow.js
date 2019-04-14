import React, { Fragment } from "react";

// components found in components folder
import NavBar from "../components/NavBar";
import Planet from "../components/planets/ShowPage/Planet";

const PlanetShow = props => {
  return (
    <Fragment>
      <NavBar />
      <Planet />
    </Fragment>
  );
};

export default PlanetShow;
