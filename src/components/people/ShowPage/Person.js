import React from "react";

// connect to Redux state
import { connect } from "react-redux";

// show page for an individual person

const Person = props => {
  console.log(props.selected);
  return (
    <div className="personShowPage">
      <div className="personShowPageMain">
        <div className="personShowImg">
          <img
            src="https://dummyimage.com/250x250/fff/aaa"
            alt="Star Wars Character"
          />
        </div>
        <div className="personShowName">
          <h1>Name Here</h1>
        </div>
        <div className="personShowDetails">
          <h3>List of details here</h3>
        </div>
      </div>

      <div className="personShowPageRelatedInfo">
        <div className="personHomewold">
          <h3>Homeworld</h3>
        </div>
        <div className="personVehicles">
          <h3>List vehicles</h3>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { selected: state.selected };
};

export default connect(mapStateToProps)(Person);
