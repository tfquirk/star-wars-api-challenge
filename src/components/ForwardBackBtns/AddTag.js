import React, { useState } from "react";

// connect to Redux state
import { connect } from "react-redux";

// import type for UPDATE_LOG dispatch to keep track of user history
import { ADD_TAG } from "../../types/types";

// return a create tag input that will perform an dispatch onClick
// this dispatch is passed to Redux state to be displayed on different components,
const AddTag = props => {
  const [tagValue, setTagValue] = useState(null);
  const [color, setColor] = useState("black");

  const changeTagName = event => {
    setTagValue(event.target.value);
  };

  const changeColor = event => {
    setColor(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (tagValue === null) {
      alert("Please enter a tag name to add a tag.");
    } else {
      props.addTag(props.item.url, tagValue, color);
      document.getElementById("tagName").value = "";
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
          <option value="white">white</option>
        </select>

        <input className="addTagSubmit" type="submit" value="Add Tag" />
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
