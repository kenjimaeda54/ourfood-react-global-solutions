import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from '../pages/home';
import { Reward } from '../pages/reward';
import { About } from '../pages/about';
import { Donation } from '../pages/donation';
import { FieldDonation } from '../pages/field_donation';
import { Profile } from '../pages/profile';
import { ProfileDonation } from '../pages/profile_donation';
import { RegisterCompany } from '../pages/register_company';

export function AuthRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/recompensa" component={Reward} />
      <Route exact path="/sobre" component={About} />
      <Route exact path="/doacao" component={Donation} />
      <Route exact path="/doacao/formulario" component={FieldDonation} />
      <Route exact path="/perfil" component={Profile} />
      <Route exact path="/perfil/doacao" component={ProfileDonation} />
      <Route exact path="/cadastro/companhia" component={RegisterCompany} />
    </Switch>
  );
}
