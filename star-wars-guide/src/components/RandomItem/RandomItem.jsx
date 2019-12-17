import React, { Component } from 'react';
import { StarWarsService } from '../../services/StarWarsService';
import { ErrorPage } from '../../ErrorPages/ErrorPage/ErrorPage';
import { RandomExecuteFunc } from './RandomExecuteFunc';

export class RandomItem extends Component {

  sws = new StarWarsService()

  state = {
    planet: {},
    loading: true,
    error: false
  };


  componentDidMount(){
    this.intervalGet =  setInterval(() => {      
      this.renderRandomItem()
    }, 20000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalGet)
  }

  renderRandomItem = () => {
    const id = Math.floor(Math.random() * 20) + 2;
    this.sws.getPlanet(id)
      .then((planet) => this.setState({
         planet,
         loading: false,
         error: false
      }))
      .catch(() => this.setState({error: true, loading: false}))
  };


  render() {

  const { error }= this.state
  
  const errorP = error ? <ErrorPage/> : null;  
  const content = !error ? <RandomExecuteFunc item={this.state.planet} loading={this.state.loading} /> : null;


    return <React.Fragment>
            {errorP}
            {content}
          </React.Fragment>
    
  }
}
