import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { PrivateLayout } from 'components/layouts';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem('access_token') && localStorage.getItem('user') ? (
        <PrivateLayout>
          <Component {...props} />
        </PrivateLayout>
      ) : (
        <Redirect to={{ pathname: '/login/?next=' + props.location.pathname, state: { from: props.location } }} />
      )
    }
  />
);

export default PrivateRoute;
