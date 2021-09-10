import React, { useState } from "react";
import { FormInput } from "../FormInput";
import { CustomButton } from "../CustomButton";
import "./styles.js";
import { connect } from "react-redux";
import { SignInContainer, SignInTitle, ButtonsBarContainer } from "./styles";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

function SignInForm({ emailSignInStart, googleSignInStart }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const resetInputFields = () => {
    setEmail("");
    setPassword("");
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    emailSignInStart(email, password);
    resetInputFields();
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
          name="email"
          type="email"
          handleChange={emailChangeHandler}
          value={email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={passwordChangeHandler}
          label="password"
          required
        />
        <ButtonsBarContainer>
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignInForm);
