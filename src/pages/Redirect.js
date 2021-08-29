import React from "react";
import { Container, Row, Col } from "react-grid-system";
import "../App.css";
import "../components/Component.css";

export default function Redirect() {
    return (
     <div className="App-header">
      <Container>
			<Row>
			<Col sm={12}>
<h1>404</h1>
			</Col>
			</Row>
			</Container>
    </div>
    );
}
