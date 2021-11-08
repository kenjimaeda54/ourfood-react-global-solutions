import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from '../pages/home';
import { Reward } from '../pages/reward';
import { About } from '../pages/about';
import { Login } from '../pages/login';

export function AppRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/recompensa" component={Reward} />
      <Route path="/sobre" component={About} />
      <Route path="/login" component={Login} />
    </Switch>
  );
}
