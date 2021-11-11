import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { RegisterProfile } from '../pages/register_perfil';
import { Home } from '../pages/home';
import { Reward } from '../pages/reward';
import { About } from '../pages/about';
import { Login } from '../pages/login';
import { Donation } from '../pages/donation';

export function AppRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/recompensa" component={Reward} />
      <Route path="/sobre" component={About} />
      <Route path="/login" component={Login} />
      <Route path="/cadastro" component={RegisterProfile} />
      <Route path="/doacao" component={Donation} />
    </Switch>
  );
}
