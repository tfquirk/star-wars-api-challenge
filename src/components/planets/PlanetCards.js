import React from "react";

// connect to Redux state
import { connect } from "react-redux";

// styling for planets
import "../../styles/Homepage/HomepagePlanets.css";

// import CharacterCard to use to make cards for each planet
import PlanetCard from "./PlanetCard";
import BackBtn from "../ForwardBackBtns/BackBtn";
import ForwardBtn from "../ForwardBackBtns/ForwardBtn";

// return all container to hold all character cards on display
const PlanetCards = props => {
  const mapCharactersToPlanetCards = () => {
    return props.planets.map(planet => {
      return <PlanetCard key={planet.url} planet={planet} />;
    });
  };

  return (
    <div className="allPlanets">
      <h1>Planets:</h1>
      {/* movementContainer holds the forward and back buttons as well as the
      planet cards */}
      <div className="movementContainer">
        {/* only display back button if this is not the first serious of cards */}
        {props.planetsBack ? <BackBtn /> : <div className="backBtn" />}
        <div className="planetsContainer">
          {/* create cards from the planets currently in redux state */}
          {mapCharactersToPlanetCards()}
        </div>
        {/* only display forward button if this is not the last serious of cards */}
        {props.planetsNext ? <ForwardBtn /> : <div className="forwardBtn" />}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    planets: state.planets,
    planetsNext: state.planetsNext,
    planetsBack: state.planetsBack
  };
};

export default connect(mapStateToProps)(PlanetCards);
