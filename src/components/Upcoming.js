import React, { Component } from "react";
import "./Component.css";

class Upcoming extends Component {
  render() {
    return (
      <div>
        <h5 className="manifesto">WHAT'S NEXT</h5>
        <p className="p-manifesto refined">A few upcoming initiatives</p>
        <p className="p-manifesto">
          <a href="https://www.hackclub.com/slack">
            <b>Remote Public Health Internship</b>
          </a>{" "}
          <br />
          Raising Awareness about Public Health and Equity in Nigeria
          <br />
          <br />
          <a href="https://www.hackclub.com/slack">
            <b>Upside Down</b>
          </a>
          <br />
          <i>Not Your Typical Podcast</i> • Digestible and Relevant Content
          about Social Issues
          <br />
          <br />
          <a href="https://www.hackclub.com/slack">
            <b>Uprise </b>
          </a>{" "}
          <br />
          <i>A startup like none other</i> • I'm building Uprise, a platform that gives a voice to youth.
          <br />
          <br />
          <a href="https://www.hackclub.com/slack">
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
