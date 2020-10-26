import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './styles/App.css';

const Home = require('./pages/Home');
const Game = require('./pages/Game');
const NotFound = require('./pages/NotFound');

const App = () => {


  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path ="/game" component={Game} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
