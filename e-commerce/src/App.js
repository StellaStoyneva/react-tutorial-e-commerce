import "./App.css";
import { Home, AuthenticationPage } from "./pages";
import Shop from "./pages/Shop/Shop";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./navigation/Header/Header";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selectors";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import { checkUserSession } from "./redux/user/user.actions";

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser)
  
  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch]);

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

export default App;
