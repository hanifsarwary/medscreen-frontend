/* eslint-disable no-console */
/* eslint-disable no-useless-constructor */
import React from 'react';
import cele from '../../assets/images/icons/cle.png';
import { Card, Grid, Link } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUserViaEmailAction } from 'pages/login/containers/actions';

class UserVerificationPage extends React.Component {
  constructor(props) {
    super(props);
  }

  gotoLoginPage = () => {
    this.props.history.push('/login');
  };

  componentDidMount() {
    if (this.props.location.search) {
      this.props.loginUserViaEmailAction(this.props.location.search, this.props.history);
    }
  }
  render() {
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignContent="center"
        style={{ height: '100vh', backgroundColor: 'grey' }}
      >
        {this.props.user_verification_status ? (
          <Card style={{ width: '45rem', height: '25rem', color: 'green' }}>
            <Grid container direction="column" alignItems="center" style={{ height: '45rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-end', padding: '30px 0px' }}>
                <h1 style={{ margin: '0', paddingRight: '5px', color: 'green' }}>Congratulations </h1>
                <img alt="logo" src={cele} width={50} height={50} />
              </div>
              <p>Your account has been activited successfully</p>
              <div style={{ display: 'flex', fontWeight: 'bold' }}>
                <span style={{ marginRight: '5px' }}>Please</span>
                <Link onClick={this.gotoLoginPage}>
                  {' '}
                  <u>Sign in</u>
                </Link>
              </div>
            </Grid>
          </Card>
        ) : (
          ''
        )}
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  const { user_verification_status, error } = state.USER_AUTH;
  return { user_verification_status, error };
};

const mapDispatchToProps = {
  loginUserViaEmailAction,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserVerificationPage));
