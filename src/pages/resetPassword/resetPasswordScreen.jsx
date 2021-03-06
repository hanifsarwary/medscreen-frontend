/* eslint-disable no-console */
/* eslint-disable no-useless-constructor */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, Grid, CardHeader, CardActions, CardContent, TextField, Button } from '@material-ui/core';
import { Link, withRouter } from 'react-router-dom';
import { loaderOpenAction } from 'components/loaders/components';
import { resetPasswordAction, changePasswordStatus } from 'pages/resetPassword/container/action';
import Drawer from 'react-drag-drawer';
import { connect } from 'react-redux';
import { CustomPopup } from 'helpers';
import { css } from 'emotion';
import { Fragment } from 'react';

const styles = (theme) => ({
  '@global': {
    body: {
      fontFamily: 'Source Sans Pro, sans-serif !important',
      fontSize: '15px',
    },
  },
  root: {
    '& .MuiFormLabel-root': {
      fontSize: '13px',
      padding: theme.spacing(0, 0),
    },
    '& .MuiOutlinedInput-root': {
      fontSize: '13px',
    },
    '& .MuiInputBase-root': {
      '& input': {
        height: '38px',
        padding: '5px 15px 8px 15px',
        border: 'none',
        outline: 'none',
      },
    },
    '& .MuiFormHelperText-root': {
      fontSize: '10px',
      marginTop: '10px',
    },
    '& .MuiFormHelperText-contained': {
      marginLeft: '0px',
    },
  },
});

class ResetPasswordScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      password: '',
      password1: '',
    };
  }

  resetPassword = () => {
    const data = {
      token: this.props.token,
      password: this.state.password,
      password1: this.state.password1,
    };
    this.props.resetPasswordAction(data, this.props.history);
  };

  resetStatus = () => {
    this.props.loaderOpenAction();
    this.props.changePasswordStatus(null, this.props.history);
  };

  render() {
    const { classes, error, status } = this.props;
    return (
      <Fragment>
        <Grid container direction="row" justify="center" alignContent="center" style={{ height: '100vh' }}>
          <Card style={{ width: '45rem', color: 'green' }}>
            <CardHeader
              style={{
                color: 'white',
                textAlign: 'center',
                backgroundColor: '#3f51b5',
              }}
              title="RESET PASSWORD"
            />
            <CardContent>
              <Grid style={{ height: '25rem' }} container direction="column" justify="center">
                <Grid item>
                  <TextField
                    id="password"
                    name="password"
                    variant="outlined"
                    label="Password"
                    className={classes.root}
                    value={this.state.password}
                    onChange={(event) => this.setState({ password: event.target.value })}
                    required
                    fullWidth
                    type="password"
                  />
                  {this.props.passwordReg.test(this.state.password) ? (
                    ''
                  ) : (
                    <small style={{ color: 'red' }}>
                      Passwords must contain at least eight characters, including one uppercase and one numbers.
                    </small>
                  )}
                </Grid>
                <Grid item style={{ marginTop: '12px' }}>
                  <TextField
                    id="password1"
                    name="password1"
                    variant="outlined"
                    label="Confirm password"
                    className={classes.root}
                    value={this.state.password1}
                    onChange={(event) => this.setState({ password1: event.target.value })}
                    required
                    fullWidth
                    type="password"
                  />
                  {error && <small style={{ color: 'red' }}>{error.error}</small>}
                </Grid>
                <Grid item container direction="column" alignItems="flex-end" style={{ marginTop: '12px' }}>
                  <Button
                    disabled={!this.state.password || !this.state.password1}
                    onClick={this.resetPassword}
                    style={{ padding: '10px 20px', fontSize: '12px' }}
                    variant="contained"
                    color="primary"
                  >
                    {' '}
                    Reset Password{' '}
                  </Button>
                </Grid>
              </Grid>
            </CardContent>

            <CardActions style={{ backgroundColor: '#3f51b5', padding: '16px' }}>
              <Link to="/login" style={{ color: 'white' }}>
                Back to login
              </Link>
            </CardActions>
          </Card>
        </Grid>
        {status === 200 ? (
          <Drawer open={true} modalElementClass={modal}>
            <CustomPopup resetStatus={this.resetStatus} title="Your password has been successfully changed." />
          </Drawer>
        ) : (
          ''
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const { error, status } = state.RESET_PASSWORD;
  const { passwordReg } = state.USER_REGISTER;
  return { error, status, passwordReg };
};

const mapDispatchToProps = {
  loaderOpenAction,
  changePasswordStatus,
  resetPasswordAction,
};

export default withStyles(styles)(withRouter(connect(mapStateToProps, mapDispatchToProps)(ResetPasswordScreen)));

const modal = css`
  position: absolute;
  width: 40rem;
  background-color: white;
  padding: 20px 20px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;
