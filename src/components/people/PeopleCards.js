import React from "react";

// connect to Redux state
import { connect } from "react-redux";

// styling for people
import "../../styles/Homepage/HomepagePeople.css";

//import individual API call abstractions
import { fetchPeople } from "../../apis/PeopleApiCall";

// import CharacterCard to use to make cards for each character
import BackBtn from "../ReusableComponents/BackBtn";
import ForwardBtn from "../ReusableComponents/ForwardBtn";

import { mapPersonToPeopleCards } from "./PeopleHelpers";

// return all container to hold all character cards on display
// this is used on the homepage
const PeopleCards = props => {
  const people = "people";
  return (
    <div className="allPeople">
      <h1>People:</h1>
      {/* movementContainer holds the forward and back buttons as well as the
      character cards */}
      <div className="movementContainer">
        {/* only display back button if this is not the first serious of cards */}
        {/* BackBtn and ForwardBtn are passed an action props, which when clicked
          will envoke a new fetch to the requisate API to update Redux state */}
        {props.peopleBack ? (
          <BackBtn
            type={people}
            action={() => props.fetchPeople(props.peopleBack)}
          />
        ) : null}
        <div className="peopleContainer">
          {/* create cards from the people currently in redux state */}
          {props.people && mapPersonToPeopleCards(props.people, props)}
        </div>
        {/* only display forward button if this is not the last serious of cards */}
        {/* BackBtn and ForwardBtn are passed an action props, which when clicked
          will envoke a new fetch to the requisate API to update Redux state */}
        {props.peopleNext ? (
          <ForwardBtn
            type={people}
            action={() => props.fetchPeople(props.peopleNext)}
          />
        ) : null}
      </div>
    </div>
  );
};

// needs access to all people in redux state to create cards
// peopleNext and peopleBack allow the component to know if a forward
// or back btn will need to be rendered
const mapStateToProps = state => {
  return {
    people: state.people,
    peopleNext: state.peopleNext,
    peopleBack: state.peopleBack
  };
};

// allows the compoent to fetch a list of 10 people after rendering
const mapDispatchToProps = dispatch => {
  return { fetchPeople: endpoint => fetchPeople(dispatch, endpoint) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PeopleCards);
