import React from 'react';
import { Header } from './components/Header/Header';
import { RandomItem } from './components/RandomItem/RandomItem';

import { PlanetPage } from './components/PlanetPage/PlanetPage';
import { PeoplePage } from './components/PeoplePage/PeoplePage';
import { StarshipPage } from './components/StarshipPage/StarshipPage';
import { StarWarsService } from './services/StarWarsService';
import { Route } from 'react-router-dom';


export class App extends React.Component {
  sws = new StarWarsService() 

  render() {
    const {
      getAllPeoples,
      getPeople,
      getPeopleImage,
      getAllStarships,
      getStarship,
      getStarshipImage,
      getAllPlanets,
      getPlanet,
      getPlanetImage
    } = this.sws;

    return (
      <div className="container">
        <Header title="Star Wars Guide" />
        <RandomItem />
        <Route exact path='/persons' render={() => 
            <PeoplePage
              allData={getAllPeoples}
              dataById={getPeople}
              getImage={getPeopleImage}
            />
        }/>
        <Route exact path='/planets' render={() => 
            <PlanetPage 
              allData={getAllPlanets}       
              dataById={getPlanet}       
              getImage={getPlanetImage}
            />
        }/>
        <Route exact path='/starship' render={() => 
            <StarshipPage
              allData={getAllStarships}       
              dataById={getStarship}       
              getImage={getStarshipImage}
            />
        }/>                
      </div>
    );
  }
}

export default App;
