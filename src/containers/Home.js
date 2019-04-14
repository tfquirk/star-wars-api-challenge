import React, { Fragment } from "react";

// components found in components folder
import NavBar from "../components/NavBar";
import Homepage from "../components/Homepage";

const Home = props => {
  return (
    <Fragment>
      <NavBar />
      <Homepage {...props} />
    </Fragment>
  );
};

export default Home;
