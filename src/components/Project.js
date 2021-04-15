import React from 'react';

function Project(props) {
    return (
        <div className="card">
  
  <img src={ props.image} className="card-img-top" alt={props.name}></img>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">{props.description}</p>
    <a href={props.github} className="btn btn-primary">Github</a>
  </div>
</div> 
    )
}

export default Project