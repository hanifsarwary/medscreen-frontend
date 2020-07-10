import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {AppBar, Button, CssBaseline, Fab, Toolbar, Typography, useScrollTrigger, Zoom} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {withStyles} from '@material-ui/core/styles';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import {logoutUserAction} from 'pages/login/containers';
import IconButton from '@material-ui/core/IconButton';
import logo from 'assets/images/logo.png';

import {LabServicesDropDown} from 'components/header/components/dropdown/LabServicesDropDown';
import {ProviderServicesDropDown} from 'components/header/components/dropdown/ProviderServicesDropDown';

const scrollToTopButtonStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        zIndex: 1000,
    },
}));

const ScrollTopButton = (props) => {
    const {children} = props;
    const classes = scrollToTopButtonStyles();
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
        if (anchor) {
            anchor.scrollIntoView({behavior: 'smooth', block: 'center'});
        }
    };

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" className={classes.root}>
                {children}
            </div>
        </Zoom>
    );
};

const headerStyles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
});

class Header extends Component {
    handleLogout = () => {
        this.props.logoutUserAction(this.props.history);
    };

    render() {
        const {classes} = this.props;

        return (
            <Fragment className={classes.root}>
                <CssBaseline/>
                <AppBar id="back-to-top-anchor" color="transparent">
                    <Toolbar>

                        <IconButton edge="start" color="inherit" aria-label="menu" href="/">
                            <img alt="logo" src={logo} width={70} height={50}/>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}/>
                        <Button href="/about-us">About Us</Button>
                        <LabServicesDropDown/>
                        <ProviderServicesDropDown/>
                        <Button href="/contact-us">Contact Us</Button>
                        <Button href="https://medscreenlabs.labnexus.net/">Portal Login</Button>

                        {/*show logout btn if user logged in */}
                        <Button variant="contained" color="primary" onClick={this.handleLogout}>
                            Logout
                        </Button>
                    </Toolbar>
                </AppBar>

                <ScrollTopButton {...this.props}>
                    <Fab color="secondary" size="small" aria-label="scroll back to top">
                        <KeyboardArrowUpIcon/>
                    </Fab>
                </ScrollTopButton>
            </Fragment>
        );
    }
}

const mapDispatchToProps = {logoutUserAction};

export default withStyles(headerStyles)(withRouter(connect(null, mapDispatchToProps)(Header)));
