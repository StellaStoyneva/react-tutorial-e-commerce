import React, {useState} from 'react';
import { FormInput} from '../FormInput'
    import {CustomButton} from '../CustomButton'
import './sign-in.styles.scss';

export function SignInForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const resetInputFields = ()=>{
        setEmail('');
        setPassword('')
    };

    const submitHandler = event => {
      event.preventDefault();
      
      resetInputFields();
    };
  
    const emailChangeHandler = (event) => {
     setEmail(event.target.value)
    };

    const passwordChangeHandler = (event) => {
     setPassword(event.target.value)
    };
  
    
      return (
        <div className='sign-in'>
          <h2 className='title'>I already have an account</h2>
          <span>Sign in with your email and password</span>
  
          <form onSubmit={submitHandler}>
            <FormInput
              name='email'
              type='email'
              onChange={emailChangeHandler}
              value={email}
              label='email'
              required
            />
            <FormInput
              name='password'
              type='password'
              value={password}
              onChange={passwordChangeHandler}
              label='password'
              required
            />
            <CustomButton type='submit'> Sign in </CustomButton>
          </form>
        </div>
      );
    
      }

     