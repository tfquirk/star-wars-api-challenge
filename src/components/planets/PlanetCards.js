import React from "react";

// connect to Redux state
import { connect } from "react-redux";

// styling for planets
import "../../styles/Homepage/HomepagePlanets.css";

//import individual API call abstractions
import { fetchPlanets } from "../../apis/PlanetApiCall";

// import CharacterCard to use to make cards for each planet
import PlanetCard from "./PlanetCard";
import BackBtn from "../ReusableComponents/BackBtn";
import ForwardBtn from "../ReusableComponents/ForwardBtn";

// return all container to hold all planet cards on display
const PlanetCards = props => {
  const mapPlanetsToPlanetCards = () => {
    return props.planets.map(planet => {
      return <PlanetCard key={planet.url} planet={planet} {...props} />;
    });
  };

  return (
    <div className="allPlanets">
      <h1>Planets:</h1>
      {/* movementContainer holds the forward and back buttons as well as the
      planet cards */}
      <div className="movementContainer">
        {/* only display back button if this is not the first serious of cards */}
        {/* BackBtn and ForwardBtn are passed an action props, which when clicked
          will envoke a new fetch to the requisate API to update Redux state */}
        {props.planetsBack ? (
          <BackBtn action={() => props.fetchPlanets(props.planetsBack)} />
        ) : (
          <div className="backBtn" />
        )}
        <div className="planetsContainer">
          {/* create cards from the planets currently in redux state */}
          {mapPlanetsToPlanetCards()}
        </div>
        {/* only display forward button if this is not the last serious of cards */}
        {/* BackBtn and ForwardBtn are passed an action props, which when clicked
          will envoke a new fetch to the requisate API to update Redux state */}
        {props.planetsNext ? (
          <ForwardBtn action={() => props.fetchPlanets(props.planetsNext)} />
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
    planets: state.planets,
    planetsNext: state.planetsNext,
    planetsBack: state.planetsBack
  };
};

// allows the compoent to fetch a list of 10 planets after rendering
const mapDispatchToProps = dispatch => {
  return { fetchPlanets: endpoint => fetchPlanets(dispatch, endpoint) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlanetCards);
