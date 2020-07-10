import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import { Avatar, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, TextField, Typography,} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {withStyles} from '@material-ui/core/styles';

import {loginUserAction} from 'pages/login/containers';
import {loaderOpenAction} from 'components/loaders/components';

const styles = (theme) => ({
    paper: {
        marginTop: theme.spacing(8),
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
        margin: theme.spacing(3, 0, 2),
    },
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
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    handleSubmit = () => {
        const {username, password, remember_me} = this.state;
        const payload = {
            username,
            password,
            remember_me,
        };
        this.props.loaderOpenAction();
        this.props.loginUserAction(payload, this.props.history);
    };

    render() {
        const {username, password, remember_me} = this.state;
        const {classes, error} = this.props;
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                {error && <h5>{error}</h5>}
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5"> Sign in </Typography>
                    <form className={classes.form} onSubmit={this.handleSubmit}>
                        <TextField error={error} fullWidth label="Username" id="username"
                            name="username" value={username} onChange={this.handleChange} required placeholder="Username"
                            margin="normal" helperText="Please enter a username without spaces" variant="outlined"
                            InputLabelProps={{ shrink: true }} autoFocus/>

                        <TextField error={error} fullWidth label="Password" id="password"
                            name="password" value={password} onChange={this.handleChange} required placeholder="Password"
                            margin="normal" helperText="Please enter a password of minimum 8 characters" variant="outlined"
                            InputLabelProps={{ shrink: true }} type="password"/>

                        <FormControlLabel control={<Checkbox value="remember" color="primary"/>} label="Remember me"/>
                        <Button variant="contained" color="primary" type="submit" className={classes.submit} fullWidth>
                            Login
                        </Button>

                        <Grid container>
                            <Grid item xs>
                                <Link to="/" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/register" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <br/><br/><br/>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    const {error} = state.USER_AUTH;
    return {error};
};

const mapDispatchToProps = {loaderOpenAction, loginUserAction};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(LoginPage));
