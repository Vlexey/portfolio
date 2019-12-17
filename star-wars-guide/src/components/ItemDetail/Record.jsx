import React from 'react'

export const Record = ({field, label, item}) => {
  return (
    <li className="list-group-item">
      <b className="term">{`${label}: `}</b>
      <span>{ item[field] }</span>
    </li>
  )
}
