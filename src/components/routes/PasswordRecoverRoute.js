import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { PublicLayout } from 'components/layouts';

const PasswordRecoverRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props => {
			let queryParams = decodeURI(window.location.search)
				.replace('?', '')
				.split('&')
				.map(param => param.split('='))
				.reduce((values, [key, value]) => {
					values[key] = value;
					return values;
				}, {});
			if (!queryParams) return <Redirect to='/login' />;
			const data = { token: queryParams.token };
			return (
				<PublicLayout>
					validatePasswordResetToken(data).then(response => <Component {...props} />
					).catch(error => {});
				</PublicLayout>
			);
		}}
	/>
);

export default PasswordRecoverRoute;
