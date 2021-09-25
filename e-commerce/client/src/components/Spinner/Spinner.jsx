import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./styles";

export function Spinner() {
  return (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
}
