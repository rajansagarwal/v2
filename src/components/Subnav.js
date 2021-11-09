import React, { Component } from "react";
import "./Component.css";
import {
  Link
} from "react-router-dom";

class Subnav extends Component {
  render() {
    return (
      <div className="subnavigation">
        <Link to="/">home</Link>
        {"     "}
        <Link to="/explore">explore</Link>
        {"      "}
        <Link to="/ventures">ventures</Link>
        {"     "}
        <Link to="/prev">experience</Link>
      </div>
    );
  }
}

export default Subnav;
