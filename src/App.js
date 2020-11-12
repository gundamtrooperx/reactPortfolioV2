import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import './App.css';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
// import Assignment from './components/Assignment'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">{AboutMe}</Route>
          <Route exact path="/Portfolio">{Portfolio}</Route>
          <Route exact path="/Contact">{Contact}</Route>
          {/* <Route exact path="/Assignment">{Assignment}</Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
