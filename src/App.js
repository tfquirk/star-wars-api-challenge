import React, { Component, Fragment } from "react";

// import ability to use React Router funcitionality
import { Route, withRouter, Redirect, Switch } from "react-router-dom";

// connect to Redux state
import { connect } from "react-redux";

//import individual API call abstractions
import { fetchCharacters } from "./apis/ApiCalls";

// import needed containers
import Home from "./containers/Home";

class App extends Component {
  componentDidMount() {
    this.props.fetchCharacters();
  }

  render() {
    console.log(this.props.characters);
    return (
      <Fragment>
        <Route exact path="/" component={Home} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    characters: state.characters
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCharacters: () => fetchCharacters(dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
