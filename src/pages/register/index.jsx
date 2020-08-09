import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Avatar, Button, Container, CssBaseline, Grid, TextField, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { withStyles } from '@material-ui/core/styles';

import { loaderOpenAction } from 'components/loaders/components';
import { registerUserAction } from 'pages/register/containers';

const styles = theme => ({
	paper: {
		marginTop: theme.spacing(15),
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
		margin: theme.spacing(3, 0, 2),
	},
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
		const requiredFields = ['usermame', 'email', 'password', 'password_confirmation'];
	};

	handleSubmit = () => {
		this.validateForm();
		const { user } = this.state;
		this.props.loaderOpenAction();
		this.props.loginUserAction(user, this.props.history);
	};

	render() {
		const { user, errors } = this.state;
		const { classes, error } = this.props;

		return (
			<Container component='main' maxWidth='xs'>
				<CssBaseline />
				{error && <h5>{error}</h5>}
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>
						Sign up
					</Typography>
					<form className={classes.form} onSubmit={this.handleSubmit}>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField
									id='firstName'
									name='firstName'
									variant='outlined'
									label='First Name'
									onChange={this.handleChange}
									value={user.firstName}
									fullWidth
									autoFocus
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									id='lastName'
									name='lastName'
									variant='outlined'
									label='Last Name'
									onChange={this.handleChange}
									value={user.lastName}
									fullWidth
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									id='email'
									name='email'
									variant='outlined'
									label='Email Address'
									onChange={this.handleChange}
									value={user.email}
									error={errors}
									helperText={errors && 'Email can not be empty'}
									required
									fullWidth
									type='email'
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									id='username'
									name='username'
									variant='outlined'
									label='Username'
									onChange={this.handleChange}
									value={user.username}
									required
									fullWidth
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									id='phone'
									name='phone'
									variant='outlined'
									label='Phone'
									onChange={this.handleChange}
									value={user.phone}
									fullWidth
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									id='address'
									name='address'
									variant='outlined'
									label='Address'
									onChange={this.handleChange}
									value={user.address}
									multiline
									fullWidth
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									id='password'
									name='password'
									label='Password'
									variant='outlined'
									onChange={this.handleChange}
									value={user.password}
									required
									fullWidth
									type='password'
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									id='password_confirmation'
									name='password_confirmation'
									label='Password Confirmation'
									variant='outlined'
									onChange={this.handleChange}
									value={user.password_confirmation}
									required
									fullWidth
									type='password'
								/>
							</Grid>
						</Grid>

						<Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
							Sign Up
						</Button>
						<Grid container justify='flex-end'>
							<Grid item>
								<Link to='/login' variant='body2'>
									Already have an account? Sign in
								</Link>
							</Grid>
						</Grid>
					</form>
				</div>
				<br />
				<br />
				<br />
			</Container>
		);
	}
}

const mapStateToProps = state => {
	const { error } = state.USER_REGISTER;
	return { error };
};

const mapDispatchToProps = { loaderOpenAction, registerUserAction };

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(RegisterPage));
