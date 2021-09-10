import React, { useState } from "react";
import { FormInput } from "../FormInput";
import { CustomButton } from "../CustomButton";
import "./styles.js";
import { SignInContainer, SignInTitle, ButtonsBarContainer } from "./styles";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";
import { useDispatch } from "react-redux";

function SignInForm() {
  const dispatch = useDispatch();
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const resetInputFields = () => {
    setCredentials({ email: "", password: "" });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    dispatch(emailSignInStart({ email, password }));
    resetInputFields();
  };

  const changeHandler = (event) => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={submitHandler}>
        <FormInput
          name="email"
          type="email"
          handleChange={changeHandler}
          value={email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={changeHandler}
          label="password"
          required
        />
        <ButtonsBarContainer>
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton
            type="button"
            onClick={() => dispatch(googleSignInStart())}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
}

export default SignInForm;
