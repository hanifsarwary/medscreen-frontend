import React, { Component } from 'react';

import slide from 'assets/images/1.jpg';

import Certifications from 'pages/home/containers/components/certifications';
import ServicesList from 'pages/home/containers/components/services-list';
import Testimonials from 'pages/home/containers/components/testimonials';
import Story from 'pages/home/containers/components/story';
import TopSlider from 'pages/home/containers/components/top-slider';
import Process from 'pages/home/containers/components/process';
import Media from 'pages/home/containers/components/media';

class HomePage extends Component {
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

export default HomePage;
