import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getMediaAction } from 'pages/home/containers';
import PortfolioCarousel from 'components/carousels/portfolioCarousel';

class Media extends Component {
    componentWillMount() {
        this.props.getMediaAction();
    }

    render() {
        const { media } = this.props;
        console.log('---------------');
        console.log(media);
        return (
          <div class="dark-wrapper">
            <div class="container inner">
              <div class="section-title text-center">
                <h2>Our Media</h2>
                <h3>Medscreen Labs</h3>
              </div>
              <div class="carousel-wrapper wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
                {media.length > 0 ? (
                  <PortfolioCarousel loop navContainer='media-nav'>
                    {media.map((value, index) => (
                      <div class="item post" key={index}>
                        <figure style={{ maxWidth: '440px', maxHeight: '340px' }}>
                          <a href="#">
                            <div class="overlay">
                              <div class="info">
                                <span>View Media</span>
                              </div>
                            </div>
                            <img className="zoom" src={value.media_image} alt="" />
                          </a>
                        </figure>
                        <div class="post-content">
                          <h3 class="post-title">
                            <a href="#">{value.caption}</a>
                          </h3>
                          {/* <div class="meta">
                              <span class="category">
                                <a href="#">Business</a>, <a href="#">Works</a>
                              </span>
                            </div> */}
                        </div>
                      </div>
                    ))}
                  </PortfolioCarousel>
                ) : (
                  'No media found'
                )}
              </div>
            </div>
          </div>
        );
    }
}

const mapStateToProps = state => {
	const { media } = state.MEDIA;
	return { media };
};

const mapDispatchToProps = { getMediaAction };

export default connect(mapStateToProps, mapDispatchToProps)(Media);
