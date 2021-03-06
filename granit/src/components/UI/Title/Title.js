import React from 'react';
import './Title.scss'

const Title = (props) => {
    return (
        <h2 className='Block__title'>
            {props.children}
        </h2>
    );
};

export default Title;
