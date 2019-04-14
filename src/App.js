import React, { Component, Fragment } from "react";

// import ability to use React Router funcitionality
import { Route, withRouter, Redirect, Switch } from "react-router-dom";

// connect to Redux state
import { connect } from "react-redux";

//import individual API call abstractions
import { fetchPeople } from "./apis/PeopleApiCall";
import { fetchPlanets } from "./apis/PlanetApiCall";
import { fetchVehicles } from "./apis/VehicleApiCall";

// import needed containers
import Home from "./containers/Home";
import PersonShow from "./containers/PersonShow";
import PlanetShow from "./containers/PlanetShow";
import StarshipShow from "./containers/StarshipShow";

class App extends Component {
  componentDidMount() {
    this.props.fetchPeople();
    this.props.fetchPlanets();
    this.props.fetchVehicles();
  }

  render() {
    return (
      <Fragment>
        <Route exact path="/" component={Home} />
        <Route exact path="/people/:id" component={PersonShow} />
        <Route exact path="/planets/:id" component={PlanetShow} />
        <Route exact path="/vehicles/:id" component={StarshipShow} />
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPeople: () => fetchPeople(dispatch),
    fetchPlanets: () => fetchPlanets(dispatch),
    fetchVehicles: () => fetchVehicles(dispatch)
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
