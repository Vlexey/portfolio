import React from 'react'

export const NotCheckedItem = ({label}) => {
  return (
    <React.Fragment>
      <li className="list-group-item mt-5">{`Please choose one of ${label}s`}</li>
    </React.Fragment>
  )
}
