import React from 'react';
import TestimonialsCarousel from 'components/carousels/testimonialsCarousel';


export default function Testimonials(props) {
  return (
    <div class="light-wrapper">
      <div class="container inner">
        <div class="section-title text-center">
          <h2>Testimonials</h2>
          <h3>what our customers say</h3>
        </div>
        <div class="carousel-wrapper wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
          <TestimonialsCarousel class="carousel">
            {
              props.reviews.length > 0 && props.reviews.map((item, i) => {
                return (
                  <div class="item" key={i}>
                    <div class="quote">
                      <blockquote>
                          <p>{item.display_text}</p>
                      </blockquote>
                      <div class="author">
                        <div class="icon">
                          {' '}
                          <img src="style/images/art/t1.jpg" alt="" />{' '}
                        </div>
                        <div class="info">
                          <h5>{item.full_name}</h5>
                          <span class="meta">{item.designation}</span>{' '}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </TestimonialsCarousel>
        </div>
      </div>
    </div>
  );
}
