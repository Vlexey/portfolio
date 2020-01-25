import React from 'react';
import Logo from "../UI/Logo/Logo";
import Callback from "../UI/Callback/Callback";
import './Header.scss'
import MenuNav from "../UI/MenuNav/MenuNav";

const Header = () => {
    return (
        <header className='Header'>
            <div className="Header__menu container">
                <div className="Header__wrapper">
                    <Logo />
                    <Callback />
                </div>
                <MenuNav />
            </div>

        </header>
    );
};

export default Header;
