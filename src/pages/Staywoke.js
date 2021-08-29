import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "../components/Component.css";
import Event from '../components/Event';

export default function Staywoke() {
    return (
     <div className="App">
      <img src="/accent7.svg" className="accent1" alt="blob-blue"></img>
      <img src="/accent2.svg" className="accent2" alt="blob-yellow"></img>

      <Container>
        <header className="App-header">
				<br />
          <Row>
            <Col sm={12}>
						<Event />
            </Col>
          </Row>
        </header>
      </Container>
    </div>
    );
}
