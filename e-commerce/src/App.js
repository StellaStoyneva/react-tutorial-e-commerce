import "./App.css";
import { Home, Shop, AuthenticationPage } from "./pages";
import { Switch, Route, Redirect  } from "react-router-dom";
import Header from "./navigation/Header/Header";
import { auth, createUserProfileDocument } from "./firebase/utils";
import React, { useEffect } from "react";
import { setCurrentUser } from './redux/user/user.actions';
import { connect } from 'react-redux';

function App( {setCurrentUser, currentUser } ) {

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      console.log('userAuth', userAuth);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        console.log('userRef', userRef);

        userRef?.onSnapshot(snapShot => {
        setCurrentUser({
            id: snapShot.id,
              ...snapShot.data()
            }, 
        );
      })
    }
      //setCurrentUser(userAuth);
  })
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
            path='/signin'
            render={() =>
              currentUser ? (
                <Redirect to='/' />
              ) : (
                <AuthenticationPage />
              )
            }
          />
      </Switch>
    </div>
  );
}

const mapStateToProps = ({ user }) => ({
  currentUser: user?.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  null,
  mapDispatchToProps,
  mapStateToProps,
)(App);
