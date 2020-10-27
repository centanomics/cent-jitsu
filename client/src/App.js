import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './styles/App.css';

import Home from './pages/Home';
import Game from './pages/Game';
import NotFound from './pages/NotFound';

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
