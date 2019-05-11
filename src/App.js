import React, { Component } from "react";
import "./vendors/styles/style.css";
import './vendors/styles/hover.css'

import Sidebar from "./components/layouts/sidebar";
import NavBar from "./components/layouts/NavBar";
import Container from './components/Container'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />

        <Container/>
      </React.Fragment>
    );
  }
}

export default App;
