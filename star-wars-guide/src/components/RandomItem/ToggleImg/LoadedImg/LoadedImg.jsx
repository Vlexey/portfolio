import React from 'react'

export const LoadedImg = ({id}) => {
  return (
    <React.Fragment>
      <img
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} 
        alt=" " 
        width="200"                             
      />
    </React.Fragment>
  )
}

