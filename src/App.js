import React from "react";
import { Container, Row, Col } from 'react-grid-system';
import './App.css';
import Transition from './components/Transition';
import Subnav from './components/Subnav';
import Manifesto from './components/Manifesto';
import Highlights from './components/Highlights';


function App() {
	return (
		<div className="App">
			<img src="/accent1.svg" className="accent1" alt="blob-blue" style={{opacity: '120%'}}></img>
        <img src="/accent2.svg" className="accent2" alt="blob-yellow"></img>
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
				 <h3 className="manifesto">Where You'll Find Me</h3>
				 <p>A refined collection of the places I love the most.</p>
				 <Row>
					<Col sm={12}>
					
					</Col>
         </Row> 
				 
				</Container>
			</header>
		</div>
	);
}

export default App;
