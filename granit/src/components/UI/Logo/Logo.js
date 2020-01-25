import React from 'react';
import  logo from './logo.svg'
import './Logo.scss'

// props: invert: boolean

const Logo = (props) => {
    const cls = ['Logo'];
    if(props.invert) {
        cls.push('Logo__invert')
    }

    return (
        <div className={cls.join(' ')}>
            <img src={`${logo}`} alt="Granit" width="40px" height="40px" />
            <div className="Logo__container">
                <b className='Logo__name'>Granit</b>
                <div className="Logo__subtitle">Доставка нерудных материалов</div>
            </div>

        </div>
    );
};

export default Logo;
