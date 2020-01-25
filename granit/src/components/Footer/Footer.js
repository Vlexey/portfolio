import React from 'react';
import Logo from "../UI/Logo/Logo";
import Callback from "../UI/Callback/Callback";
import './Footer.scss'

const Footer = () => {
    return (
        <div className='Footer'>
            <div className="Footer__wrapper container">
                <Logo invert />
                <Callback foot />
            </div>
        </div>
    );
};

export default Footer;
