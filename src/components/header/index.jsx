import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { loaderOpenAction } from 'components/loaders/components';
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
    // window.open("/resources/" + index + '/' + true, "_blank")
    this.setState({
      visible: true,
      index: index,
    });
  }

  handleCloseDialog = () => {
    this.setState({
      visible: false,
      index: null,
    });
  }

  handleLogout = () => {
    this.props.loaderOpenAction();
    this.props.logoutUserAction(this.props.history);
  };

  render() {
	const { access_token, service } = this.props;
  const { index, visible } = this.state;
    return (
      <Fragment>
        <Resources handleClose={this.handleCloseDialog} index={Number(this.state.index)} visible={this.state.visible} />
        <div class="content-wrapper">
          <div class="navbar navbar-default default header2" role="navigation">
            <div class="top-bar">
              <div class="container">
                <ul class="info">
                  <li>
                    <i class="icon-mail"></i>{' '}
                    <a href="mailto:hello@email.com" class="email-link">
                      reports@medscreenlabs.org
                    </a>
                  </li>
                  <li>
                    <i class="icon-phone-1"></i>(973) 320-3237
                  </li>
                </ul>
                <div class="social-wrapper">
                  <ul class="social">
                    <li>
                      <a href="https://www.linkedin.com/in/med-screen-laboratories-413a6a199">
                        <i class="icon-s-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/Medscreen-Laboratories-303502543596874/">
                        <i class="icon-s-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com/medscreenlabs?igshid=1kw4y6604w4ex">
                        <i class="icon-s-instagram"></i>
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
                    <HashLink to="/home#silder">Home</HashLink>
                  </li>
                  <li>
                    <Link to="#"> Lab Services <span class="caret"></span> </Link>
                    <ul class="dropdown-menu">
                        { service !== undefined ?
                          service.map((labService, i) => {
                            return (
                              <li key={i}> {
                                labService.is_display ? 
                                <Link to={"/services/" + labService.id}>{labService.name}</Link> : ''
                              }
                              </li>
                            )
                          })
                          : ''
                        }
                    </ul>
                  </li>
                  <li>
                    <Link to="#"> Resources <span class="caret"></span> </Link>
                    <ul class="dropdown-menu">
                      <li>
                      {/* to={"/resources/" + 0 + '/' + true} target="_blank" */}
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
                        {/* <Link onClick={() => this.handleOpenDialog(6)}>MSL brochure</Link> */}
                      </li>
                    </ul>
                  </li>
                  <li>
                    <HashLink to="/home#media">Media</HashLink>
                  </li>
                  <li>
                    <Link to="/careers">Careers</Link>
                  </li>
                  <li>
                    <HashLink to="/home#contact">Contact Us</HashLink>
                  </li>
                  <li>
                    <a href="http://medscreenlabs.labnexus.net/">PHYSICIAN LOGIN</a>
                  </li>
                  <li>
                    {!access_token ? <Link to="/login">PATIENT LOGIN</Link> : <Link onClick={this.handleLogout}>Log out</Link>}
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

const mapDispatchToProps = { logoutUserAction, callService, loaderOpenAction };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
