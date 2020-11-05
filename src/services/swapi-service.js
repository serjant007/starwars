import React from 'react';

export default class SwapiService extends React.Component {
  _apiBase = 'https://swapi.dev/api';
  _imageBase = 'https://starwars-visualguide.com/assets/img';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + ` , received ${res.status}`);
    }
    return await res.json();
  }

  async getAllPeople() {
    let res1 = await this.getResource(`/people/?page=1`);
    let res2 = await this.getResource(`/people/?page=2`);
    return res1.results.concat(res2.results).map(this._transformPerson);
  }

  async getPersone(id) {
    const persone = await this.getResource(`/people/${id}/`);
    return this._transformPlanet(persone);
  }

  async getAllPlanets() {
    let res1 = await this.getResource(`/planets/?page=1`);
    let res2 = await this.getResource(`/planets/?page=2`);
    return res1.results.concat(res2.results).map(this._transformPlanet);
  }

  async getPlanet(id) {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
  }

  async getAllStarships() {
    let res1 = await this.getResource(`/starships/?page=1`);
    let res2 = await this.getResource(`/starships/?page=2`);
    return res1.results.concat(res2.results).map(this._transformStarship);
  }

  async getStarship(id) {
    const starship = await this.getResource(`/starships/${id}/`);
    return this._transformPlanet(starship);
  }

  _extractId(item) {
    const idRegexp = /\/([0-9]*)\/$/;
    return item.url.match(idRegexp)[1];
  }

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      diameter: planet.diameter,
      gravity: planet.gravity,
      orbitalPeriod: planet.orbital_period,
      population: planet.population,
      terrain: planet.terrain,
      climate: planet.climate,
      rotationPeriod: planet.rotation_period,
    };
  };

  _transformStarship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity,
    };
  };

  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
    };
  };
}

const swapi = new SwapiService();

swapi.getPlanet(7).then((body) => console.log(body));
