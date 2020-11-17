import React from 'react';

export default class SwapiService extends React.Component {
  _apiBase = 'https://swapi.dev/api';
  _imageBase = 'https://starwars-visualguide.com/assets/img';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + ` , received ${res.status}`);
    }
    return await res.json();
  };

  getAllPeople = async () => {
    let res1 = await this.getResource(`/people/?page=1`);
    let res2 = await this.getResource(`/people/?page=2`);
    const res = res1.results.concat(res2.results);
    const persons = res.filter((el, i) => !(i % 2));
    return persons.map(this._transformPerson);
  };

  getPerson = async (id) => {
    const persone = await this.getResource(`/people/${id}/`);
    return this._transformPerson(persone);
  };

  getAllPlanets = async () => {
    let res2 = await this.getResource(`/planets/?page=2`);
    return res2.results.map(this._transformPlanet);
  };

  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
  };

  getAllStarships = async () => {
    let res1 = await this.getResource(`/starships/?page=1`);
    let ships1 = res1.results.splice(2, 7);
    let res2 = await this.getResource(`/starships/?page=2`);
    let ships3 = res2.results.splice(0, 5);
    return ships1.concat(ships3).map(this._transformStarship);
  };

  getStarship = async (id) => {
    const starship = await this.getResource(`/starships/${id}/`);
    return this._transformStarship(starship);
  };

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
