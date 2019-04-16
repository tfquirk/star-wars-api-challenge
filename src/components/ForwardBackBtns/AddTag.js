import React, { useState } from "react";

// connect to Redux state
import { connect } from "react-redux";

// import type for UPDATE_LOG dispatch to keep track of user history
import { ADD_TAG } from "../../types/types";

// return a create tag input that will perform an dispatch onClick
// this dispatch is passed to Redux state to be displayed on different components,
const AddTag = props => {
  const [tagValue, setTagValue] = useState(null);
  const [color, setColor] = useState("red");

  const changeTagName = event => {
    setTagValue(event.target.value);
  };

  const changeColor = event => {
    setColor(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.addTag(props.person.url, tagValue, color);
  };

  return (
    <div className="addTag">
      <input name="tagName" type="text" onChange={changeTagName} />
      <form onSubmit={handleSubmit}>
        <select onChange={changeColor}>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="violet">Violet</option>
        </select>
        <input type="submit" value="Add Tag" />
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addTag: (url, tagName, color) =>
      dispatch({
        type: ADD_TAG,
        payload: { url: url, tagName: tagName, color: color }
      })
  };
};
export default connect(
  null,
  mapDispatchToProps
)(AddTag);
