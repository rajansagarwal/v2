import React, { Component } from "react";
import "./Component.css";
import {
  Link
} from "react-router-dom";

class Highlights extends Component {
  render() {
    return (
      <div>
        <h5 className="manifesto">HIGHLIGHTS</h5>
        <p className="p-manifesto">
				<b>
            <a href="https://tfss.hackclub.com">
              Launching Turner Fenton Hack Club!
            </a>
          </b>
          <br />
          <i>November 7</i> • Building a place to innovate
          <br />
          <br />
          <b>
            <a href="https://www.devpost.com/software/diplomatica">
              Diplomatica - Redesigning Political Awareness
            </a>
          </b>
          <br />
          <i>Sep 17</i> • Gamifying the Public Perspective<br />
          <br />
          <b>
            <a href="https://run.heyrajan.com">
              My Run For Hope
            </a>
          </b>
          <br />
          <i>Aug 25</i> • My 160km Journey For Indigenous Awareness
          <br />
          <br />
          <Link to="/staywoke">
            <b>My First Talk</b> @staywokeevent
            <br />
          </Link>
          <i>August 25</i> • My very first talk ~ Living Life
          <br />
          <br />
          
        </p>
      </div>
    );
  }
}

export default Highlights;
