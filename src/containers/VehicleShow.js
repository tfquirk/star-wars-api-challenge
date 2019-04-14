import React, { Fragment } from "react";

// components found in components folder
import NavBar from "../components/NavBar";
import Vehicle from "../components/vehicles/ShowPage/Vehicle";

const VehicleShow = props => {
  return (
    <Fragment>
      <NavBar />
      <Vehicle />
    </Fragment>
  );
};

export default VehicleShow;
