import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import PrivateRoute from 'components/routes/PrivateRoute';
import PublicRoute from 'components/routes/PublicRoute';
import PasswordRecoverRoute from 'components/routes/PasswordRecoverRoute';
import { AboutPage, AppointmentsPage, HomePage, 
	LoginPage, RegisterPage, CareerPage, LabServicesPage, 
	ApplyJobForm } from 'pages';

import ResourcesTab from 'components/resources/resources';
import ScrollToTop from 'helpers/scroll';

const Routes = props => {
	return (
		<ScrollToTop>
			<Switch>
				<Redirect exact from='/' to='/home' />
				<PublicRoute path='/home' component={HomePage} />
				<PublicRoute path='/login' component={LoginPage} />
				<PublicRoute path='/register' component={RegisterPage} />
				<PublicRoute path='/about' component={AboutPage} />
				<PublicRoute path='/resources/:index/:visible' component={ResourcesTab} />
				<PublicRoute path='/careers' component={CareerPage} />
				<PublicRoute path='/apply-for-job' component={ApplyJobForm} />
				<PublicRoute path='/services/:id' component={LabServicesPage} />
				<PublicRoute path='/appointments' component={AppointmentsPage} />
				<PasswordRecoverRoute path='/password/reset' component={RegisterPage} />
			</Switch>
		</ScrollToTop>
	);
};

export default Routes;
