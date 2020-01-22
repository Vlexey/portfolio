import React from "react";
import { NavLink } from 'react-router-dom'

const MenuNavList = () => {
  return (
    <nav className="MenuNav__list">
      <NavLink className="MenuNav__item" exact to="/">
        Todo List
      </NavLink>
      <NavLink className="MenuNav__item" to="/newtask" exact>
        Create Task
      </NavLink>
    </nav>
  );
};

export default MenuNavList;
