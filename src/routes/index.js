// Dependencies
import React from 'react';
// import { useSelector } from 'react-redux';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages
import Home from '../pages/Home';
import Login from '../pages/Login';
import AddClient from '../pages/AddClient';

export default function App() {
  // const user = useSelector(state => state.user);
  // const { signed } = user;
  const signed = false;

  return (
    <Router basename="/">
      {signed ? (
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/addclient">
            <AddClient />
          </Route>
        </Switch>
      ) : (
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      )}
    </Router>
  );
}
