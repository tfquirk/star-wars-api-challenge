import React, { Fragment } from "react";

//styling
import "../styles/PersonShow.css";

// components found in components folder
import NavBar from "../components/NavBar";
import Person from "../components/people/ShowPage/Person";

const PersonShow = props => {
  return (
    <Fragment>
      <NavBar />
      <Person />
    </Fragment>
  );
};

export default PersonShow;
