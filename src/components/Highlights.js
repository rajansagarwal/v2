import React, { Component } from "react";
import './Component.css';

class Highlights extends Component {
  render() {
    return (
     <div>
     <h5 className="manifesto">HIGHLIGHTS</h5>
					<p className="p-manifesto">
					<b><a href="https://www.google.com">CoreX - Supercharging Small Businesses to Success</a></b><br />
					<i>August 21, 2021</i> • Another weekend, another hackathon<br /><br />
					<b><a href="https://www.google.com">The Official Release of my Personal Website</a></b><br />
					<i>August 29, 2021</i> • Rajan Agarwal in a few lines of code.<br /><br />
					<b><a href="https://www.google.com">My First Talk</a></b><br />
					<i>August 28, 2021</i> • Living Life @staywokeevent<br /><br />
					<b><a href="https://www.google.com">The #cult-of-rajan is growing</a></b><br />
					<i>August 23, 2021</i> • My special Hack Club creation<br /><br />
					</p>
		 </div>
    );
  }
}

export default Highlights;
