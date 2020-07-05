import React, { Fragment } from 'react';

import Header from 'components/header';
import Footer from 'components/footer';

export const PrivateLayout = ({ children }) => (
  <Fragment>
    <Header />
    {children}
    <Footer />
  </Fragment>
);
