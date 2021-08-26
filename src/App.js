import React from "react";
import "./App.css";
import Home from './pages/Home';
import Explore from './pages/Explore';
import Ventures from './pages/Ventures';
import Prev from './pages/Prev';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
      <Router>
    <div className="App">
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/explore">
        <Explore/>
      </Route>
      <Route exact path="/ventures">
        <Ventures/>
      </Route>
      <Route exact path="/prev">
        <Prev/>
      </Route>
    </div>
    </Router>
  );
}

export default App;
