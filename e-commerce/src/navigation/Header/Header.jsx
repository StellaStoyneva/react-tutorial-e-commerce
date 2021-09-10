import React from "react";
import "./styles.js";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../../components/CartIcon/CartIcon";
import CartDropdown from "../../components/CartDropdown/CartDropdown";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./styles";
import { signOutStart } from "../../redux/user/user.actions";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartHidden);
  const dispatch = useDispatch();
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => dispatch(signOutStart())}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

export default Header;
