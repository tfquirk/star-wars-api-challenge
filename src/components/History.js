import React from "react";

// connect to Redux state
import { connect } from "react-redux";

// import type for UPDATE_LOG dispatch to keep track of user history
import { UPDATE_LOG } from "../types/types";

// use react router for links
import { Link } from "react-router-dom";

const History = props => {
  // if this is the first visit, log the planet
  // if this is not the first visit check the last log item, and only log it
  // if they last log item does not have the same url as the current item. This
  // prevents any duplicates upon a rerender because of state change
  if (props.log.length === 0) {
    props.logVist("History page", "/history");
  } else if (props.log[props.log.length - 1].url !== props.match.url) {
    props.logVist("History page", "/history");
  }

  // create table rows with any log items from Redux state
  const mapLogToTable = () => {
    return props.log.map(logItem => {
      return (
        <tr key={logItem.time.toLocaleString()}>
          <td>
            <Link to={logItem.url.substring(20)}>
              {logItem.url.length > 8 ? logItem.url.substring(20) : logItem.url}
            </Link>
          </td>
          <td>
            <Link to={logItem.url.substring(20)}>{logItem.name}</Link>
          </td>
          <td>{logItem.time.toLocaleString()}</td>
        </tr>
      );
    });
  };

  // return table with all log items in the body
  return (
    <div className="historyPage">
      <table>
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
)(History);
