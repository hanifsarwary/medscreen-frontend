import React, { Component } from 'react';
import { connect } from 'react-redux';
import Drawer from 'react-drag-drawer';
import { css } from "emotion";
import { getMediaAction } from 'pages/home/containers';
import PortfolioCarousel from 'components/carousels/portfolioCarousel';

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 

class Media extends Component {
    constructor(props) {
      super(props);
      this.state = { open: false, img: null };
      this.props.getMediaAction();
    }

    toggle = (value, img) => {
      this.setState({ open: value, img: img });
    };

    render() {
        const { media } = this.props;
        return (
          <div class="dark-wrapper">
            <div class="container inner">
              <div class="section-title text-center">
                <h2>Our Media</h2>
                <h3>Medscreen Labs</h3>
              </div>
              <div class="carousel-wrapper wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
                {media.length > 0 ? (
                  <PortfolioCarousel navContainer='media-nav'>
                    {media.map((value, index) => (
                      <div class="item post" key={index}>
                        {/* style={{ maxWidth: '440px', maxHeight: '540px' }} */}
                        <figure>
                          <a>
                            <div class="overlay">
                              <div class="info">
                                <span> <button className="btn" onClick={() => this.toggle(true, value.media_image)}>View Media</button></span>
                              </div>
                            </div>
                            {/* <img src={value.media_image} alt="" /> */}
                            <div style={{backgroundImage: "url("+value.media_image+")", width: '440px', height: '450px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}}></div>
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
            <Drawer open={this.state.open}
                modalElementClass={modal}
                onRequestClose={()=> this.toggle(false, null)}>
                <div>
                    <img src={this.state.img} alt="" height="550px" width="450px" />
                </div>
              </Drawer>
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


const modal = css`
  position: absolute;
  top: 200px;
  background-color: white;
  padding: 20px 20px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;