import React from "react";

// connect to Redux state
import { connect } from "react-redux";

// use react router for links
import { Link } from "react-router-dom";

const History = props => {
  console.log(props.history);
  return (
    <div className="historyPage">
      <h1 style={{ color: "white" }}>History goes here</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    history: state.history
  };
};

export default connect(mapStateToProps)(History);
