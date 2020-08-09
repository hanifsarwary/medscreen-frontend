import React, { Component } from 'react';
import 'pure-react-carousel/dist/react-carousel.es.css';

// import slide1 from 'assets/images/slide1.jpg';
// import slide2 from 'assets/images/slide2.jpg';
// import slide3 from 'assets/images/slide3.jpg';
// import slide4 from 'assets/images/slide4.jpg';

import brochure from 'assets/pdfs/MedScreenBrochure.pdf';
import PDFRenderer from 'components/pdfrenderer';
import Certifications from 'pages/home/containers/components/certifications';
// import ScrollAnimator from 'components/scrollanimator/scroll-animator';
import ServicesList from 'pages/home/containers/components/services-list';
import Testimonials from 'pages/home/containers/components/testimonials';
import Story from 'pages/home/containers/components/story';
import TopSlider from 'pages/home/containers/components/top-slider';
import Process from 'pages/home/containers/components/process';
import { OurMission, OurStory } from 'pages/home/constants';

class HomePage extends Component {
  render() {
    return (
      <div class="content-wrapper">
        <TopSlider />
        <Story />
        <ServicesList />
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-md-6">
              <Testimonials />
            </div>
            <div class="col-sm-6 col-md-6">
              <Process />
            </div>
          </div>
        </div>
        <Certifications />
        {/* <PDFRenderer file={brochure} width="50%" height="500" /> */}
      </div>
    );
  }
}

export default HomePage;
