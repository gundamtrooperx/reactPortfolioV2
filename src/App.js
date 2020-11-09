import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import './App.css';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">{AboutMe}</Route>
          <Route exact path="/Portfolio">{Portfolio}</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
