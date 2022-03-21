import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Users from "./users/pages/Users";
import NewPlaces from "./places/pages/NewPlace";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true}>
          <Users />
        </Route>

        <Route path="/places/new" exact={true}>
          <NewPlaces />
        </Route>

        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
