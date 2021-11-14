import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { RegisterProfile } from '../pages/register_perfil';
import { Home } from '../pages/home';
import { Reward } from '../pages/reward';
import { About } from '../pages/about';
import { Donation } from '../pages/donation';
import { FieldDonation } from '../pages/field_donation';
import { Profile } from '../pages/profile';

export function AuthRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/recompensa" component={Reward} />
      <Route exact path="/sobre" component={About} />
      <Route exact path="/cadastro" component={RegisterProfile} />
      <Route exact path="/doacao" component={Donation} />
      <Route exact path="/doacao/formulario" component={FieldDonation} />
      <Route exact path="/perfil" component={Profile} />
    </Switch>
  );
}
