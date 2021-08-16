import React, { Component } from "react";
import './Component.css';

class Subnav extends Component {
  render() {
    return (
     
     <div className="subnavigation">
		  <span className="highlight"><a>/about</a>{'  '}</span><a>/explore</a>{'  '}<a>/ventures</a>{'  '}<a>/prev</a>
		 </div>
    );
  }
}

export default Subnav;
