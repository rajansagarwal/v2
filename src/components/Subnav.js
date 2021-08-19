import React, { Component } from "react";
import './Component.css';

class Subnav extends Component {
  render() {
    return (
     
     <div className="subnavigation">
		  <span className="highlight"><a href="#">/explore</a>{'     '}{'     '}</span><a href="#">/ventures</a>{'       '}<a href="#">/posts</a>{'     '}<a href="#">/prev</a>
		 </div>
    );
  }
}

export default Subnav;
