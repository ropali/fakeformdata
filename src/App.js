import React, { Component } from "react";
import { HashRouter as Router } from "react-router-dom";

import "./vendors/styles/style.css";
import "./vendors/styles/hover.css";

import Container from "./components/Container";

class App extends Component {
  render() {
    return (
      <Router>
        <Container />
      </Router>
    );
  }
}

export default App;
