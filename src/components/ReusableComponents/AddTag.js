import React, { useState } from "react";

// connect to Redux state
import { connect } from "react-redux";

// import type for UPDATE_LOG dispatch to keep track of user history
import { ADD_TAG } from "../../types/types";

// return a create tag input that will perform an dispatch onClick
// this dispatch is passed to Redux state to be displayed on different components,
const AddTag = props => {
  // use hooks for state for tagValue and color of tag
  const [tagValue, setTagValue] = useState(null);
  const [color, setColor] = useState("black");

  // upon user input into input field, update the tagValue (eg tagName)
  const changeTagName = event => {
    setTagValue(event.target.value);
  };

  // upon user selection of color on dropdown, update the color
  const changeColor = event => {
    setColor(event.target.value);
  };

  // check to make sure tag input is not null, then create tag and reset form
  const handleSubmit = event => {
    event.preventDefault();

    // if user has not entered in any information - alert them to do so
    if (tagValue === null) {
      alert("Please enter a tag name to add a tag.");
    } else {
      // add Tag info to Redux state
      props.addTag(props.item.url, tagValue, color);
      // empty input field
      document.getElementById("tagName").value = "";
      // reset value to null, in the case more tags want to be created or user
      // hits submit a second time
      setTagValue(null);
    }
  };

  return (
    <div className="addTag">
      <form onSubmit={handleSubmit}>
        <label>Classification:</label>

        <input
          className="addTagName"
          id="tagName"
          type="text"
          onChange={changeTagName}
        />

        <select className="addTagColor" onChange={changeColor}>
          <option value="black">Black</option>
          <option value="blue">Blue</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="white">White</option>
        </select>

        <input className="addTagSubmit" type="submit" value="Add Tag" />
      </form>
    </div>
  );
};

// add a tag to Redux state
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
