import React from "react";
import './MenuNav.scss'
import { NavLink } from 'react-router-dom'


import MenuNavList from "./MenuNavList/MenuNavList";


const MenuNav = () => {
  return (
    <header className="header">
      <div className="MenuNav container">
        <div className="logo">
          <NavLink to="/" >
             Todo app
          </NavLink>          
        </div>
        <MenuNavList />
      </div>
    </header>
  );
};

export default MenuNav;
