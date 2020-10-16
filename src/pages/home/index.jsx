import React, { Component } from 'react';

import { connect } from 'react-redux';
import { whoWeAreDescriptionAction } from 'pages/careers/containers/actions';
import { loaderOpenAction } from 'components/loaders/components';

import slide from 'assets/images/1.jpg';
import Certifications from 'pages/home/containers/components/certifications';
import ServicesList from 'pages/home/containers/components/services-list';
import Testimonials from 'pages/home/containers/components/testimonials';
import Story from 'pages/home/containers/components/story';
import TopSlider from 'pages/home/containers/components/top-slider';
import Process from 'pages/home/containers/components/process';
import Media from 'pages/home/containers/components/media';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      careerJobList: null
    };
}

componentDidMount() {
    this.props.whoWeAreDescriptionAction();
}
  render() {
    
    return (
      <div class="content-wrapper">
        <TopSlider />
        <Story />
        <ServicesList />
        <Process />
        <Testimonials />
        <Media />
        <Certifications />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  const { aboutUsDescription } = state.CAREERS;
  return { aboutUsDescription };
};

const mapDispatchToProps = {
  loaderOpenAction,
  whoWeAreDescriptionAction
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);