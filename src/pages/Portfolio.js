import React, { Component } from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Project from '../components/Project';
import { assignments } from "./Work.js";
import projectone from './projectone.png'
import tallPulpRockers from './tallPulpRockers.png'
import storefront from './storefront.png'

const images = {
  "Project One": projectone ,
  "Project Two": tallPulpRockers ,
  "Student Store": storefront 
}


function Portfolio() {
  

  return (<>
    <Header>

    </Header>
    
    <div className="Portfolio">
      <h1> Portfolio </h1>
      <div className="container">
        {assignments.map((app, key) =>
          <Project
            name={app.name}
            description={app.description}
            github={app.github}
            deploymenturl={app.deploymenturl}
            image={images[app.name]}
            key={key}
          />
        )}
      </div>

    </div>

    <Footer>

    </Footer>
    );
  </>)
}

export default Portfolio;



