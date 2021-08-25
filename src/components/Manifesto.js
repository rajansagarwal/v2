import React, { Component } from "react";
import "./Component.css";

class Manifesto extends Component {
  render() {
    return (
      <div>
        <h5 className="manifesto">MANIFESTO</h5>
        <p className="p-manifesto">
          I'm Rajan Agarwal, a 16 year old in Ontario{" "}
          <span role="img" aria-label="canadaemoji">
            🇨🇦
          </span>{" "}
          driven by innovation. In your exploration of my digital persona, it
          hope that you develop a profound understanding of my world, built on
          the foundation of creation and change. Here, you will find my
          favourite experiences, writings projects and initiatives.
        </p>
        <p className="p-manifesto">
          Time is flying, which is why I spend my time with some of the most
          interesting and innovative people out there. These people are going to
          build the future we live on, and I'm honoured to work with them on a
          daily basis. You'll often find me ranting on{" "}
          <a href="https://www.hackclub.com">Hack Club</a> Slack, starting new
          initiatives on Instagram or writing my occasional thoughts right here.{" "}
        </p>
        <p className="p-manifesto">
          Now its time to make your move.{" "}
          <a href="mailto:rajan.ag005@gmail.com">Email me</a> or poke me on{" "}
          <a href="https://www.twitter.com/itsrajan05">Twitter</a>,{" "}
          <a href="https://www.instagram.com/rajanwastaken">Instagram</a> and{" "}
          <a href="https://www.github.com/itsrajan">Github.</a>
        </p>
        <p className="p-manifesto">
          <span className="yourstruly">Yours Truly,</span>
          <br />
          <span className="signiature">Rajan Agarwal</span>
        </p>
      </div>
    );
  }
}

export default Manifesto;
