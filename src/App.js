import React, { Component, Fragment } from "react";
import styled from "styled-components";

// import ability to use React Router funcitionality
import { Route } from "react-router-dom";

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
import VehicleShow from "./containers/VehicleShow";
import History from "./containers/History";

const Background = styled.html`
  background: #000
    url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat top
    center;
  z-index: 0;
  height: 100%;
  min-height: 100vh;
`;

class App extends Component {
  componentDidMount() {
    this.props.fetchPeople();
    this.props.fetchPlanets();
    this.props.fetchVehicles();
  }

  render() {
    return (
      <Background>
        <Route exact path="/" component={Home} />
        <Route exact path="/people/:id" component={PersonShow} />
        <Route exact path="/planets/:id" component={PlanetShow} />
        <Route exact path="/vehicles/:id" component={VehicleShow} />
        <Route exact path="/history" component={History} />
      </Background>
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

export default connect(null, mapDispatchToProps)(App);
