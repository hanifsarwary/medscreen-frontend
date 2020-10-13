import React from 'react';
import { Redirect, Switch } from 'react-router-dom';

import PrivateRoute from 'components/routes/PrivateRoute';
import PublicRoute from 'components/routes/PublicRoute';
import PasswordRecoverRoute from 'components/routes/PasswordRecoverRoute';
import { AboutPage, AppointmentsPage, HomePage, LoginPage, RegisterPage, ResourcesPage, LabServicesPage } from 'pages';

const Routes = props => {
	return (
		<Switch>
			<Redirect exact from='/' to='/home' />
			<PublicRoute path='/home' component={HomePage} />
			<PublicRoute path='/login' component={LoginPage} />
			<PublicRoute path='/register' component={RegisterPage} />
			<PublicRoute path='/about' component={AboutPage} />
			<PublicRoute path='/services/:id' component={LabServicesPage} />
			<PrivateRoute path='/appointments' component={AppointmentsPage} />
			<PasswordRecoverRoute path='/password/reset' component={RegisterPage} />
		</Switch>
	);
};

export default Routes;
