import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { css } from "emotion";
import { Avatar, Button, Container, CssBaseline, Grid, TextField, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Alert} from '@material-ui/lab';
import { rgbToHex, withStyles } from '@material-ui/core/styles';
import Drawer from 'react-drag-drawer';
import { loaderOpenAction } from 'components/loaders/components';
import { registerUserAction } from 'pages/register/containers';
import { backGroundPictureAction } from 'pages/careers/containers/actions';
import { Banner } from 'helpers';

const modal = css`
  position: absolute;
  top: 200px;
  background-color: white;
  padding: 20px 20px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

const styles = theme => ({
  "@global": {
    body: {
      fontFamily: "Source Sans Pro, sans-serif !important",
      fontSize: "15px"
    }
  },
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
		marginTop: theme.spacing(3),
  },
	submit: {
    fontSize: '14px',
    margin: theme.spacing(3, 0, 2),
    padding: theme.spacing(2, 0)
  },
  root: {
    "& .MuiFormLabel-root": {
      padding: theme.spacing(0, 0)
    },
    "& .MuiOutlinedInput-root": {
      fontSize: '16px',
    },
    "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
      fontSize: '16px',
    },
    '& label.Mui-focused': {
      fontSize: '16px',
    },
    '& .MuiInputBase-root': {
      '& input': {
        height: '38px',
        paddingTop: '5px',
        paddingBottom: '5px',
        border: 'none',
        outline: 'none'
      },
      '& textarea': {
        border: 'none',
        outline: 'none'
      }
    }
  }
});

class RegisterPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user: {
				firstName: '',
				lastName: '',
				username: '',
				email: '',
				phone: '',
        address: '',
				password: '',
				password_confirmation: '',
        address_line_one: '',
        address_line_two: '',
        city: '',
        state: '',
        zip_code: ''
			},
			errors: null,
		};
	}

	handleChange = event => {
		const { name, value } = event.target;
		const { user } = this.state;
		this.setState({
      open: false,
			user: {
				...user,
				[name]: value,
			},
		});
	};

	validateForm = () => {
		// const requiredFields = ['usermame', 'email', 'password', 'password_confirmation'];
	};

	handleSubmit = (event) => {
    event.preventDefault();
    const { user } = this.state;
    const address =  user.address_line_one + ' ' + user.address_line_two + ' ' + user.city + ' ' + user.state + ' ' + user.zip_code;
    user.address = address;
		// this.props.loaderOpenAction();
		this.props.registerUserAction(user, this.props.history);
  };
  
  toggle = () => {
    this.setState({ open: !this.state.open });
  };

  componentDidMount() {
    this.props.backGroundPictureAction('appointment_page');
  }

	render() {
		const { user, errors } = this.state;
    const { classes, error, successMsg, backgroundImage } = this.props;
		return (
      <Fragment>
        <Banner imgUrl={backgroundImage}/>
        <Container component="main" maxWidth="sm">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <form className={classes.form} onSubmit={this.handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="firstName"
                    name="firstName"
                    variant="outlined"
                    label="First Name"
                    className={classes.root}
                    onChange={this.handleChange}
                    value={user.firstName}
                    fullWidth
                    autoFocus
                    required
                    InputProps={{ className: classes.root }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="lastName"
                    name="lastName"
                    variant="outlined"
                    label="Last Name"
                    className={classes.root}
                    onChange={this.handleChange}
                    value={user.lastName}
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="email"
                    name="email"
                    variant="outlined"
                    label="Email Address"
                    className={classes.root}
                    onChange={this.handleChange}
                    value={user.email}
                    error={errors}
                    helperText={errors && 'Email can not be empty'}
                    required
                    fullWidth
                    type="email"
                  />
                  {error && <small style={{color: 'red'}}>{error.email}</small>}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="username"
                    name="username"
                    variant="outlined"
                    label="Username"
                    className={classes.root}
                    onChange={this.handleChange}
                    value={user.username}
                    required
                    fullWidth
                  />
                  {error && <small style={{color: 'red'}}>{error.username}</small>}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="phone"
                    name="phone"
                    variant="outlined"
                    label="Phone"
                    className={classes.root}
                    onChange={this.handleChange}
                    value={user.phone}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="address_line_one"
                    name="address_line_one"
                    variant="outlined"
                    label="Address Line 1"
                    className={classes.root}
                    onChange={this.handleChange}
                    value={user.address_line_one}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="address_line_two"
                    name="address_line_two"
                    variant="outlined"
                    label="Address Line 2"
                    className={classes.root}
                    onChange={this.handleChange}
                    value={user.address_line_two}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="city"
                    name="city"
                    variant="outlined"
                    label="City"
                    className={classes.root}
                    onChange={this.handleChange}
                    value={user.city}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="state"
                    name="state"
                    variant="outlined"
                    label="State"
                    className={classes.root}
                    onChange={this.handleChange}
                    value={user.state}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="zip_code"
                    name="zip_code"
                    variant="outlined"
                    label="Zip Code"
                    className={classes.root}
                    onChange={this.handleChange}
                    value={user.zip_code}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="password"
                    name="password"
                    label="Password"
                    variant="outlined"
                    className={classes.root}
                    onChange={this.handleChange}
                    value={user.password}
                    required
                    fullWidth
                    type="password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="password_confirmation"
                    name="password_confirmation"
                    label="Password Confirmation"
                    variant="outlined"
                    className={classes.root}
                    onChange={this.handleChange}
                    value={user.password_confirmation}
                    required
                    fullWidth
                    type="password"
                  />
                </Grid>
              </Grid>

              <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                Sign Up
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link to="/login" variant="body2" style={{fontSize: '12px'}}> Already have an account? Sign in </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <br />
          <br />
          <br />
        </Container>
        <Drawer open={successMsg}
                modalElementClass={modal}
                onRequestClose={this.toggle}>
            <Grid container direction="column" style={{textAlign: 'center'}} justify="flex-center">
              <Alert style={{fontSize: '16px', }} severity="success">Congratulations, your account has been successfully created</Alert>
              <Grid item style={{marginTop: '25px'}}>
                <p variant="success" style={{fontSize: '16px', color: 'rgb(30, 70, 32)'}}>Plese check your email.</p>
              </Grid>
              <Link to="/home" style={{marginTop: '12px'}}class="btn success-btn">Continue</Link>
            </Grid>
        </Drawer>
      </Fragment>
    );
	}
}

const mapStateToProps = state => {
  const { error, successMsg } = state.USER_REGISTER;
  const { backgroundImage } = state.CAREERS;
	return { error, backgroundImage, successMsg };
};

const mapDispatchToProps = { loaderOpenAction, backGroundPictureAction, registerUserAction };

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(RegisterPage));
