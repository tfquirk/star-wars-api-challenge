import React, { Fragment } from "react";

//styling
import "../styles/ShowPages/VehicleShow.css";

// components found in components folder
import NavBar from "../components/NavBar";
import Vehicle from "../components/vehicles/ShowPage/Vehicle";

const VehicleShow = props => {
  return (
    <Fragment>
      <NavBar />
      {/*Pass RouterProps to planet so that the planet may link and navigate
        from the planet show page */}
      <Vehicle {...props} />
    </Fragment>
  );
};

export default VehicleShow;
