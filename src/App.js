import React, { Component } from "react";
import { Container, Row, Col } from 'react-grid-system';
import './App.css';
import MovingText from 'react-moving-text'
import Typist from 'react-text-typist';
import Typing from 'react-typing-animation';
import ReactTextTransition, { presets } from "react-text-transition";
import Transition from './components/Transition';
import Subnav from './components/Subnav';

 
function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Container>
					<Row>
						<Col sm={12}>
              <h1 className="hey">Hey 👋</h1>
							<h1 className="moving"><Transition /></h1>
							<h1 className="still">I'm Rajan</h1>
							<Subnav />
						</Col>
					</Row>
					<Row>
					<Col sm={7}>
					<h5 className="manifesto">MANIFESTO</h5>
					<p className="p-manifesto">Aloha! Welcome to my <a className="a">humble corner</a> of the internet.</p></Col>
					<Col sm={5}>
					<h5 className="manifesto">MANIFESTO</h5>
					<p className="p-manifesto">Aloha! Welcome to my <a className="a">humble corner</a> of the internet.</p></Col>
         </Row>
				</Container>
			</header>
		</div>
	);
}

export default App;
