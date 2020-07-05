import React from 'react';
import { Redirect, Switch } from 'react-router-dom';

import PrivateRoute from 'components/routes/PrivateRoute';
import PublicRoute from 'components/routes/PublicRoute';
import PasswordRecoverRoute from 'components/routes/PasswordRecoverRoute';
import { HomePage, LoginPage, RegisterPage } from 'pages';

const Routes = (props) => {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <PrivateRoute path="/home" component={HomePage} />
      <PublicRoute path="/login" component={LoginPage} />
      <PublicRoute path="/register" component={RegisterPage} />
      <PasswordRecoverRoute path="/password/reset" component={RegisterPage} />
    </Switch>
  );
};

export default Routes;
