import React, { Fragment } from "react";

//styling
import "../styles/History.css";

// components found in components folder
import NavBar from "../components/NavBar";
import History from "../components/History";

const VehicleShow = props => {
  return (
    <Fragment>
      <NavBar />
      {/*Pass RouterProps to planet so that the planet may link and navigate
        from the planet show page */}
      <History {...props} />
    </Fragment>
  );
};

export default VehicleShow;
