import React, { Component } from "react";
import "./App.scss";
import "./index.scss";

import MenuNav from "./components/MenuNav/MenuNav";
import {CreateTodoForm} from "./components/CreateTodoForm/CreateTodoForm";
import TodoList from "./components/TodoList/TodoList";

import { Route } from 'react-router-dom'

export default class App extends Component {

  basicId = 50;

  state = {
    todoList: [ ]
  };

  createTask(task, howDays) {
      return {
          id: this.basicId++,
          task,
          howDays,
          important: false,
          done: false
      }
  }

  addTask = (values) => {
    const newTask = this.createTask(values.task, values.howDays);

    this.setState(({todoList}) => {
        const newList = [
            ...todoList,
            newTask
        ];
        return {
            todoList: newList
        }
    })
  }
  

  onDone = (id) => {
    this.setState(({todoList}) => { 
        const idx = todoList.findIndex((el) => el.id === id);
        const oldList = todoList[idx];
        const newItem = { ...oldList, done: !oldList.done, important: false };
        const newList = [
            ...todoList.slice(0, idx),
            newItem,
            ...todoList.slice(idx + 1)
        ];
        return {
            todoList: newList
        }
    })
  }
  onImportant = (id) => {
    this.setState(({todoList}) => { 
        const idx = todoList.findIndex((el) => el.id === id);
        const oldList = todoList[idx];
        const newItem = { ...oldList, important: !oldList.important, done: false };
        const newList = [
            ...todoList.slice(0, idx),
            newItem,
            ...todoList.slice(idx + 1)
        ];
        return {
            todoList: newList
        }
    })
  }
  onDelete = (id) => {
    this.setState(({todoList}) => {
        const idx = todoList.findIndex((el) => el.id === id);
        const newList = [...todoList.slice(0,idx),
                          ...todoList.slice(idx + 1)
                      ];
          return {
              todoList: newList
          }
    })
}

  render() {      
    return (
      <div className="layout">
        <MenuNav />
        <Route path="/" exact render={()=> 
            <TodoList 
                todoList={this.state.todoList}
                onDone={this.onDone}
                onImportant={this.onImportant} 
                onDelete={this.onDelete}           
            />            
            }
         />
         <Route path="/newtask" exact render={()=> 

                <CreateTodoForm addTask={this.addTask} />
            }
         />
        
        
      </div>
    );
  }
}
