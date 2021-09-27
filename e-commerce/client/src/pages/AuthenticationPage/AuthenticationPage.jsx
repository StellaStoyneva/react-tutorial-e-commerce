import React from "react";
import SignInForm from "../../components/SignInForm/SignInForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { SignInAndSignUpContainer } from "./styles";

export default function AuthenticationPage() {
  return (
    <SignInAndSignUpContainer>
      <SignInForm />
      <SignUpForm />
    </SignInAndSignUpContainer>
  );
}
