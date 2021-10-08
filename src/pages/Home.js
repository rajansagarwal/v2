import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "../App.css";
import Transition from "../components/Transition";
import Manifesto from "../components/Manifesto";
import Highlights from "../components/Highlights";
import Socials from "../components/Socials";
import Upcoming from "../components/Upcoming";
			

export default function Home() {
    return (
          <div className="App">
      <img src="/accent1.svg" className="accent1" alt="blob-blue"></img>
      <img src="/accent2.svg" className="accent2" alt="blob-yellow"></img>

      <Container>
        <header className="App-header">
          <Row>
            <Col sm={12}>
              <div className="break">
                <br />
              </div>
							<div className="mainheader">
              <h1 className="hey">
                Bienvenue Au Inno!{" "}
              </h1>
              <h1 className="moving">
                <Transition />
              </h1>
              <h1 className="still">Bienvenue Au Inno</h1>
							</div>
            </Col>
          </Row>
          <Row>
            <Col sm={7.5} className="animate1">
              <Manifesto />
            </Col>
            <Col sm={4.5} className="animate2">
              <Highlights />
            </Col>
          </Row>

          <Row>
            <Col sm={7} className="animate3">
              <Socials />
            </Col>
            <Col sm={0.5}></Col>
            <Col sm={4.5} className="animate4">
              <Upcoming />
            </Col>
          </Row>
        </header>
      </Container>
    </div>
    );
}
