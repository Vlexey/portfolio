import React, { Component } from "react";
import { ItemContainer } from "./ItemContainer/ItemContainer";
import { AddItemForm } from "./AddItemForm/AddItemForm";

export class Content extends Component {
  newId = 10;

  state = {
    todoList: []
  };

  createListItem= (label) => {
    return {
      id: this.newId++,
      label,
      likesCount: false,
      important: false
    }
  }

  addItem = (val) => {
      const oldList = [...this.state.todoList]
      const newItem = this.createListItem(val)
      const newList = [...oldList, newItem]
      this.setState({todoList: newList})
  }

  delItem = (id) => {
    this.setState(({todoList}) => {
      const idx = todoList.findIndex(el => el.id === id)
      const newList = [
        ...todoList.slice(0, idx),
        ...todoList.slice(idx + 1)
      ]
      return {
        todoList: newList
      }
    })
  }

  likeItem = (id) => {
    this.setState(({todoList}) => {
      const idx = todoList.findIndex(el => el.id === id)
      const clone = [...todoList]
            clone[idx].likesCount = !clone[idx].likesCount;
      const newList = [...clone]
      return {
        todoList: newList
      }
    })
  }

  importantToggle = (id) => {
    this.setState(({todoList}) => {
      const idx = todoList.findIndex(el => el.id === id)
      const clone = [...todoList]
            clone[idx].important = !clone[idx].important
      const newList = [...clone]
      return {
        todoList: newList
      }
    })
  }

  render() {   
    const lengthList = this.state.todoList.length;

    const content = this.state.todoList.map(el => (
      <ItemContainer key={el.id} {...el}
                     delItem={ () => this.delItem(el.id) }
                     likeItem={() => this.likeItem(el.id)}
                     importantToggle={() => this.importantToggle(el.id)}
                    />
    ))
    const defaultTitle = <h5 className="text-center">Please add new task</h5>
    const toggleContent = lengthList < 1 ? defaultTitle : content
    const itemsCount = lengthList < 1 ?  null :<i>Total contest:  <b>{this.state.todoList.length}</b> </i>
    
    return (
      <section className="container py-3">
        <div className="d-flex justify-content-between align-items-baseline">
          <h3>Todo List</h3>
          {itemsCount}
        </div>
        <hr />
        <div className="bg-light py-3 px-3">
          {toggleContent}
        </div>
        <hr/>
        <div className="bg-light py-3 px-3">
          <AddItemForm addItem= {this.addItem} />
        </div>
      </section>
    );
  }
}
