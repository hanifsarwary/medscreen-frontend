import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import slide from 'assets/images/1.jpg';
// import slide1 from 'assets/images/slide1.jpg';
// import slide2 from 'assets/images/slide2.jpg';
// import slide3 from 'assets/images/slide3.jpg';
// import slide4 from 'assets/images/slide4.jpg';

import Certifications from 'pages/home/containers/components/certifications';
import ServicesList from 'pages/home/containers/components/services-list';
import Testimonials from 'pages/home/containers/components/testimonials';
import Story from 'pages/home/containers/components/story';
import TopSlider from 'pages/home/containers/components/top-slider';
import Process from 'pages/home/containers/components/process';

class HomePage extends Component {
  render() {
    return (
      <div class="content-wrapper">
        <TopSlider />
        <Story />
        <ServicesList />
        <Process />
        <Testimonials />
        <Certifications />
      </div>
    );
  }
}

export default HomePage;
