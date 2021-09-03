import React from 'react'
import { SignInForm, SignUpForm } from '../../components'
import { SignInAndSignUpContainer } from './styles';

export function AuthenticationPage() {
    return (
        <SignInAndSignUpContainer>
            <SignInForm/>
            <SignUpForm/>
        </SignInAndSignUpContainer>
    )
}
