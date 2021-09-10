import React, { useState } from "react";

import { FormInput } from "../FormInput";
import { CustomButton } from "../CustomButton";
import { signUpStart } from "../../redux/user/user.actions";
import { SignUpContainer, SignUpTitle } from "./styles";
import { connect } from "react-redux";

function SignUpForm({ signUpStart }) {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const resetInputFields = () => {
    setDisplayName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    signUpStart({ displayName, email, password });
    resetInputFields();
  };

  const displayNameChangeHandler = (event) => {
    event.preventDefault();

    setDisplayName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    event.preventDefault();

    setPassword(event.target.value);
  };

  const confirmPasswordChangeHandler = (event) => {
    event.preventDefault();

    setConfirmPassword(event.target.value);
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
          onChange={displayNameChangeHandler}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={emailChangeHandler}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={passwordChangeHandler}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={confirmPasswordChangeHandler}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  );
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUpForm);
