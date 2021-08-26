import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "../App.css";
import "../components/Component.css";
import Subnav from '../components/Subnav';

export default function Prev() {
    return (
     <div className="App">
      <img src="/accent3.svg" className="accent1" alt="blob-blue"></img>
      <img src="/accent4.svg" className="accent2" alt="blob-yellow"></img>

      <Container>
        <header className="App-header">
				<br />
          <Row>
            <Col sm={12} className="explorehead">
						 <h2>This page is in production</h2>
						 <Subnav/>
						 	<p>Not available for work until Spring 2022</p>
						 
            </Col>
          </Row>
        </header>
      </Container>
    </div>
    );
}
