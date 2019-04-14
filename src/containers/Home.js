import React, { Fragment } from "react";

// components found in components folder
import NavBar from "../components/NavBar";
import Homepage from "../components/Homepage";

const Home = props => {
  return (
    <Fragment>
      <NavBar />
      {/*RouterProps are passed as props to all three sections,
      RouterProps will be used by individual cards to push to show pages */}
      <Homepage {...props} />
    </Fragment>
  );
};

export default Home;
