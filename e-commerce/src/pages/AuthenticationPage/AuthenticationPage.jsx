import React from 'react'
import { SignInForm, SignUpForm } from '../../components'
import './sign-in-and-sign-up.styles.scss'

export function AuthenticationPage() {
    return (
        <div className='sign-in-and-sign-up '>
            <SignInForm/>
            <SignUpForm/>
        </div>
    )
}
