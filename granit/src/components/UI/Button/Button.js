import React from 'react';
import './Button.scss'


// button props: orange or callback === boolean
// disabled === boolean

const Button = (props) => {

    const cls = ['Button']
    if(props.callback) {
        cls.push('Button__callback')
    }
    if(props.orange) {
        cls.push('Button__orange')
    }
    if(props.sale) {
        cls.push('Button__sale')
    }

    return (
        <button
            onClick={props.onClick}
            disabled={props.disabled}
            className={cls.join(' ')}
        >
            {props.children}
        </button>
    );
};

export default Button;
