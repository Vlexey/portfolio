import React from 'react'

export const ListItemsCreate = ({items, label}) => {
  return (
    <section>
    <h4>{`${label}s`}</h4>
    <ul className="list-group item-list">
      {items}
    </ul>               
  </section>
  )
}
