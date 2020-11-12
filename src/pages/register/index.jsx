import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Avatar, Button, Container, CssBaseline, Grid, TextField, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { withStyles } from '@material-ui/core/styles';

import { loaderOpenAction } from 'components/loaders/components';
import { registerUserAction } from 'pages/register/containers';
import { Banner } from 'helpers';

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
			},
			errors: null,
		};
	}

	handleChange = event => {
		const { name, value } = event.target;
		const { user } = this.state;
		this.setState({
			user: {
				...user,
				[name]: value,
			},
		});
	};

	validateForm = () => {
		// const requiredFields = ['usermame', 'email', 'password', 'password_confirmation'];
	};

	handleSubmit = () => {
		this.validateForm();
		const { user } = this.state;
		this.props.loaderOpenAction();
		this.props.registerUserAction(user, this.props.history);
	};

	render() {
		const { user, errors } = this.state;
    const { classes, error } = this.props;
		return (
      <Fragment>
        <Banner />
        <Container component="main" maxWidth="sm">
          <CssBaseline />
          {error && <h5>{error}</h5>}
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
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="address"
                    name="address"
                    variant="outlined"
                    label="Address"
                    className={classes.root}
                    onChange={this.handleChange}
                    value={user.address}
                    multiline
                    rowsMax={2}
                    fullWidth
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
      </Fragment>
    );
	}
}

const mapStateToProps = state => {
	const { error } = state.USER_REGISTER;
	return { error };
};

const mapDispatchToProps = { loaderOpenAction, registerUserAction };

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(RegisterPage));
