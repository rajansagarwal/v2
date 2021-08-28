import React, { Component } from "react";
import "./Component.css";
import Subnav from '../components/Subnav';

class Ventureshead extends Component {
  render() {
    return (
      <div>
        <h2 className="ventureshead hey">A few non-work endeavours</h2>
				<div className="ventureshead moving"><Subnav /><br /></div>
      </div>
    );
  }
}

export default Ventureshead;
