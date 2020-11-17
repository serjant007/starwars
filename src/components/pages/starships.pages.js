import React, { Component } from 'react';

import ItemList from '../item-list/item-list';
import ErrorIndicator from '../error-indicator/error-indicator';
import SwapiService from '../../services/swapi-service';
import StarshipDetails from '../startship-details/starship-details';

export default class StarshipsPage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedItem: 40,
    hasError: false,
  };

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
    });
  }

  onStarshipSelected = (selectedItem) => {
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
            onItemSelected={this.onStarshipSelected}
            getData={this.swapiService.getAllStarships}
          />
        </div>
        <div className="col-md-6">
          <StarshipDetails starshipId={this.state.selectedItem} />
        </div>
      </div>
    );
  }
}
