import React, { useState } from "react";

// connect to Redux state
import { connect } from "react-redux";

// import type for UPDATE_LOG dispatch to keep track of user history
import { ADD_TAG } from "../../types/types";

// return a create tag input that will perform an dispatch onClick
// this dispatch is passed to Redux state to be displayed on different components,
const AddTag = props => {
  const [tagValue, setTagValue] = useState(null);
  const [color, setColor] = useState(null);

  const changeTagName = event => {
    setTagValue(event.target.value);
  };

  const changeColor = event => {
    setColor(event.target.value);
  };

  const testSetting = event => {
    event.preventDefault();
    console.log(tagValue, color);
  };

  return (
    <div className="addTag">
      <input name="tagName" type="text" onChange={changeTagName} />
      <form>
        <select onChange={changeColor}>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="violet">Violet</option>
        </select>
        <input type="submit" value="Add Tag" onSubmit={testSetting} />
      </form>
    </div>
  );
};

export default AddTag;
