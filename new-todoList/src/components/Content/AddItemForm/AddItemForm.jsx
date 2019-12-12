import React, { Component } from 'react';

export class AddItemForm extends Component {

  submitHandler = (e) => {
    e.preventDefault()    
    const newItem = this.props.addItem(e.target.labelName.value)
    e.target.labelName.value = ''
    
    return newItem
  }
  

  render() {
    return (
      <div className="d-flex justify-content-between" onSubmit={this.submitHandler}>
      <form className="input-group mb-3 mt-3 d-flex flex-grow-1">
        <input
          id="labelName"
          type="text"
          className="form-control"
          placeholder="Type to add new task"
          
        />
        <button         
          className="btn btn-outline-secondary"         
          >
          Add
        </button>
      </form>
    </div>
    );
  }
}

export default AddItemForm;
