import React from 'react';

import cert1 from 'assets/images/cert1.png';
import cert2 from 'assets/images/cert2.png';
import cert3 from 'assets/images/cert3.gif';
import cert4 from 'assets/images/cert4.png';
import cert5 from 'assets/images/cert5.png';
import cert6 from 'assets/images/cert6.png';

import TestimonialsCarousel from 'components/carousels/testimonialsCarousel';

export default function Certifications(props) {
	return (
    <div class="light-wrapper">
      <div class="container inner">
        <div class="section-title text-center">
          <h3>Certifications</h3>
          <p class="lead"></p>
        </div>
        <div class="carousel-wrapper">
          <TestimonialsCarousel class="row">
            <div class="item wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.0s">
              <div class="icon icon-m bm10" >
                {' '}
                <img src={cert1} alt="" />{' '}
              </div>
            </div>
            <div class="item wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
              <div class="icon icon-m bm10">
                {' '}
                <img src={cert2} alt="" />{' '}
              </div>
            </div>
            <div class="item wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s">
              <div class="icon icon-m bm10">
                {' '}
                <img src={cert3} alt="" />
              </div>
            </div>
            <div class="item">
              <div class="icon icon-m bm10">
                {' '}
                <img src={cert4} alt="" />{' '}
              </div>
            </div>
            <div class="item">
              <div class="icon icon-m bm10">
                {' '}
                <img src={cert5} alt="" />{' '}
              </div>
            </div>
            <div class="item">
              <div class="icon icon-m bm10">
                {' '}
                <img src={cert6} alt="" />{' '}
              </div>
            </div>
          </TestimonialsCarousel>
        </div>
      </div>
    </div>
  );
}
