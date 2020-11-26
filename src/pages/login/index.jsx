import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { backGroundPictureAction } from 'pages/careers/containers/actions';
import { storeAppointmentAction } from 'pages/appointments/containers/actions';

import {
  Avatar,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { loginUserAction, loginUserActionWithAppointment, callService } from 'pages/login/containers';
import { Banner } from 'helpers';
import { loaderOpenAction } from 'components/loaders/components';

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
	submit: {
    fontSize: '14px',
    margin: theme.spacing(2, 0, 2),
    padding: theme.spacing(2, 0)
  },
  "@global": {
    body: {
      fontFamily: "Source Sans Pro, sans-serif !important",
      fontSize: "15px"
    }
  },
  root: {
    "& .MuiFormLabel-root": {
      fontSize: '16px',
      padding: theme.spacing(0, 0)
    },
    "& .MuiOutlinedInput-root": {
      fontSize: '16px',
    },
    '& .MuiInputBase-root': {
      '& input': {
        height: '38px',
        fontSize: '12px',
        padding: '5px 15px',
        border: 'none',
        outline: 'none'
      }
    },
    '& .MuiFormHelperText-root': {
      fontSize: '10px',
      marginTop: '10px'
    },
    '& .MuiFormHelperText-contained': {
      marginLeft: '0px'
    }
  }
});

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      remember_me: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    const { username, password, remember_me } = this.state;
    const payload = {
      username,
      password,
      remember_me,
    };
    this.props.loaderOpenAction();
    if (this.props.storeAppointmentAction) {
      this.props.loginUserActionWithAppointment(payload, this.props.history, this.props.store_appointment);
    } else {
      this.props.loginUserAction(payload, this.props.history);
    }
  };

  componentDidMount() {
    this.props.backGroundPictureAction('appointment_page');
  }

  render() {
    const { username, password } = this.state;
    const { classes, error, backgroundImage } = this.props;
    return (
      <Fragment>
		  <Banner imgUrl={backgroundImage}/>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          {error && <h5>{error}</h5>}
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {' '}
              Sign in{' '}
            </Typography>
            <form className={classes.form} onSubmit={this.handleSubmit}>
              <TextField
                error={error}
                fullWidth
                label="Username"
                id="username"
                name="username"
                value={username}
                className={classes.root}
                onChange={this.handleChange}
                required
                placeholder="Username"
                margin="normal"
                // helperText="Please enter a username without spaces"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                autoFocus
              />

              <TextField
                error={error}
                fullWidth
                label="Password"
                id="password"
                name="password"
                value={password}
                className={classes.root}
                onChange={this.handleChange}
                required
                placeholder="Password"
                margin="normal"
                // helperText="Please enter a password of minimum 8 characters"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                type="password"
              />

              <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
              <Button variant="contained" color="primary" type="submit" className={classes.submit} fullWidth>
                Login
              </Button>

              <Grid container>
                <Grid item xs>
                  <Link to="/" style={{fontSize: '12px'}}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/register" style={{fontSize: '12px'}}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <br />
          <br />
          <br />
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const { error } = state.USER_AUTH;
  const { backgroundImage } = state.CAREERS;
  const { store_appointment } = state.APPOINTMENTS;
  return { error, store_appointment, backgroundImage };
};

const mapDispatchToProps = { loaderOpenAction, loginUserAction,
  loginUserActionWithAppointment,
  callService, backGroundPictureAction,
  storeAppointmentAction };

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(LoginPage));
