import React, { Component } from "react";
import "./Component.css";
import Subnav from '../components/Subnav';

class Explorehead extends Component {
  render() {
    return (
      <div>
        <h2 className="ventureshead hey">I build cool things with cool people.</h2>
				<div className="ventureshead moving"><Subnav /><br /></div>
      </div>
    );
  }
}

export default Explorehead;
