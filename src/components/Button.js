import React from 'react';
import './Button.css'

const Button = (props) => {
    return (
        <button onClick={props.switch} className="btn">{props.text}</button>
    );
}

export default Button;