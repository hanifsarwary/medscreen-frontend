import React from 'react';
import { Route } from 'react-router-dom';

import { PublicLayout } from 'components/layouts';

const PublicRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props => (
			<PublicLayout>
				<Component {...props} />
			</PublicLayout>
		)}
	/>
);

export default PublicRoute;
