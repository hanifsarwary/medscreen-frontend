import React from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function PortfolioCarousel(props) {
  const { loop, children, navContainer } = props;
  return (
    <div>
      <OwlCarousel
        className="owl-theme"
        autoplayTimeout={3000}
        margin={15}
        dots={false}
        loop={loop}
        rewind={!loop}
        nav
        autoplay
        navContainer={'.' + navContainer}
        navClass={['btn btn-square nav-outside-prev', 'btn btn-square nav-outside-next']}
        navText={['<i class="icon-left-open"></i>', '<i class="icon-right-open"></i>']}
        responsive={{
          0: {
            items: 1,
          },
          480: {
            items: 2,
          },
          1024: {
            items: 3,
          },
          1440: {
            items: 4,
          },
        }}
      >
        {children}
      </OwlCarousel>
      <div class="divide30"></div>
      <div class={navContainer + " owl-nav text-center"}></div>
    </div>
  );
}
