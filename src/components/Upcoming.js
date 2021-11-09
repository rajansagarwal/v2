import React, { Component } from "react";
import "./Component.css";
import {
  Link
} from "react-router-dom";


class Upcoming extends Component {
  render() {
    return (
      <div>
        <h5 className="manifesto">WHAT'S NEXT</h5>
        <p className="p-manifesto refined">A few upcoming initiatives in the queue</p>
        <p className="p-manifesto">
          <a href="https://www.globalgiving.org/projects/team21108/">
            <b>Remote Public Health Internship</b>
          </a>{" "}
          <br />
          Raising Awareness about Public Health and Equity in Nigeria
          <br />
          <br />
          <Link to="/">
            <b>OpenMind</b>
          </Link>
          <br />
          <i>Startup</i> • Technological Innovation meets Transportation (Coming Soon)
          <br />
          <br />
          <a href="https://tfss.hackclub.com">
            <b>Turner Fenton Hack Club </b>
          </a>{" "}
          <br />
          <i>We'Re At Our Best When We're Making</i> • I'm building up the Turner Fenton Hack Club, a makerspace for innovation.
          <br />
          <br />
          <a href="https://www.instagram.com/_mindson">
            <b>Minds On </b>
          </a>{" "}
          <br />
          <i>A Board-Wide Initiative • </i>Conferences, Podcast and
          Publications, oh my!
          <br />
          <br />
        </p>
      </div>
    );
  }
}

export default Upcoming;
