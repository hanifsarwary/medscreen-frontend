import React, { Component } from 'react';

import { connect } from 'react-redux';
import { whoWeAreDescriptionAction, userReviewAction, callService } from 'pages/careers/containers/actions';
import { loginUserViaEmailAction } from 'pages/login/containers/actions';
import { loaderOpenAction } from 'components/loaders/components';

import Certifications from 'pages/home/containers/components/certifications';
import ServicesList from 'pages/home/containers/components/services-list';
import Testimonials from 'pages/home/containers/components/testimonials';
import Story from 'pages/home/containers/components/story';
import TopSlider from 'pages/home/containers/components/top-slider';
import Process from 'pages/home/containers/components/process';
import Media from 'pages/home/containers/components/media';
import ReactModal from 'react-modal';
import MediaQuery from 'react-responsive'
import Charts from 'pages/home/containers/components/charts';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      careerJobList: null,
      isModalOpen: true,
    };
  }
  closeModal = () => {
    this.setState({ isModalOpen: false });
  }

  componentDidMount() {
    this.props.whoWeAreDescriptionAction();
    this.props.userReviewAction();
    this.props.callService();
    if (this.props.location.search) {
      this.props.loginUserViaEmailAction(this.props.location.search, this.props.history);
    }
  }
  render() {
    return (
      <div class="content-wrapper">
        
        
        <MediaQuery minWidth={768}>
          <ReactModal 
            style={{
              overlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 1111,
                backgroundColor: 'rgba(0,0,0,0.75)',
              },
              content: {
                position: 'absolute',
                height: '35%',
                width: '40%',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                border: '1px solid #ccc',
                background: '#fff',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                borderRadius: '4px',
                outline: 'none',
                padding: '20px',
              },
            }}
            isOpen={ this.state.isModalOpen }
          > 
            <div > 
              <h1 style={{color: '#000000', textAlign: 'center', marginTop: '10px',  position: 'absolute',
                  left: '40%', }}>Update</h1>
              <button style={{color: '#000000', textAlign: 'center', backgroundColor: '#ffffff', border: 'none', position: 'absolute', right: 20, top:30}} 
                      onClick={this.closeModal}>X</button>
            </div>
        
            <p style={{color: '#000000', textAlign: 'justify', fontSize: 'large', marginTop: '70px'}}>Due to a recent surge in COVID-19 testing demand, we are experiencing longer than usual turnaround times for test results. The results are taking approximately 2-4 days from when your sample is collected. You will receive an email when your results are available.</p>
    

          </ReactModal>
        </MediaQuery>

        <MediaQuery maxWidth={768}>
          <ReactModal 
            style={{
              overlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 1111,
                backgroundColor: 'rgba(0,0,0,0.75)',
              },
              content: {
                position: 'absolute',
                height: '70%',
                width: '60%',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                border: '1px solid #ccc',
                background: '#fff',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                borderRadius: '4px',
                outline: 'none',
                padding: '20px',
              },
            }}
            isOpen={ this.state.isModalOpen }
          > 
            <div> 
              <h1 style={{color: '#000000', textAlign: 'center', marginTop: '10px',  position: 'absolute',
                  left: '32%', }}>Update</h1>
              <button style={{color: '#000000', textAlign: 'center', backgroundColor: '#ffffff', border: 'none', position: 'absolute', right: 15, top:20}} 
                      onClick={this.closeModal}>X</button>
            </div>
            <p style={{color: '#000000', textAlign: 'justify', fontSize: 'large', marginTop: '70px'}}>Due to a recent surge in COVID-19 testing demand, we are experiencing longer than usual turnaround times for test results. The results are taking approximately 2-4 days from when your sample is collected. You will receive an email when your results are available.</p>
          </ReactModal>
        </MediaQuery>



        <section id="silder">
          <TopSlider />
        </section>
        <section id="story">
          <Story description={this.props.aboutUsDescription} />
        </section>
        <section id="sevice">
          <ServicesList service={this.props.service} />
        </section>
        <section className="tm20" id="process">
          <Process />
        </section>
        <section className="tm20" id="testimation">
          <Testimonials reviews={this.props.userReviews} />
        </section>
        <section id="media">
          <Media />
        </section>
        {/* <section id="progress">
          <Charts />
        </section> */}
        <section id="contact">
          <Certifications />
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { aboutUsDescription, service, userReviews } = state.CAREERS;
  return { aboutUsDescription, service, userReviews };
};

const mapDispatchToProps = {
  loaderOpenAction,
  whoWeAreDescriptionAction,
  loginUserViaEmailAction,
  userReviewAction,
  callService,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
