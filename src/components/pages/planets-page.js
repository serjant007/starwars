import React, { Component } from 'react';

import ItemList from '../item-list/item-list';
import ErrorIndicator from '../error-indicator/error-indicator';
import SwapiService from '../../services/swapi-service';
import PlanetDetails from '../planet-details/planet-details';

export default class PlanetsPage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedItem: 4,
    hasError: false,
  };

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
    });
  }

  onPlanetSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList
            onItemSelected={this.onPlanetSelected}
            getData={this.swapiService.getAllPlanets}
          />
        </div>
        <div className="col-md-6">
          <PlanetDetails planetId={this.state.selectedItem} />
        </div>
      </div>
    );
  }
}
