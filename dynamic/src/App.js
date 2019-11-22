import React, { Component } from 'react'
import './App.css'
import {Human} from './components/human/Human';
import { CreateHumanForm } from './components/CreateHumanForm/CreateHumanForm';



export default class App extends Component {

  idGen = 10;
  
  state = {
    humanList: [
      {id: 0, name: 'Alexey', year: 1993, prof: 'webdev', ava: './img/optimized.jpg'},
      {id: 2, name: 'Richard', year: 1988, prof: 'backend', ava: './img/optimized.jpg'},
      {id: 3, name: 'Knob', year: 1994, prof: 'reactdev', ava: './img/optimized.jpg'},
      {id: 4, name: 'Alisa', year: 1995, prof: 'webdev', ava: './img/optimized.jpg'},
      {id: 5, name: 'Jesus', year: 1991, prof: 'seo', ava: './img/optimized.jpg'},   
      {id: 6, name: 'Noob', year: 1971, prof: 'noob', ava: './img/optimized.jpg'}   
    ],
    toggle: true
  };
  
  createHuman(name, age, prof) {
    return {
      id: this.idGen++,
      name,
      age,
      prof,
      ava: './img/optimized.jpg'
    }
  }

  onSubmitForm = (e, name, age, prof) => {
    e.preventDefault();
    
    if(age && name && prof) {
      const newPerson = this.createHuman(name, age, prof);
      this.setState(({humanList}) => {

        const newArr = [...humanList, newPerson];

        return {
          humanList : newArr
        }
      });
     }
  }

  toggleHumans = () => {
    this.setState({toggle: !this.state.toggle })  
  }

  changeName = (id) => {
    console.log(this.state.humanList.name)    
  }
  onDelete = (id) => {  
    this.setState(({humanList}) => {
      const idx = humanList.findIndex((el) => el.id === id);
      const newAr = [...humanList.slice(0, idx),
                    ...humanList.slice(idx + 1)
                    ];
          return {
            humanList: newAr
          }
    });    
  };
  onChangeName = (name, id) => { 
    this.setState(({humanList}) => {
    const idx = humanList.findIndex((el) => el.id === id);
    const newItem = humanList[idx]
          newItem.name = name
    const newArr = [...humanList]
          newArr[idx] = newItem
        return {
          humanList: newArr
        }
    
    });
    
  };

  render() {
    let showHumans = this.state.toggle ? this.state.humanList.map(h => <Human {...h} key={h.id} onDelete={() => this.onDelete(h.id)} onChangeName={(e)=> this.onChangeName(e.target.value, h.id)} />) : null;

    return (
      <div className="App container">
        <button className="toggleBtn" onClick={this.toggleHumans}>Show humans</button>
        <CreateHumanForm onSubmitForm={(e) => this.onSubmitForm(e, e.target.humanName.value, e.target.humanAge.value, e.target.humanProf.value) } />
        
      <div className="humans">     
        {showHumans}
      </div> 
    </div>
    )
  }
}

