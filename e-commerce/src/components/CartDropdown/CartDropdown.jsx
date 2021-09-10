import React from "react";
import CartItem from "../CartItem/CartItem";
import "./styles.js";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { useHistory } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions.js";
import { useSelector, useDispatch } from "react-redux";

import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer,
} from "./styles";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const history = useHistory();
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropdownButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
