import React, {useState} from 'react';

import {FormInput} from '../FormInput';
import {CustomButton} from '../CustomButton';
import { auth, createUserProfileDocument } from '../../firebase/utils';
import { SignUpContainer, SignUpTitle } from './styles';

export function SignUpForm () {
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
  
    const resetInputFields = ()=>{
        setDisplayName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }

  const submitHandler = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });

      resetInputFields();
    } catch (error) {
      console.error(error);
    }
  };

  const displayNameChangeHandler = event => {
    event.preventDefault()

    setDisplayName(event.target.value)    
  };

  const emailChangeHandler = event => {
      event.preventDefault()
    setEmail(event.target.value)    
  };

  const passwordChangeHandler = event => {
    event.preventDefault()

    setPassword(event.target.value)    
  };

  const confirmPasswordChangeHandler = event => {
    event.preventDefault()

    setConfirmPassword(event.target.value)    
  };

    return (
      <SignUpContainer>
      <SignUpTitle>I do not have a account</SignUpTitle>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={submitHandler}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={displayNameChangeHandler}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={emailChangeHandler}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={passwordChangeHandler}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={confirmPasswordChangeHandler}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </SignUpContainer>
    );
  }
