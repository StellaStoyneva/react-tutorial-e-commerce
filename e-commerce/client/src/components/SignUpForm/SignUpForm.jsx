import React, { useState } from "react";

import { FormInput } from "../FormInput";
import { CustomButton } from "../CustomButton";
import { signUpStart } from "../../redux/user/user.actions";
import { SignUpContainer, SignUpTitle } from "./styles";
import { useDispatch } from "react-redux";

function SignUpForm() {
  const dispatch = useDispatch();
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const resetInputFields = () => {
    setUserCredentials({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    dispatch(signUpStart({ displayName, email, password }));
    resetInputFields();
  };

  const changeHandler = (event) => {
    event.preventDefault();
    const {value, name} = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });

  };

  return (
    <SignUpContainer>
      <SignUpTitle>I do not have a account</SignUpTitle>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={submitHandler}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={changeHandler}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={changeHandler}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={changeHandler}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={changeHandler}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  );
}

export default SignUpForm;
