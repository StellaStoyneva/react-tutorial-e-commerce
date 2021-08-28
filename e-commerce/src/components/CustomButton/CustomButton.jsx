import React from 'react';
import './custom-button.styles.scss'

export function CustomButton({children,  isGoogleSignIn,  inverted, ...props}) {
    return (
        <button  className={`${inverted ? 'inverted' : ''} ${
            isGoogleSignIn ? 'google-sign-in' : ''
          } custom-button`} {...props}>
            {children}
        </button>
    )
}
