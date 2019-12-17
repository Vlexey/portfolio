import React from 'react'
import pic from '../img/ErrorImg.jpg'

export const ErrorPage = () => {
  return (
    <div className="row py-5">
        <div className="col">
          <img src={`${pic}`} alt="error"/>
          <h3>Happend Error try reload this Page</h3>
        </div>
    </div>
  )
}