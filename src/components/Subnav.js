import React, { Component } from "react";
import './Component.css';

class Subnav extends Component {
  render() {
    return (
     
     <div className="subnavigation">
		  <span className="highlight"><a href="https://rajan.rajnagrwl.repl.co/">/explore</a>{'     '}{'     '}</span><a href="https://rajan.rajnagrwl.repl.co/">/ventures</a>{'       '}<a href="https://rajan.rajnagrwl.repl.co/">/posts</a>{'     '}<a href="https://rajan.rajnagrwl.repl.co/">/prev</a>
		 </div>
    );
  }
}

export default Subnav;