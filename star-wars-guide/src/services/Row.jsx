import React from 'react'

export const Row = ({left, right}) => {
  return (
    <div className="row mb2 d-flex justify-content-between">  
        <div className="col-md-4">
          {left}          
        </div>
        <div className="col-md-8">
          {right}
        </div>  
      </div>
  )
}
