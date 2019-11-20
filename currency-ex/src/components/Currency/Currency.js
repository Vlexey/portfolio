import React, { Component } from 'react'
import './Currency.css'

export default class Currency extends Component {
  constructor(props) {
    super(props);
    
    }
  render() {
     
    const {quote, quoteCount, base } = this.props;

    return (

        <div className="currency__wrapper">
          <div className="info">
            <h3 className="currencyName">{base.toUpperCase()}</h3>
            <span className="currencyValue">{`${quoteCount} ${quote}`}</span>
          </div>
          <span className="add">* Exchange to 1 {base.toUpperCase()}</span>
        </div>
   
    )
  }
}

