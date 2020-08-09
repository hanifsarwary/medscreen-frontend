import React, { Fragment } from 'react';

import Footer from 'components/footer';
import Header from 'components/header';

export const PrivateLayout = ({ children }) => (
	<Fragment>
		<Header />
			{children}
		<Footer />
	</Fragment>
);
