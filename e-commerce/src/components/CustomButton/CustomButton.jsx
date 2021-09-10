import React from 'react';
import { CustomButtonContainer } from './styles';

export const CustomButton = ({ children, ...props }) => (
    <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
  );
