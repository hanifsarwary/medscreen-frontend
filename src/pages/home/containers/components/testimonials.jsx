import React from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';


export default function Testimonials(props) {
  return (
    <div class="light-wrapper">
      <div class="inner">
        <div class="section-title text-center">
          <h2>Testimonials</h2>
          <h3>what our customers say</h3>
        </div>
        <div class="carousel-wrapper wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
          <CarouselProvider
            isPlaying
            lockOnWindowScroll
            infinite
            interval={3500}
            totalSlides={4}
            visibleSlides={3}
            orientation={'vertical'}
            naturalSlideHeight={40}
            naturalSlideWidth={100}
          >
            <Slider>
              <Slide index={0}>
                <div class="item">
                  <div class="quote">
                    <blockquote>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam id dolor id nibh
                        ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis.
                      </p>
                    </blockquote>
                    <div class="author">
                      <div class="icon">
                        {' '}
                        <img src="style/images/art/t1.jpg" alt="" />{' '}
                      </div>
                      <div class="info">
                        <h5>Connor Gibson</h5>
                        <span class="meta">Interface Designer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide index={1}>
                <div class="item">
                  <div class="quote">
                    <blockquote>
                      <p>
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum
                        nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula.
                      </p>
                    </blockquote>
                    <div class="author">
                      <div class="icon">
                        {' '}
                        <img src="style/images/art/t2.jpg" alt="" />{' '}
                      </div>
                      <div class="info">
                        <h5>Barclay Widerski</h5>
                        <span class="meta">Computer Engineer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide index={2}>
                <div class="item">
                  <div class="quote">
                    <blockquote>
                      <p>
                        Vestibulum id ligula porta felis euismod semper. Morbi leo risus, porta ac consectetur ac,
                        vestibulum at eros. Aenean lacinia bibendum nulla.{' '}
                      </p>
                    </blockquote>
                    <div class="author">
                      <div class="icon">
                        {' '}
                        <img src="style/images/art/t3.jpg" alt="" />{' '}
                      </div>
                      <div class="info">
                        <h5>Nikolas Brooten</h5>
                        <span class="meta">Sales Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide index={3}>
                <div class="item">
                  <div class="quote">
                    <blockquote>
                      <p>
                        Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue
                        laoreet rutrum faucibus dolor auctor.{' '}
                      </p>
                    </blockquote>
                    <div class="author">
                      <div class="icon">
                        {' '}
                        <img src="style/images/art/t4.jpg" alt="" />{' '}
                      </div>
                      <div class="info">
                        <h5>Coriss Ambady</h5>
                        <span class="meta">Marketing Specialist</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
            </Slider>
          </CarouselProvider>
        </div>
      </div>
    </div>
  );
}
