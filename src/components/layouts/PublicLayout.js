import React, { Fragment } from 'react';

import Footer from 'components/footer';

export const PublicLayout = ({ children }) => (
  <Fragment>
    {children}
    <Footer />
  </Fragment>
);
