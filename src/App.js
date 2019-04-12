import React, { Component, Fragment } from "react";

// import ability to use React Router funcitionality
import { Route, withRouter, Redirect, Switch } from "react-router-dom";

// import needed containers
import Home from "./containers/Home";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={Home} />
      </Fragment>
    );
  }
}

export default App;
