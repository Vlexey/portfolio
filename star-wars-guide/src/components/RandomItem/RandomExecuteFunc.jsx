import React from 'react'
import { ToggleImg } from './ToggleImg/ToggleImg';

export const RandomExecuteFunc = ({item, loading}) => {
  const { id, name = 'loading...', climate = 'loading...', created = 'loading...', diameter = 'loading...', gravity = 'loading...', orbital_period = 'loading...', population = 'loading...' } = item;
  return (
    <div className='row px-3 py-5'>
        <div className="col-3 d-flex align-items-center justify-content-center">   
          <ToggleImg loading={loading} id={id} />
        </div>
        <div className="col-9 px-5">
          <h4>Random Planet</h4>
          <div><b className='mr-2'>Planet: </b> {name}</div>
          <div><b className='mr-2'>Climate: </b> {climate}</div>
          <div><b className='mr-2'>Created: </b> {created}</div>
          <div><b className='mr-2'>Diameter: </b> {diameter}</div>
          <div><b className='mr-2'>Gravity: </b> {gravity}</div>
          <div><b className='mr-2'>Orbital Period: </b> {orbital_period}</div>
          <div><b className='mr-2'>Population: </b> {population}</div>
        </div>
      </div>
  )
}
