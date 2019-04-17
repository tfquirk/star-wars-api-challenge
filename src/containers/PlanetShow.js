import React, { Fragment } from "react";

//styling
import "../styles/ShowPages/PlanetShow.css";
import "../styles/Tags.css";

// components found in components folder
import NavBar from "../components/NavBar";
import Planet from "../components/planets/ShowPage/Planet";

const PlanetShow = props => {
  return (
    <Fragment>
      <NavBar />
      {/*Pass RouterProps to planet so that the planet may link and navigate
        from the planet show page */}
      <Planet {...props} />
    </Fragment>
  );
};

export default PlanetShow;
