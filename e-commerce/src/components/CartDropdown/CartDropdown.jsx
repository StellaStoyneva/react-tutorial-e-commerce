import React from 'react';

import {CustomButton} from '../CustomButton';

import './cart-dropdown.styles.scss';

export const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items' />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);
