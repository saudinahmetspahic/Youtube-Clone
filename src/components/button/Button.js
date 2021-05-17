import React from 'react';
import './Button.css';

function Button({ shrink, children }) {

    return (
        <div className={shrink ? "button shrinked" : "button"}>
            {children}
        </div>
    )
}

export default Button
