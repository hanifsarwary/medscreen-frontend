import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { refreshLoginFromLocalStorageAction, callService } from 'pages/login/containers';
import Routes from 'components/routes';
import { Loader } from 'components/loaders';
import 'owl.carousel';

class App extends Component {
  componentDidMount() {
    this.props.refreshLoginFromLocalStorageAction();
    // this.props.callService();
  }

  render() {
    const { is_loading } = this.props;
    return <BrowserRouter>{is_loading ? <Loader open={is_loading} /> : <Routes />}</BrowserRouter>;
  }
}

const mapStateToProps = (state) => {
  const { is_loading } = state.LOADER;
  return { is_loading };
};
const mapDispatchToProps = { refreshLoginFromLocalStorageAction, callService };

export default connect(mapStateToProps, mapDispatchToProps)(App);
