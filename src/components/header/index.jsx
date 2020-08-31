import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import logo from 'assets/images/icons/animatedLogo.gif';
import { logoutUserAction } from 'pages/login/containers';
import Resources from 'components/resources';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
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
	const { access_token } = this.props;
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
                  <a href="index.html">
                    <img alt="logo" src={logo} width={70} height={50} />
                  </a>
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
                    <Link to="/about">About MSL</Link>
                  </li>
                  <li>
                    <Link to="/services">
                      Lab Services <span class="caret"></span>
                    </Link>
                    <ul class="dropdown-menu">
                      <li>
                        <HashLink smooth to='/services#drug-screening'>Drug Testing</HashLink>
                      </li>
                      <li>
                        <Link to="/">Clinical Blood (Not available)</Link>
                      </li>
                      <li>
                        <Link to="/">COVID-19 Testing (Not available)</Link>
                      </li>
                      <li>
                        <Link to="/">Tele-screen Remote Testing (Not available)</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/">Media</Link>
                  </li>
                  <li>
                    <Link to="#">
                      Resources <span class="caret"></span>
                    </Link>
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
                    <Link to="/">Contact Us</Link>
                  </li>
                  {/* <li>
									<a href='#!'>
										Portfolio <span class='caret'></span>
									</a>
									<ul class='dropdown-menu'>
										<li>
											<a href='portfolio.html'>
												Detailed Portfolio <span class='caret'></span>
											</a>
											<ul class='dropdown-menu'>
												<li>
													<a href='portfolio.html'>3 Columns</a>
												</li>
												<li>
													<a href='portfolio2.html'>4 Columns</a>
												</li>
											</ul>
										</li>
										<li>
											<a href='portfolio2.html'>
												Lightbox Portfolio <span class='caret'></span>
											</a>
											<ul class='dropdown-menu'>
												<li>
													<a href='portfolio3.html'>3 Columns</a>
												</li>
												<li>
													<a href='portfolio4.html'>4 Columns</a>
												</li>
											</ul>
										</li>
										<li>
											<a href='portfolio-post.html'>Post with Carousel</a>
										</li>
										<li>
											<a href='portfolio-post2.html'>Post with Slider</a>
										</li>
										<li>
											<a href='portfolio-post3.html'>Post post with Half Slider</a>
										</li>
										<li>
											<a href='portfolio-post4.html'>Post with Images</a>
										</li>
										<li>
											<a href='portfolio-post5.html'>Post with Video</a>
										</li>
										<li>
											<a href='portfolio-post6.html'>Post with Half Video</a>
										</li>
										<li>
											<a href='portfolio-post7.html'>Post with Video Slider</a>
										</li>
									</ul>
								</li> */}

                  <li>
                    <a href="http://medscreenlabs.labnexus.net/">Portal Login</a>
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
  const { access_token } = state.USER_AUTH;
  return { access_token };
};

const mapDispatchToProps = { logoutUserAction };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
