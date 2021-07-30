import "./App.css";
import { Home, Shop, AuthenticationPage } from "./pages";
import { Switch, Route } from "react-router-dom";
import { Header } from "./navigation";
import { auth, createUserProfileDocument } from "./firebase/utils";
import React, { useState, useEffect } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
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
      setCurrentUser(userAuth);
  })
    return unsubscribeFromAuth;
  }, []);

  useEffect(() => {
console.log(currentUser);
  },[setCurrentUser])

  return (
    <div>
      <Header currentUser={currentUser}/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={AuthenticationPage} />
      </Switch>
    </div>
  );
}

export default App;
