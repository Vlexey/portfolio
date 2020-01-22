import React from "react";
import "./TodoList.scss";

import TodoListItem from "./TodoListItem/TodoListItem";



const TodoList = (props) => {
  
  return (
    <ul className="TodoList">
     
      {
        props.todoList.length === 0
        ? <h2>Welcome to Todo List</h2> 
        :
        props.todoList.map((el) => {
          return (
            <TodoListItem 
            key={el.id}
            task={el.task}
            howDays={el.howDays}
            important={el.important}
            done={el.done}
            onDone={() => props.onDone(el.id)}
            onImportant={() => props.onImportant(el.id)}
            onDelete={() => props.onDelete(el.id)}
              />
          )
        })
      }
    </ul>
  );
};

export default TodoList;
