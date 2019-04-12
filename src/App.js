import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";

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
