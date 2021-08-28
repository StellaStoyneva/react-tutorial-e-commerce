import "./App.css";
import { Home, Shop, AuthenticationPage } from "./pages";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./navigation/Header/Header";
import { auth, createUserProfileDocument } from "./firebase/utils";
import React, { useEffect } from "react";
import { setCurrentUser } from "./redux/user";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";

function App({ setCurrentUser, currentUser }) {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      console.log("userAuth", userAuth);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        console.log("userRef", userRef);

        userRef?.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      //setCurrentUser(userAuth);
    });
    return unsubscribeFromAuth;
  }, []);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <AuthenticationPage />
          }
        />
        <Route exact path="/checkout" component={CheckoutPage} />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps, mapStateToProps)(App);
