import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import logo from 'assets/images/icons/animatedLogo.gif';
import { logoutUserAction, callService } from 'pages/login/containers';
import Resources from 'components/resources';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      visible: false,
      services: []
     };
     this.props.callService();
  }

  componentDidMount() {
    this.setState({services : JSON.parse(localStorage.getItem('services'))})
  }

  handleOpenDialog = (index) => {
    this.setState({
		index,
		visible: true
    });
  }

  handleCloseDialog = () => {
    this.setState({
      visible: false,
      index: null,
    });
  }

  handleLogout = () => {
    this.props.logoutUserAction(this.props.history);
  };

  render() {
	const { access_token, service } = this.props;
  const { index, visible } = this.state;
    return (
      <Fragment>
        <Resources handleClose={this.handleCloseDialog} index={index} visible={visible} />
        <div class="content-wrapper">
          <div class="navbar navbar-default default header2" role="navigation">
            <div class="top-bar">
              <div class="container">
                <ul class="info">
                  <li>
                    <i class="icon-mail"></i>{' '}
                    <a href="mailto:hello@email.com" class="email-link">
                      info@medscreenlabs.com
                    </a>
                  </li>
                  <li>
                    <i class="icon-phone-1"></i>+00 (973) 320-3237
                  </li>
                </ul>
                <div class="social-wrapper">
                  <ul class="social">
                    <li>
                      <a href="#">
                        <i class="icon-s-pinterest"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="icon-s-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="icon-s-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="icon-s-flickr"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="icon-s-dribbble"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="container boxed">
              <div class="navbar-header">
                <div class="navbar-brand">
                    <Link to="/home">
                      <img alt="logo" src={logo} width={70} height={50} />
                    </Link>
                </div>
                <div class="nav-bars-wrapper">
                  <div class="nav-bars-inner">
                    <div class="nav-bars" data-toggle="collapse" data-target=".navbar-collapse">
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                  <li>
                    <Link to="/home">Home</Link>
                  </li>
                  <li>
                    <a href="javaScript:;">  Lab Services <span class="caret"></span> </a>
                    <ul class="dropdown-menu">
                        { service !== undefined ?
                          service.map((labService, i) => {
                            return (
                              <li key={i}> <Link to={"/services/" + labService.id}>{labService.name}</Link>  </li>
                            )
                          })
                          : ''
                        }
                    </ul>
                  </li>
                  <li>
                    <Link>Media</Link>
                  </li>
                  <li>
                    <a href="javaScript:;">
                      Resources <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <Link onClick={() => this.handleOpenDialog(0)}>Urine toxicology requisiition form</Link>
                      </li>
                      <li>
                        <Link onClick={() => this.handleOpenDialog(1)}>Oral fluid toxicology requisiition form</Link>
                      </li>
                      <li>
                        <Link onClick={() => this.handleOpenDialog(2)}>Clinical blood requisition form</Link>
                      </li>
                      <li>
                        <Link onClick={() => this.handleOpenDialog(3)}>Toxicology report</Link>
                      </li>
                      <li>
                        <Link onClick={() => this.handleOpenDialog(4)}>Urine toxicology cutoff</Link>
                      </li>
                      <li>
                        <Link onClick={() => this.handleOpenDialog(5)}>Oral fluid cutoff</Link>
                      </li>
                      <li>
                        <Link onClick={() => this.handleOpenDialog(6)}>MSL brochure</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link>Contact Us</Link>
                  </li>
                  <li>
                    <a href="http://medscreenlabs.labnexus.net/">Portal Login</a>
                  </li>
                  <li>
                    <Link to="/careers">Careers</Link>
                  </li>
                  <li>
                    {!access_token ? <Link to="/login">Log in</Link> : <Link onClick={this.handleLogout}>Log out</Link>}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const { access_token, service } = state.USER_AUTH;
  return { access_token, service };
};

const mapDispatchToProps = { logoutUserAction, callService };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
