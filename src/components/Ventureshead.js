import React, { Component } from "react";
import "./Component.css";
import Subnav from '../components/Subnav';

class Ventureshead extends Component {
  render() {
    return (
      <div>
        <h2 className="explorehead hey">A few non-work endeavours</h2>
				<div className="explorehead moving"><Subnav /><br /></div>
      </div>
    );
  }
}

export default Ventureshead;
