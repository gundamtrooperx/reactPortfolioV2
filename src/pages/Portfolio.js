import React, { Component } from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Assignments from './Apps.json';
import Project from '../components/Project';
// import password from "./screenshots/password.jpg"
import imgProfile from "./frankSelfie.jpg"

function Portfolio() {
  let Assignments = [
    {
      "name": "Password Generator",
      "image": { imgProfile },
      "description": "Javascripts app with alerts confim and prompt",
      "github": "https://github.com/gundamtrooperx/Wk3-bootcamp",
      "deploymenturl": "https://gundamtrooperx.github.io/Wk3-bootcamp/"

    },

    {
      "name": "Password Generator",
      "description": "Javascripts app with alerts confim and prompt",
      "github": "https://github.com/gundamtrooperx/Wk3-bootcamp",
      "deploymenturl": "https://gundamtrooperx.github.io/Wk3-bootcamp/"

    },

    {
      "name": "Password Generator",
      "description": "Javascripts app with alerts confim and prompt",
      "github": "https://github.com/gundamtrooperx/Wk3-bootcamp",
      "deploymenturl": "https://gundamtrooperx.github.io/Wk3-bootcamp/"

    },

    {
      "name": "Password Generator",
      "image": "/frankSelfie.jpg",
      "description": "Javascripts app with alerts confim and prompt",
      "github": "https://github.com/gundamtrooperx/Wk3-bootcamp",
      "deploymenturl": "https://gundamtrooperx.github.io/Wk3-bootcamp/"

    },

    {
      "name": "Password Generator",
      "description": "Javascripts app with alerts confim and prompt",
      "github": "https://github.com/gundamtrooperx/Wk3-bootcamp",
      "deploymenturl": "https://gundamtrooperx.github.io/Wk3-bootcamp/"

    }

  ]

  return (<>
    <Header>

    </Header>
    <div className="Portfolio">
      <h2> Portfolio </h2>
      <div className="container">
        {Assignments.map((app, key) =>
          <Project
            name={app.name}
            description={app.description}
            github={app.github}
            deploymenturl={app.deploymenturl}
            image={app.image}
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



