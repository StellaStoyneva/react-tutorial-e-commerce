import React, { useState } from "react";
import { FormInput } from "../FormInput";
import { CustomButton } from "../CustomButton";
import "./sign-in.styles.scss";
import {auth, signInWithGoogle} from '../../firebase/utils'
import { useHistory } from "react-router-dom";

export function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {history} = useHistory();

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
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={submitHandler}>
        <FormInput
          name="email"
          type="email"
          onChange={emailChangeHandler}
          value={email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          onChange={passwordChangeHandler}
          label="password"
          required
        />
        <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton type= 'button' onClick={async () =>{await signInWithGoogle(); history.push('/')}} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
      </form>
    </div>
  );
}
