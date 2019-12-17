import React from 'react'
import { Link } from 'react-router-dom'

export const Header = ({title}) => {
  return (
    <div className='border-bottom d-flex justify-content-between align-items-center'>
      <h2>{title}</h2>
      <nav>
        <Link to="/persons" className="btn btn-primary mx-1">Characters</Link>
        <Link to="planets" className="btn btn-success mx-1">Planets</Link>
        <Link to="/starship" className="btn btn-danger mx-1">Starships</Link>
      </nav>
    </div>
  )
}
