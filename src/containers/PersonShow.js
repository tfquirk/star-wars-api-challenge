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
      {/*Pass props to Person, so we may push forward, or backward
        and my also match the url*/}
      <Person {...props} />
    </Fragment>
  );
};

export default PersonShow;
