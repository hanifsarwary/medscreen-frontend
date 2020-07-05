import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Carousel } from 'react-responsive-carousel';
import slide1 from 'assets/images/slide1.jpg';
import slide2 from 'assets/images/slide2.jpg';
import slide3 from 'assets/images/slide3.jpg';
import slide4 from 'assets/images/slide4.jpg';

class HomePage extends Component {
  render() {
    return (
      <Carousel
        autoPlay
        infiniteLoop
        interval={4000}
        transitionTime={1000}
        showStatus={false}
        showThumbs={false}
        stopOnHover={false}
      >
        <div>
          <img alt="" src={slide1} />
        </div>
        <div>
          <img alt="" src={slide2} />
        </div>
        <div>
          <img alt="" src={slide3} />
        </div>
        <div>
          <img alt="" src={slide4} />
        </div>
      </Carousel>
    );
  }
}

export default HomePage;
