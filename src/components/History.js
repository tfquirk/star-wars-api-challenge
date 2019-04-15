import React from "react";

// connect to Redux state
import { connect } from "react-redux";

// use react router for links
import { Link } from "react-router-dom";

// TODO: ADD HISTORY DISPATCH TO ALL PAGES, TRY TO LIMIT IT TO ONE TIME,
// THEN CREATE TABLE ON THIS PAGE TO DISPLAY ALL USER ACTIONS TAKEN IN A SESSION

const History = props => {
  console.log(props.history);
  console.log(props);
  return (
    <div className="historyPage">
      <h1 style={{ color: "white" }}>History goes here</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    log: state.log
  };
};

export default connect(mapStateToProps)(History);
