import React, { Component } from "react";
import './Component.css';
import { Container, Row, Col } from 'react-grid-system';

class Manifesto extends Component {
  render() {
    return (
     <div>
		 <Container>
		 <Row>
		 <Col sm={3}>
		 <div className="cards hackclub">
      <h5>#cult-of-rajan</h5>
		</div>
		</Col>
		<Col sm={3}>
		 <div className="cards instagram">
      <h5>#cult-of-rajan</h5>
		</div>
		</Col>
		<Col sm={3}>
		 <div className="cards twitter">
      <h5>#cult-of-rajan</h5>
		</div>
		</Col>
		</Row>
				 </Container>
		 </div>

    );
  }
}

export default Manifesto;
