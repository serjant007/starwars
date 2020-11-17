import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import '../person-details/person-details.css';

export default class StarshipDetails extends Component {
  swapiService = new SwapiService();
  state = {
    starship: null,
  };

  componentDidMount() {
    this.updateStarship();
  }

  componentDidUpdate(prevProps) {
    if (this.props.starshipId !== prevProps.starshipId) {
      this.updateStarship();
    }
  }

  updateStarship() {
    const { starshipId } = this.props;
    if (!starshipId) {
      return;
    }
    this.swapiService.getStarship(starshipId).then((starship) => {
      this.setState({ starship });
    });
  }

  render() {
    if (!this.state.starship) {
      return <span>Select a starship from a list...</span>;
    }

    const { id, name, manufacturer, costInCredits, length, passengers } = this.state.starship;
    return (
      <div className="person-details card">
        <img
          className="person-image"
          src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
          alt="character"
        />
        <div className="card-body">
          <h4 className="card-body__name">{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Manufacturer:</span>
              <span>{manufacturer}</span>
            </li>
            <li className="list-group-item">
              <span className="term">CostInCredits, $:</span>
              <span>{costInCredits}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Length, m:</span>
              <span>{length}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Passengers:</span>
              <span>{passengers}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
