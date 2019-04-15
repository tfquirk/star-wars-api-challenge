import React from "react";

// connect to Redux state
import { connect } from "react-redux";

// use react router for links
import { Link } from "react-router-dom";

const History = props => {
  const mapLogToTable = () => {
    return props.log.map(logItem => {
      return (
        <tr>
          <td>{logItem.url}</td>
          <td>{logItem.name}</td>
          <td>DATE HERE</td>
        </tr>
      );
    });
  };
  return (
    <div className="historyPage">
      <table style={{ color: "white", border: "1px solid white" }}>
        <thead>
          <tr>
            <th>URL</th>
            <th>Page Visited</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>{props.log.length > 0 && mapLogToTable()}</tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    log: state.log
  };
};

export default connect(mapStateToProps)(History);
