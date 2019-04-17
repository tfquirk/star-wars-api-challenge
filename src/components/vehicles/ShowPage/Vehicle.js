import React, { useState, useEffect, Fragment } from "react";

// connect to Redux state
import { connect } from "react-redux";

// import type for UPDATE_LOG dispatch to keep track of user history
import { UPDATE_LOG } from "../../../types/types";

// import abstracted methods to fetch for relevant items for a vehicle
import { fetchVehicle } from "../../../apis/ShowPages/VehicleShow";

// import components needed to build vehicle show page
import AddTag from "../../ReusableComponents/AddTag";
import VehicleMain from "./VehicleShowPieces/VehicleMain";
import VehiclePilots from "./VehicleShowPieces/VehiclePilots";

// show page for an individual vehicle
const Vehicle = props => {
  // use hook to create initial state of null vehicle
  const [vehicle, setVehicle] = useState(null);
  const [pilots, setPilots] = useState([]);

  // if there are tags, filter to only pull out those relevant to this page
  const filterTags = () => {
    return props.tags.filter(tag => {
      return tag.url === vehicle.url;
    });
  };

  useEffect(() => {
    // if there is no vehicle, do a fetch based on the url to get the vehicle
    // data from the Star Wars API
    if (!vehicle) {
      // use local url to fetch to API
      fetchVehicle(props.match.url).then(vehicle => {
        // update hook state to include vehicle information
        setVehicle(vehicle);

        // push all endpoints from the number of pilots, wrapped in a 'fetch'
        // into the endpoints array
        let endpoints = [];
        for (let i = 0; i < vehicle.pilots.length; i++) {
          endpoints.push(fetch(vehicle.pilots[i]));
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
            setPilots([vh1, vh2, vh3, vh4, vh5]);
          });
      });
    }
  });

  // if there is no vehicle object yet, return a Star Wars gif while loading
  if (vehicle === null) {
    return (
      <img
        src="https://media.giphy.com/media/5wikad3qSOqAg/giphy.gif"
        alt="loading gif"
        className="loadingGif"
      />
    );
  } else {
    // if this is the first visit, log the vehicle
    // if this is not the first visit check the last log item, and only log it
    // if they last log item does not have the same url as the current item. This
    // prevents any duplicates upon a rerender because of state change
    if (props.log.length === 0) {
      props.logVist(vehicle.name, vehicle.url);
    } else if (props.log[props.log.length - 1].url !== vehicle.url) {
      props.logVist(vehicle.name, vehicle.url);
    }

    // otherwise return vehicle information
    return (
      <Fragment>
        {/* allow users to create tags for classification - item is the object
        AddTag will evaluate the url of, so it needs to be particular to component
        you are in now. */}
        <AddTag item={vehicle} />

        <div className="vehicleShowPage">
          {/* the vehicle and any associated tags are passed to the componet to
            create the main details */}
          <VehicleMain vehicle={vehicle} tags={filterTags()} />

          <div className="vehicleShowPageRelatedInfo">
            {/* display all pilots residents, if any */}
            <VehiclePilots vehicle={vehicle} pilots={pilots} />
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
)(Vehicle);
