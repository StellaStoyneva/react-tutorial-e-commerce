import React, { useState } from "react";
import { FormInput } from "../FormInput";
import { CustomButton } from "../CustomButton";
import "./styles.js";
import {auth, signInWithGoogle} from '../../firebase/utils'
import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './styles';

export function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 // const {history} = useHistory();

  const resetInputFields = () => {
    setEmail("");
    setPassword("");
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email,password);
     // history.push('/')
    resetInputFields();

    } catch (error) {
      console.log(error, 'ERROR');
    }

  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  return (
    <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={submitHandler}>
          <FormInput
            name='email'
            type='email'
            handleChange={emailChangeHandler}
            value={email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={password}
            handleChange={passwordChangeHandler}
            label='password'
            required
          />
          <ButtonsBarContainer>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
  );
}
