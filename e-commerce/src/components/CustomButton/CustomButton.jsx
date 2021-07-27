import React from 'react';
import './custom-button.styles.scss'

export function CustomButton({children, ...props}) {
    return (
        <button className='custom-button' {...props}>
            {children}
        </button>
    )
}

