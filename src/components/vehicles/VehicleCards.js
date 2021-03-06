import React from "react";

// connect to Redux state
import { connect } from "react-redux";

// styling for vehicles
import "../../styles/Homepage/HomepageVehicles.css";

//import individual API call abstractions
import { fetchVehicles } from "../../apis/VehicleApiCall";

// import CharacterCard to use to make cards for each vehicle
import VehicleCard from "./VehicleCard";
import BackBtn from "../ReusableComponents/BackBtn";
import ForwardBtn from "../ReusableComponents/ForwardBtn";

// return all container to hold all character cards on display
const VehicleCards = props => {
  const mapVehiclesToVehicleCards = () => {
    return props.vehicles.map(vehicle => {
      return <VehicleCard key={vehicle.url} vehicle={vehicle} {...props} />;
    });
  };

  return (
    <div className="allVehicles">
      <h1>Vehicles:</h1>
      {/* movementContainer holds the forward and back buttons as well as the
      vehicle cards */}
      <div className="movementContainer">
        {/* only display back button if this is not the first serious of cards */}
        {/* BackBtn and ForwardBtn are passed an action props, which when clicked
          will envoke a new fetch to the requisate API to update Redux state */}
        {props.vehiclesBack ? (
          <BackBtn action={() => props.fetchVehicles(props.vehiclesBack)} />
        ) : (
          <div className="backBtn" />
        )}
        <div className="vehiclesContainer">
          {/* create cards from the vehicles currently in redux state */}
          {mapVehiclesToVehicleCards()}
        </div>
        {/* only display forward button if this is not the last serious of cards */}
        {/* BackBtn and ForwardBtn are passed an action props, which when clicked
          will envoke a new fetch to the requisate API to update Redux state */}
        {props.vehiclesNext ? (
          <ForwardBtn action={() => props.fetchVehicles(props.vehiclesNext)} />
        ) : (
          <div className="forwardBtn" />
        )}
      </div>
    </div>
  );
};

// needs access to all people in redux state to create cards
// peopleNext and peopleBack allow the component to know if a forward
// or back btn will need to be rendered
const mapStateToProps = state => {
  return {
    vehicles: state.vehicles,
    vehiclesNext: state.vehiclesNext,
    vehiclesBack: state.vehiclesBack
  };
};

// allows the compoent to fetch a list of 10 vehicles after rendering
const mapDispatchToProps = dispatch => {
  return { fetchVehicles: endpoint => fetchVehicles(dispatch, endpoint) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VehicleCards);
