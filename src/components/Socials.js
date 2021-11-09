import React, { Component } from "react";
import "./Component.css";
import { Link } from 'react-router-dom';

class Socials extends Component {
  render() {
    return (
      <div>
        <h5 className="manifesto">WHERE YOU'LL FIND ME</h5>
        <p className="p-manifesto refined">
          A collection of the things I do on a daily basis.
        </p>
        <p className="p-manifesto">
          <a href="https://www.hackclub.com/slack">
            <b>Hack Club Slack </b>@turbo
          </a>{" "}
          <br />
          <i>Think, Build, Ship</i> • Hack Club Slack is a second home to me,
          with the best community out there.
          <br />
          <br />
          <Link to="/explore">
            <b>#runforhope </b>~ My 160km Run For Indigenous Awareness
          </Link>
          <br />
          <i>The Long Run </i> • I dedicate time every day towards achieving my
          goal of 160km in recognition of 160 graves found at Residential
          Schools.
          <br />
          <br />
          <Link to="/explore">
            <b>Breaking Barriers </b>~ A hopeful novel
          </Link>{" "}
          <br />
          <i>Write, Delete, Rewrite</i> • Writing is second nature to me. You'll
          often find me clicking random keys, hoping the right words find their
          way onto the page.
          <br />
          <br />
          <Link to="/explore">
            <b>Wellness </b>~ Mental Maintenance
          </Link>{" "}
          <br />
          <i>Being One with my Surroundings</i> • As a large advocate for mental
          wellbeing, I dedicate time in my day to Yoga, Physical Wellness and
          external support.
          <br />
          <br />
        </p>
      </div>
    );
  }
}

export default Socials;
