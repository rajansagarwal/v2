import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "../components/Component.css";
import Prevhead from '../components/Prevhead';
import Work from '../components/Work';

export default function Prev() {
    return (
     <div className="App">
      <img src="/accent7.svg" className="accent1" alt="blob-blue"></img>
      <img src="/accent2.svg" className="accent2" alt="blob-yellow"></img>
			<img src="/base.svg" className="baseaccent" alt="blob-base"></img>

      <Container>
        <header className="App-header">
				<br />
          <Row>
            <Col sm={12}>
						<Prevhead />
						<Work className="prev"/>
            </Col>
          </Row>
        </header>
      </Container>
    </div>
    );
}
