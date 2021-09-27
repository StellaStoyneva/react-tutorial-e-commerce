import "./App.scss";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./navigation/Header/Header";
import React, { useEffect, lazy, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selectors";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import { checkUserSession } from "./redux/user/user.actions";
import { GlobalStyle } from "./GlobalStyle";
import { Spinner } from "./components";
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'

const Home = lazy(() => import("./pages/Home/Home"));
const AuthenticationPage = lazy(() =>
  import("./pages/AuthenticationPage/AuthenticationPage")
);
const Shop = lazy(() => import("./pages/Shop/Shop"));

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
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
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
}

export default App;
