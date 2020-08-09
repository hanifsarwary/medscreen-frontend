import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Routes from 'components/routes';
import { Loader } from 'components/loaders';

class App extends Component {
  render() {
    const { is_loading } = this.props;
    return <BrowserRouter>{is_loading ? <Loader open={is_loading} /> : <Routes />}</BrowserRouter>;
  }
}

const mapStateToProps = (state) => {
  const { is_loading } = state.LOADER;
  return { is_loading };
};

export default connect(mapStateToProps)(App);
