import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import './App.css';
import MovingText from 'react-moving-text'
import Typist from 'react-text-typist';
import Typing from 'react-typing-animation';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Container>
					<Row>
						<Col sm={6}>

							<h1>Rajan Agarwal</h1>
							
							<Typist className={'myTypist'} typingSpeed={"110"} cursorClassName={'myCursor'} sentences={['First Sentence', 'Second Sentence', 'Third Sentence']} loop={true} />
						</Col>
					</Row>
				</Container>
			</header>
		</div>
	);
}

export default App;
