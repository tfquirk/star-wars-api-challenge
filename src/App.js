import React, { Component, Fragment } from "react";

// import ability to use React Router funcitionality
import { Route, withRouter, Redirect, Switch } from "react-router-dom";

// connect to Redux state
import { connect } from "react-redux";

//import individual API call abstractions
import { fetchCharacters } from "./apis/CharacterApiCall";
import { fetchPlanets } from "./apis/PlanetApiCall";
import { fetchVehicles } from "./apis/VehicleApiCall";

// import needed containers
import Home from "./containers/Home";

class App extends Component {
  componentDidMount() {
    this.props.fetchCharacters();
    this.props.fetchPlanets();
    this.props.fetchVehicles();
  }

  render() {
    return (
      <Fragment>
        <Route exact path="/" component={Home} />
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCharacters: () => fetchCharacters(dispatch),
    fetchPlanets: () => fetchPlanets(dispatch),
    fetchVehicles: () => fetchVehicles(dispatch)
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
