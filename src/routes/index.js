// Dependencies
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Pages
import Home from '../pages/Home';
import Login from '../pages/Login';
import AddClient from '../pages/AddClient';

export default function App() {
  const { token } = useSelector((state) => state.auth);

  return (
    <Router basename="/">
      {!token ? (
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
        </Switch>
      ) : (
        <Switch>
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/addclient">
            <AddClient />
          </Route>
        </Switch>
      )}
    </Router>
  );
}
