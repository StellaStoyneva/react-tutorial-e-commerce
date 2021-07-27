import "./App.css";
import { Home, Shop, AuthenticationPage } from "./pages";
import { Switch, Route } from "react-router-dom";
import {Header} from './navigation'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={AuthenticationPage} />
      </Switch>
    </div>
  );
}

export default App;
