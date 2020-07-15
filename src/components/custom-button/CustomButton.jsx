import React from 'react'
import './custombutton.scss'

export const CustomButton = ({ children, ...otherProps}) => {
    return (
        <button className='custom-button' {...otherProps}>
            {children}
        </button>
    );
}
