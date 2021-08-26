import React, { Component } from "react";
import "./Component.css";

class Highlights extends Component {
  render() {
    return (
      <div>
        <h5 className="manifesto">HIGHLIGHTS</h5>
        <p className="p-manifesto">
          <b>
            <a href="https://www.devpost.com/software/corex">
              CoreX - Supercharging Small Businesses
            </a>
          </b>
          <br />
          <i>August 25</i> • Another weekend, another hackathon W<br />
          <br />
          <b>
            <a href="https://www.runforhope.heyrajan.com">
              Houston, We are approaching 160km
            </a>
          </b>
          <br />
          <i>August 25</i> • My #runforhope is nearing the finish line
          <br />
          <br />
          <a href="https://www.instagram.com/staywokeevent">
            <b>My First Talk</b> @staywokeevent
            <br />
          </a>
          <i>August 25</i> • My very first talk ~ Living Life
          <br />
          <br />
          <b>
            <a href="https://www.heyrajan.com">
              The Release of my Personal Website
            </a>
          </b>
          <br />
          <i>August 25</i> • Rajan in a few lines of code.
          <br />
          <br />
        </p>
      </div>
    );
  }
}

export default Highlights;
