import React, { Component } from 'react';

import { connect } from 'react-redux';
import { whoWeAreDescriptionAction,
         userReviewAction,
         callService } from 'pages/careers/containers/actions';
import { loaderOpenAction } from 'components/loaders/components';

import Certifications from 'pages/home/containers/components/certifications';
import ServicesList from 'pages/home/containers/components/services-list';
import Testimonials from 'pages/home/containers/components/testimonials';
import Story from 'pages/home/containers/components/story';
import TopSlider from 'pages/home/containers/components/top-slider';
import Process from 'pages/home/containers/components/process';
import Media from 'pages/home/containers/components/media';
import Charts from 'pages/home/containers/components/charts';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      careerJobList: null
    };
}

componentDidMount() {
    this.props.whoWeAreDescriptionAction();
    this.props.userReviewAction();
    this.props.callService();
  }
  render() {
    return (
      <div class="content-wrapper">
        <section id="silder">
          <TopSlider />
        </section>
        <section id="story">
          <Story description={this.props.aboutUsDescription}/>
        </section>
        <section id="sevice">
          <ServicesList service={this.props.service}/>
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
  userReviewAction,
  callService
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);