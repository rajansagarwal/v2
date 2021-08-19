import React from "react";
import { Container, Row, Col } from 'react-grid-system';
import './App.css';
import Transition from './components/Transition';
import Subnav from './components/Subnav';
import Manifesto from './components/Manifesto';
import Highlights from './components/Highlights';
import Forcegraph from './components/ForceGraph';


function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Container>
					<Row>
						<Col sm={12}>
						 <div className="break">
						 <br />
						 </div>
              <h1 className="hey">Hey <span role="img" aria-label="emoji">👋</span></h1>
							<h1 className="moving"><Transition /></h1>
							<h1 className="still">I'm Rajan</h1>
							<Subnav />
						</Col>
					</Row>
					<Row>
					<Col sm={8}>
					<Manifesto />
					</Col>
					<Col sm={4}>
          <Highlights />
					</Col>
         </Row>
				 <Row>
					<Col sm={8}>
					<h3 className="manifesto">Where You'll Find Me</h3>
					</Col>
					<Col sm={4}>
					<Highlights />
					</Col>
         </Row>
				 
				</Container>
			</header>
		</div>
	);
}

export default App;
