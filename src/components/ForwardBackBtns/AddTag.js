import React from "react";

// connect to Redux state
import { connect } from "react-redux";

// import type for UPDATE_LOG dispatch to keep track of user history
import { ADD_TAG } from "../../types/types";

// return a create tag input that will perform an dispatch onClick
// this dispatch is passed to Redux state to be displayed on different components,
const AddTag = props => {
  return (
    <div className="addTag">
      <input type="text" />
      <select>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="violet">Violet</option>
      </select>
      <input type="submit" />
    </div>
  );
};

export default AddTag;
