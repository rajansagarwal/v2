import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "../App.css";
import "../components/Component.css";
import Subnav from '../components/Subnav';
import Explorehead from '../components/Explorehead';
import Explorelinks from '../components/Explorelinks';

export default function Explore() {
    return (
     <div className="App">
      <img src="/accent1.svg" className="accent1" alt="blob-blue"></img>
      <img src="/accent2.svg" className="accent2" alt="blob-yellow"></img>

      <Container>
        <header className="App-header">
				<br />
          <Row>
            <Col sm={12}>
							<Explorehead/>
            </Col>
          </Row>
           <Row>
            <Col sm={12}>
              <Subnav />
							<Explorelinks/>
            </Col>
          </Row>
        </header>
      </Container>
    </div>
    );
}
