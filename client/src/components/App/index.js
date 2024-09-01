import React from "react";
import * as ROUTES from "../../routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "../Navigation";
import ShoppingList from "../ShoppingList";
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";

const App = () => (
  <Router>
    <>
      <Navigation />
      <div className="container">
        <Switch>
          <Route exact path={ROUTES.HOME} component={ShoppingList} />
          <Route path={ROUTES.SIGNUP} component={SignUp} />
          <Route path={ROUTES.SIGNIN} component={SignIn} />
        </Switch>
      </div>
    </>
  </Router>
);

export default App;
