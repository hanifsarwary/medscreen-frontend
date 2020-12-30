/* eslint-disable no-console */
/* eslint-disable no-useless-constructor */
import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, Grid, CardHeader, CardActions, CardContent, TextField, Button } from '@material-ui/core';
import { Link, withRouter } from 'react-router-dom';
import { loaderOpenAction } from 'components/loaders/components';
import { sendEmailForResetPasswordAction, changeEmailStatus } from 'pages/resetPassword/container/action';
import Drawer from 'react-drag-drawer';
import { connect } from 'react-redux';
import { CustomPopup } from 'helpers';
import { css } from 'emotion';

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

class EmailSendScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      open: true,
    };
  }

  sendEmail = () => {
    this.props.sendEmailForResetPasswordAction({ email: this.state.email }, this.props.history);
  };

  resetStatus = () => {
    this.props.loaderOpenAction();
    this.props.changeEmailStatus(null, this.props.history);
  };

  toggle = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { classes, status } = this.props;

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
              title="FORGOT YOUR PASSWORD?"
            />
            <CardContent>
              <Grid style={{ height: '15rem' }} container direction="column" justify="center">
                <Grid item>
                  <TextField
                    id="email"
                    name="email"
                    variant="outlined"
                    label="Email Address"
                    className={classes.root}
                    value={this.state.email}
                    onChange={(event) => this.setState({ email: event.target.value })}
                    required
                    fullWidth
                    type="email"
                  />
                </Grid>
                <Grid item container direction="column" alignItems="flex-end" style={{ marginTop: '10px' }}>
                  <Button
                    disabled={!this.state.email}
                    onClick={this.sendEmail}
                    style={{ padding: '10px 20px', fontSize: '12px' }}
                    variant="contained"
                    color="primary"
                  >
                    {' '}
                    Send Email{' '}
                  </Button>
                </Grid>
              </Grid>
            </CardContent>

            <CardActions style={{ backgroundColor: '#3f51b5', padding: '16px' }}>
              <Link to="/login" style={{ color: 'white' }}>
                Back To Login
              </Link>
            </CardActions>
          </Card>
        </Grid>
        {status === 200 ? (
          <Drawer open={true} modalElementClass={modal} onRequestClose={this.toggle}>
            <CustomPopup
              resetStatus={this.resetStatus}
              title="An email message has been sent containing a link to reset the password."
            />
          </Drawer>
        ) : (
          ''
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const { status } = state.RESET_PASSWORD;
  const { error } = state.USER_AUTH;
  return { error, status };
};

const mapDispatchToProps = {
  loaderOpenAction,
  changeEmailStatus,
  sendEmailForResetPasswordAction,
};

export default withStyles(styles)(withRouter(connect(mapStateToProps, mapDispatchToProps)(EmailSendScreen)));

const modal = css`
  position: absolute;
  width: 40rem;
  background-color: white;
  padding: 20px 20px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;
