import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "../App.css";
import "../components/Component.css";
import Ventureshead from '../components/Ventureshead';
import Venture from '../components/Venture';

export default function Ventures() {
    return (
     <div className="App">
      <img src="/accent5.svg" className="accent1" alt="blob-blue"></img>
      <img src="/accent6.svg" className="accent2" alt="blob-yellow"></img>

      <Container>
        <header className="App-header">
				<br />
          <Row>
            <Col sm={12}>
						<Ventureshead />
            </Col>
          </Row>
           <Row>
            <Col sm={12}>
						<Venture />
            </Col>
          </Row>
        </header>
      </Container>
    </div>
    );
}
