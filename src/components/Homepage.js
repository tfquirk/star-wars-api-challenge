import React from "react";

// connect to Redux state
import { connect } from "react-redux";

// import type for UPDATE_LOG dispatch to keep track of user history
import { UPDATE_LOG } from "../types/types";

// import all cards needed to make cards based on Star Wars item
import PeopleCards from "./people/PeopleCards";
import PlanetCards from "./planets/PlanetCards";
import VehicleCards from "./vehicles/VehicleCards";

// generalized styling for html, movementContainer and buttons
import "../styles/Homepage/Homepage.css";

const Homepage = props => {
  // if this is the first visit, log the planet
  // if this is not the first visit check the last log item, and only log it
  // if they last log item does not have the same url as the current item. This
  // prevents any duplicates upon a rerender because of state change
  if (props.log.length === 0) {
    props.logVist("Homepage", "/");
  } else if (props.log[props.log.length - 1].url !== props.match.url) {
    props.logVist("Homepage", "/");
  }

  return (
    <div className="homepageContainer">
      {/*RouterProps are passed as props to all three sections,
      RouterProps will be used by individual cards to push to show pages */}
      <PeopleCards {...props} />
      <PlanetCards {...props} />
      <VehicleCards {...props} />
    </div>
  );
};

// need access to the log verify a log for the visit to this page has not already
// been created (rerenders DO NOT add to log)
const mapStateToProps = state => {
  return {
    log: state.log
  };
};

// allow a log visit to be created for this history page as well
const mapDispatchToProps = dispatch => {
  return {
    logVist: (name, url) =>
      dispatch({
        type: UPDATE_LOG,
        payload: { name: name, url: url, time: new Date() }
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);
