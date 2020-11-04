import React, { Component } from 'react';
import './random-planet.css';

export default class RandomPlanet extends Component {
  state = {
    population: null,
    rotationPeriod: null,
    diametr: null,
  };

  render() {
    let id = 4;
    return (
      <div className="random-planet jumbotron rounded">
        <img
          className="planet-image"
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          alt="planet"
        />
        <div className="planet-info">
          <h4>Planet: Polo</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>10000</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>23</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>6400</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
