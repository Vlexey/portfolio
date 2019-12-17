export class StarWarsService {
  _ulrBase = 'https://swapi.co/api/';

  getRes = async (url) => {
    const res = await fetch(`${this._ulrBase}${url}`)
    if(!res.ok) {
      throw new Error(`Bad request. Status: ${res.status}`)
    }
    return await res.json()
  };

  _getId = (item) => {
    const idReg = /\/([0-9]*)\/$/;
    return item.url.match(idReg)[1];
  }

  getAllPlanets = async () => {
    const planets = await this.getRes(`planets/`)
    return planets.results.map(this._createPlanet)
  }
  getPlanet = async (id) => {
    const planet = await this.getRes(`planets/${id}`)
    return this._createPlanet(planet)
  }
  getPlanetImage = (id) => {
    return  `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
  }
  _createPlanet = (planet) => {    
    return {
      id: this._getId(planet),
      name: planet.name,
      climate: planet.climate,
      created: planet.created,
      diameter: planet.diameter,
      gravity: planet.gravity,
      orbital_period: planet.orbital_period,
      population: planet.population   
    }
  }

  getAllPeoples = async () => {
    const peoples = await this.getRes(`people/`)
    return peoples.results.map(this._createPeople)
  }  
  getPeople = async (id) => {
    const people = await this.getRes(`people/${id}`)
    return this._createPeople(people)
  }
  getPeopleImage = (id) => {
    return  `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
  }
  _createPeople = (people) => {
    return {
      id: this._getId(people),
      name: people.name,
      height: people.height,
      hair_color: people.hair_color,
      skin_color: people.skin_color,
      eye_color: people.eye_color,
      birth_year: people.birth_year,
      gender: people.gender
    }
  }

  getAllStarships = async () => {
    const starships = await this.getRes(`starships/`)
    return starships.results.map(this._createStarship)
  }
  getStarship = async (id) => {
    const starship = await this.getRes(`starships/${id}`)
    return this._createStarship(starship)
  }
  getStarshipImage = (id) => {
    return  `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`
  }
  _createStarship = (starship) => {
    return {
      id: this._getId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      cost_in_credits: starship.cost_in_credits,
      length: starship.length,
      max_atmosphering_speed: starship.max_atmosphering_speed,
      crew: starship.crew,
      passengers: starship.passengers,
      consumables: starship.consumables,
      starship_class: starship.starship_class,
      cargo_capacity: starship.cargo_capacity     
    }
  }


}
