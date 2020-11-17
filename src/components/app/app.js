import React from 'react';
import SwapiService from '../../services/swapi-service';
import Header from '../header';
import PeoplePage from '../pages/people-page';
import PlanetsPage from '../pages/planets-page';
import RandomPlanet from '../random-planet';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StarshipsPage from '../pages/starships.pages';
import MainPage from '../pages/main-page';
import './app.css';

export default class App extends React.Component {
  swapiService = new SwapiService();
  state = {
    selectedPerson: 4,
  };
  onPersonSelected = (id) => {
    this.setState({ selectedPerson: id });
    console.log(id);
  };
  render() {
    return (
      <Router>
        <div className="stardb-app">
          <div className="container">
            <Header />
            <RandomPlanet />
            <Route path="/" component={MainPage} exact />
            <Route path="/People" component={PeoplePage} />
            <Route path="/Planets" component={PlanetsPage} />
            <Route path="/Starships" component={StarshipsPage} />
          </div>
        </div>
      </Router>
    );
  }
}
