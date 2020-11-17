import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import '../person-details/person-details.css';

export default class PlanetDetails extends Component {
  swapiService = new SwapiService();
  state = {
    planet: null,
  };

  componentDidMount() {
    this.updatePlanet();
  }

  componentDidUpdate(prevProps) {
    if (this.props.planetId !== prevProps.planetId) {
      this.updatePlanet();
    }
  }

  updatePlanet() {
    const { planetId } = this.props;
    if (!planetId) {
      return;
    }
    this.swapiService.getPlanet(planetId).then((planet) => {
      this.setState({ planet });
    });
  }

  render() {
    if (!this.state.planet) {
      return <span>Select a planet from a list...</span>;
    }

    const { id, name, gravity, terrain, climate } = this.state.planet;
    console.log(this.state.planet);
    return (
      <div className="person-details card">
        <img
          className="person-image"
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          alt="character"
        />
        <div className="card-body">
          <h4 className="card-body__name">{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gravity</span>
              <span>{gravity}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Terrain</span>
              <span>{terrain}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Climate</span>
              <span>{climate}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
