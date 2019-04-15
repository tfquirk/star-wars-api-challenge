import React, { useState, useEffect } from "react";

// connect to Redux state
import { connect } from "react-redux";

// import type for UPDATE_HISTORY dispatch
import { UPDATE_HISTORY } from "../../../types/types";

// import abstracted methods to fetch for relevant items for a person
import {
  fetchPerson,
  fetchHomeworld
} from "../../../apis/ShowPages/PersonShow";

// import components needed to build person show page
import PersonMain from "./PersonShowPieces/PersonMain";
import PersonHomeworld from "./PersonShowPieces/PersonHomeworld";
import PersonVehicles from "./PersonShowPieces/PersonVehicles";

// show page for an individual person
const Person = props => {
  // use hook to create initial state of null person
  const [person, setPerson] = useState(null);
  const [homeworld, setHomeworld] = useState(null);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    // if there is no person, do a fetch based on the url to get the person
    // data from the Star Wars API
    if (!person) {
      // use local url to fetch to API
      fetchPerson(props.match.url).then(character => {
        // update hook state to include person information
        setPerson(character);

        // fetch to get information on the homeworld
        fetchHomeworld(character.homeworld).then(homeworld => {
          setHomeworld(homeworld);
        });

        // push all endpoints from the number of vehicles, wrapped in a 'fetch'
        // into the endpoints array
        let endpoints = [];
        for (let i = 0; i < character.vehicles.length; i++) {
          endpoints.push(fetch(character.vehicles[i]));
        }
        // use promise.all to wait for all promises to be returned, and then
        // update the vehicles array so that the DOM rerenders
        Promise.all(endpoints)
          .then(values => Promise.all(values.map(value => value.json())))
          .then(finalVals => {
            let vh1 = finalVals[0];
            let vh2 = finalVals[1];
            setVehicles([vh1, vh2]);
          });
      });
    }
  });

  // if there is no person object yet, return a Star Wars gif while loading
  if (person === null) {
    return (
      <img
        src="https://media.giphy.com/media/5wikad3qSOqAg/giphy.gif"
        alt="loading gif"
        className="loadingGif"
      />
    );
  } else {
    // otherwise return person information
    if (vehicles.length > 0) {
      props.logVist(person.name, person.url);
    }

    return (
      <div className="personShowPage">
        <PersonMain person={person} />
        <div className="personShowPageRelatedInfo">
          <PersonHomeworld homeworld={homeworld} />
          <PersonVehicles person={person} vehicles={vehicles} />
        </div>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    logVist: (name, url) =>
      dispatch({
        type: UPDATE_HISTORY,
        payload: { name: name, url: url, time: new Date() }
      })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Person);
