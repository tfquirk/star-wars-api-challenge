import React, { useState, useEffect, Fragment } from "react";

// connect to Redux state
import { connect } from "react-redux";

// import type for UPDATE_LOG dispatch to keep track of user history
import { UPDATE_LOG } from "../../../types/types";

// import abstracted methods to fetch for relevant items for a planet
import { fetchPlanet } from "../../../apis/ShowPages/PlanetShow";

// import components needed to build planet show page
import AddTag from "../../ReusableComponents/AddTag";
import PlanetMain from "./PlanetShowPieces/PlanetMain";
import PlanetResidents from "./PlanetShowPieces/PlanetResidents";

// show page for an individual planet
const Planet = props => {
  // use hook to create initial state of null planet
  const [planet, setPlanet] = useState(null);
  const [residents, setResidents] = useState([]);

  // if there are tags, filter to only pull out those relevant to this page
  const filterTags = () => {
    return props.tags.filter(tag => {
      return tag.url === planet.url;
    });
  };

  useEffect(() => {
    // if there is no planet, do a fetch based on the url to get the planet
    // data from the Star Wars API
    if (!planet) {
      // use local url to fetch to API
      fetchPlanet(props.match.url).then(planet => {
        // update hook state to include planet information
        setPlanet(planet);

        // push all endpoints from the number of residents, wrapped in a 'fetch'
        // into the endpoints array
        let endpoints = [];
        for (let i = 0; i < planet.residents.length; i++) {
          endpoints.push(fetch(planet.residents[i]));
        }
        // use promise.all to wait for all promises to be returned, and then
        // update the vehicles array so that the DOM rerenders
        Promise.all(endpoints)
          .then(values => Promise.all(values.map(value => value.json())))
          .then(finalVals => {
            let vh1 = finalVals[0];
            let vh2 = finalVals[1];
            let vh3 = finalVals[2];
            let vh4 = finalVals[3];
            let vh5 = finalVals[4];
            let vh6 = finalVals[5];
            let vh7 = finalVals[6];
            let vh8 = finalVals[7];
            let vh9 = finalVals[8];
            let vh10 = finalVals[9];
            setResidents([vh1, vh2, vh3, vh4, vh5, vh6, vh7, vh8, vh9, vh10]);
          });
      });
    }
  });

  // if there is no planet object yet, return a Star Wars gif while loading
  if (planet === null) {
    return (
      <img
        src="https://media.giphy.com/media/5wikad3qSOqAg/giphy.gif"
        alt="loading gif"
        className="loadingGif"
      />
    );
  } else {
    // if this is the first visit, log the planet
    // if this is not the first visit check the last log item, and only log it
    // if they last log item does not have the same url as the current item. This
    // prevents any duplicates upon a rerender because of state change
    if (props.log.length === 0) {
      props.logVist(planet.name, planet.url);
    } else if (props.log[props.log.length - 1].url !== planet.url) {
      props.logVist(planet.name, planet.url);
    }
    // otherwise return planet information
    return (
      <Fragment>
        {/* allow users to create tags for classification - item is the object
          AddTag will evaluate the url of, so it needs to be particular to component
          you are in now. */}
        <AddTag item={planet} />
        <div className="planetShowPage">
          {/* the planet and any associated tags are passed to the componet to
        create the main details */}
          <PlanetMain planet={planet} tags={filterTags()} />
          <div className="planetShowPageRelatedInfo">
            {/* display all plant residents, if any */}
            <PlanetResidents planet={planet} residents={residents} />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Planet);
