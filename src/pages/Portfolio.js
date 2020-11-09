import React from 'react';
import Assignments from './Apps.json';
import Project from '../components/Project';

class Portfolio extends React.Component{
    state ={
        Assignments
    }
    render (){
  return (
    <div className="Portfolio">
      <h2> Portfolio </h2>
      <div className="container">
          {this.state.Assignments.map((app,key) => 
          <Project 
          name = {app.name}
          description = {app.description}
          github = {app.github}
          deploymenturl = {app.deploymenturl}
          key = {key}
          />
          )}
      </div>
  
    </div>
  );
}
}

export default Portfolio;