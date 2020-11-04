class SwapiService {
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
    return res1.results.concat(res2.results);
  }

  getPersone(id) {
    return this.getResource(`/people/${id}/`);
  }

  async getAllPlanets() {
    let res1 = await this.getResource(`/planets/?page=1`);
    let res2 = await this.getResource(`/planets/?page=2`);
    return res1.results.concat(res2.results);
  }

  getPlanet(id) {
    return this.getResource(`/planets/${id}/`);
  }

  async getAllStarships() {
    let res1 = await this.getResource(`/starships/?page=1`);
    let res2 = await this.getResource(`/starships/?page=2`);
    return res1.results.concat(res2.results);
  }

  getStarship(id) {
    return this.getResource(`/starships/${id}/`);
  }
}

const swapi = new SwapiService();

swapi.getAllStarships().then((body) => console.log(body));
