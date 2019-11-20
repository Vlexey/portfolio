import React, { Component } from 'react'
import './ExCalc.css'

export default class ExCalc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      res : 0
    }
    
  }


  onCalc = (e) => {
      e.preventDefault()
          
      let currencyCount = e.target.elements['currencyCount'].value;
      let currencyName = e.target.elements['ratesNames'].value;
      this.setState({ res : ( currencyCount / this.state.rates[currencyName] ).toFixed(2) });
        
    }
 

  static getDerivedStateFromProps(props, state) {
    return { rates: props.rates };
  }
  
  render() {
   
    return (

        <section className="calc__wrapper">
          <h3 className="currencyName">Exchange Calc</h3>
          <div className="calc__block">

            <form onSubmit={this.onCalc}>
              <input type="number" placeholder={`how mutch buy?` } name="currencyCount" />
              <select name="ratesNames">
                {Object.keys(this.state.rates).map(el => (
                  <option value={el} key={el}>
                    {el}
                  </option>
                ))}
              </select>
              <input type="submit" value="calculate" />
            </form>
            <div className="calc__result">
              <span className="result">Result: </span>              
              <span className="result__value">EUR <b>{ this.state.res }</b></span>              
            </div>
          </div>
          
        </section>
   
    )
  }
}

