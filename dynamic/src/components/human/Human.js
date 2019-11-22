import React from 'react'
import './Human.css'

export const Human = ({ava, year, prof, name, onDelete, onChangeName}) => {
  
  return (
    <div className="human__wrapper" >
     
      <span><img className="avatar"
           width="100"
           hieght="100"
           src={require(`${ava}`)}
           alt="Avatar"
      /></span>
       <h2>Name: {name}</h2>
      <div>Year: {year} </div> 
      <div className="prof">profession: {prof} </div>      
      <button onClick={onDelete}>Delete</button>
      <div className="rename">
         <input type="text"
                placeholder="rename"
                onChange={onChangeName}             
             />
      </div>
    </div>
  )
}
