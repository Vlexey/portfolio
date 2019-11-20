import React, { Component } from 'react'
import Head from './components/Header/Header'
import Currency from './components/Currency/Currency'
import ExCalc from './components/ExCalc/ExCalc'

import './App.css';

// import logo from './logo.svg';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'date': '',
      'base': '',
      'currencyRate': {}
    }
    this.currency = ['AUD','CAD', 'USD', 'RUB', 'PHP', 'NZD'];
    this.getDataRate();
  }
    
  getDataRate = () => {
    fetch('https://api.exchangeratesapi.io/latest')
      .then(data => {
        return data.json();
      })
      .then(data => {
        this.setState({date: data.date});
        let res = {};
        for (let i = 0; i < this.currency.length; i++) {
          res[this.currency[i]] = data.rates[this.currency[i]];        
        }      
        this.setState({currencyRate : res});
        this.setState({base : data.base});
        
        
      })
    }
    


  render() {    

    return (
      <div className="app">
      <header className="head">
        <div className="container">
            <Head />
        </div>
      </header>

      <main className="container">
          <h2 className="titleApp">Currency-Ex( {this.state.date} )</h2>
        <section className="currency">  
          {Object.keys(this.state.currencyRate).map(el => <Currency key={el} quote={el} quoteCount={this.state.currencyRate[el].toFixed(2)} base={this.state.base} />)}
        
        </section>
        <section className="ExCalc">
          <ExCalc rates={this.state.currencyRate} />
        </section>

      </main>
      
    </div>
    )
  }
}
