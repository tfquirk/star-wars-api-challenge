import React, { useState, useEffect } from "react";

// connect to Redux state
import { connect } from "react-redux";

// import type for UPDATE_LOG dispatch to keep track of user history
import { UPDATE_LOG } from "../../../types/types";

// import abstracted methods to fetch for relevant items for a vehicle
import { fetchVehicle } from "../../../apis/ShowPages/VehicleShow";

// import components needed to build vehicle show page
import VehicleMain from "./VehicleShowPieces/VehicleMain";
import VehiclePilots from "./VehicleShowPieces/VehiclePilots";

// show page for an individual vehicle
const Vehicle = props => {
  // use hook to create initial state of null vehicle
  const [vehicle, setVehicle] = useState(null);
  const [pilots, setPilots] = useState([]);

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
      <div className="vehicleShowPage">
        <VehicleMain vehicle={vehicle} />
        <div className="vehicleShowPageRelatedInfo">
          <VehiclePilots vehicle={vehicle} pilots={pilots} />
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    log: state.log
  };
};

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
