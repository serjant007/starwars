import React from 'react';
import Header from '../header';
import ItemList from '../item-list/';
import PersonDetails from '../person-details/';
import RandomPlanet from '../random-planet';
import './app.css';

export default class App extends React.Component {
  render() {
    // const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    return (
      <div className="stardb-app">
        <div className="container">
          <Header />
          <RandomPlanet />
          <div className="row mb2">
            <div className="col-md-6">
              <ItemList />
            </div>
            <div className="col-md-6">
              <PersonDetails />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
