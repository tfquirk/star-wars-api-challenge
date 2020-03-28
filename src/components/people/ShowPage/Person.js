import React, { useState, useEffect, Fragment } from "react";

// connect to Redux state
import { connect } from "react-redux";

// import type for UPDATE_LOG dispatch to keep track of user history
import { UPDATE_LOG } from "../../../types/types";

// import abstracted methods to fetch for relevant items for a person
import {
  fetchPerson,
  fetchHomeworld
} from "../../../apis/ShowPages/PersonShow";

// import components needed to build person show page
import AddTag from "../../ReusableComponents/AddTag";
import PersonMain from "./PersonShowPieces/PersonMain";
import PersonHomeworld from "./PersonShowPieces/PersonHomeworld";
import PersonVehicles from "./PersonShowPieces/PersonVehicles";

// show page for an individual person
const Person = props => {
  // use hook to create initial state of null person
  const [person, setPerson] = useState(null);
  const [homeworld, setHomeworld] = useState(null);
  const [vehicles, setVehicles] = useState([]);

  // if there are tags, filter to only pull out those relevant to this page
  const filterTags = () => {
    return props.tags.filter(tag => {
      return tag.url === person.url;
    });
  };

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
    // if this is the first visit, log the person
    // if this is not the first visit check the last log item, and only log it
    // if they last log item does not have the same url as the current item. This
    // prevents any duplicates upon a rerender because of state change
    if (props.log.length === 0) {
      props.logVist(person.name, person.url);
    } else if (props.log[props.log.length - 1].url !== person.url) {
      props.logVist(person.name, person.url);
    }
    // return person information
    return (
      <Fragment>
        {/* allow users to create tags for classification - item is the object
        AddTag will evaluate the url of, so it needs to be particular to component
        you are in now. */}
        <AddTag item={person} />
        <div className="personShowPage">
          {/* the person and any associated tags are passed to the componet to
          create the main details */}
          <PersonMain person={person} tags={filterTags()} />
          <div className="personShowPageRelatedInfo">
            {/* Display homeworld information  */}
            <PersonHomeworld homeworld={homeworld} />
            {/* Display vehicle information */}
            <PersonVehicles person={person} vehicles={vehicles} />
          </div>
        </div>
      </Fragment>
    );
  }
};

// 1. need access to the log verify a log for the visit to this page has not already
// been created (rerenders DO NOT add to log)
// 2. tags are added to props so they can be sured to find when the url matches
// the current url
const mapStateToProps = state => {
  return {
    log: state.log,
    tags: state.tags
  };
};

// each time a user visits this page, add it to the log history
const mapDispatchToProps = dispatch => {
  return {
    logVist: (name, url) =>
      dispatch({
        type: UPDATE_LOG,
        payload: { name: name, url: url, time: new Date() }
      })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Person);
