import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "../App.css";
import "../components/Component.css";
import Subnav from '../components/Subnav';
import Manifesto from "../components/Manifesto";
import Highlights from "../components/Highlights";
import Socials from "../components/Socials";
import Upcoming from "../components/Upcoming";

export default function Explore() {
    return (
     <div className="App">
      <img src="/accent1.svg" className="accent1" alt="blob-blue"></img>
      <img src="/accent2.svg" className="accent2" alt="blob-yellow"></img>

      <Container>
        <header className="App-header">
          <Row>
            <Col sm={12}>
              <Subnav />
            </Col>
          </Row>
          <Row>
            <Col sm={7.5} className="manifestoanimation">
              <Manifesto />
            </Col>
            <Col sm={4.5} className="highlightsanimation">
              <Highlights />
            </Col>
          </Row>

          <Row>
            <Col sm={7} className="socialsanimation">
              <Socials />
            </Col>
            <Col sm={0.5}></Col>
            <Col sm={4.5} className="upcominganimation">
              <Upcoming />
            </Col>
          </Row>
        </header>
      </Container>
    </div>
    );
}
