import React, { Fragment } from 'react';

import Footer from 'components/footer';
import Header from 'components/header';

export const PublicLayout = ({ children }) => (
  <Fragment>
    <Header />
    {children}
    <Footer />
  </Fragment>
);
