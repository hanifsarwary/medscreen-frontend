import React from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


export default function TestimonialsCarousel(props) {
    return (
      <OwlCarousel
        className="owl-theme"
        loop
        autoplayTimeout={3000}
        margin={30}
        dots={false}
        autoplay
        responsive={{
          0: {
            items: 1,
          },
          768: {
            items: 2,
          },
          1024: {
            items: 3,
          },
        }}
      >
        {props.children}
      </OwlCarousel>
    );
}
