import React from 'react'
import './CreateHumanForm.css'

export const CreateHumanForm = ({onSubmitForm}) => {
  
  return (
    <form className="form__wrapper" onSubmit={onSubmitForm}>
      <h2>Create human</h2>
      <label htmlFor="humanName"><span>Name: </span></label>
          <input type="text" placeholder="Type person name" name="humanName" id="humanName"  />
      <label htmlFor="humanAge"><span>Age: </span></label>
          <input type="text" placeholder="Type person age" name="humanAge" id="humanAge"  />
      <label htmlFor="humanProf"><span>Proffesion: </span></label>
          <input type="text" placeholder="Type person proffesion" name="humanProf" id="humanProf"  />
      <label htmlFor="humanName"><span>Name: </span></label>
          <input type="submit" value="Create" />     
    </form>
  )
}
