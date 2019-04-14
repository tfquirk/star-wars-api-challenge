import React from "react";

// connect to Redux state
import { connect } from "react-redux";

// import types to be used with dispatches
import { SET_SELECTED } from "../../types/types";

// return a card with person information

const PersonCard = props => {
  const pushToPersonShow = () => {
    // if a user clicks on a card, push them to the show page for that card

    // dispatch person clicked to Redux state
    props.setSelected(props.person);
    // push to person show page
    props.history.push(props.person.url.substring(20));
  };

  return (
    <div className="personCard" onClick={pushToPersonShow}>
      <div className="personImg">
        <img
          src="https://dummyimage.com/250x250/fff/aaa"
          alt="Star Wars Character"
        />
      </div>
      <div className="personName">
        <h3>{props.person.name}</h3>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    setSelected: person => {
      dispatch({
        type: SET_SELECTED,
        payload: person
      });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(PersonCard);
