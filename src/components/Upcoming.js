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
            <b>Upside Down</b>
          </Link>
          <br />
          <i>Not Your Typical Podcast</i> • Digestible and Relevant Content
          about Social Issues
          <br />
          <br />
          <Link to="/">
            <b>Uprise </b>
          </Link>{" "}
          <br />
          <i>A startup like none other</i> • I'm building Uprise, a platform that gives a voice to youth.
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
