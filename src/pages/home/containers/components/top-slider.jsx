import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from 'assets/images/icons/animatedLogo.gif';
import HomeB from 'assets/images/hb.png';

class TopSlider extends Component {
  componentDidMount() {
    window.$('#slider1').revolution({
      sliderType: 'standard',
      sliderLayout: 'auto',
      spinner: 'spinner',
      delay: 9000,
      shadow: 0,
      gridwidth: 1170,
      gridheight: 700,
      responsiveLevels: [4096, 1024, 778, 480],
      navigation: {
        arrows: {
          enable: true,
          hide_onleave: true,
        },
        touch: {
          touchenabled: 'on',
        },
        bullets: {
          enable: false,
          hide_onleave: false,
          h_align: 'center',
          v_align: 'bottom',
          space: 5,
          h_offset: 0,
          v_offset: 20,
        },
      },
    });
  }
  render() {
    return (
      <div class="rev_slider_wrapper">
        <div id="slider1" class="rev_slider" data-version="5.0">
          <ul>
            <li data-transition="fade">
              {' '}
              <img src={HomeB} alt=""></img>
              <div class="tp-caption large text-center" 
                data-x="center" 
                data-hoffset="" 
                data-y="center"  data-voffset="-60" 
                data-width="['auto','auto','auto','auto']"
                data-height="['auto','auto','auto','auto']"
                data-transform_idle="o:1;"				 
                data-transform_in="z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;s:1300;e:Power2.easeOut;" 
                data-transform_out="s:1300;e:Power3.easeInOut;s:1300;e:Power3.easeInOut;" 
                data-start="1200" 
                data-splitin="none" 
                data-splitout="none" 
                data-responsive_offset="on" 
                style={{ zIndex: 9, whiteSpace: 'nowrap', fontSize: '25px', lineHeight: '25px' }}>
                  <img alt="logo" src={logo} width={70} height={50}/>
                </div>
                <div class="tp-caption medium text-center" 
                  data-x="center" 
                  data-hoffset="" 
                  data-y="center"  
                  data-voffset="0" 
                  data-width="['auto','auto','auto','auto']"
                  data-height="['auto','auto','auto','auto']"
                  data-transform_idle="o:1;"
                  data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:1300;e:Power4.easeInOut;" 
                  data-transform_out="s:1300;e:Power3.easeInOut;s:1300;e:Power3.easeInOut;" 
                  // data-transform_in="x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;" 
                  // data-transform_out="auto:auto;s:1000;" 
                  data-start="1700" 
                  data-splitin="none" 
                  data-splitout="none" 
                  data-responsive_offset="on" 
                  style={{zIndex: 7, whiteSpace: 'nowrap', fontSize: '30px', lineHeight: '30px', marginTop: '65px', color: 'white'}}>
                    The Nation's Leading Toxicology Laboratory 
              </div>

              <div class="tp-caption medium text-center" 
                data-x="center" 
                data-hoffset="" 
                data-y="center" 
                data-voffset="['65','65','65','90']"
                data-width="['auto','auto','auto','auto']"
                data-height="['auto','auto','auto','auto']"
                data-transform_idle="o:1;"				 
                data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:1300;e:Power4.easeInOut;" 
                data-transform_out="s:1300;e:Power3.easeInOut;s:1300;e:Power3.easeInOut;" 
                data-start="2200" 
                data-splitin="none" 
                data-splitout="none" 
                data-responsive_offset="on" 
                style={{zIndex: 7, whiteSpace: 'nowrap', fontSize: '30px', lineHeight: '30px', marginTop: '65px'}}>
                  <Link to="/appointments" class="btn btn-white btn-large">
                      Book an Appointment
                  </Link>
              </div>
            </li>
          </ul>
          <div class="tp-bannertimer tp-bottom"></div>
        </div>
      </div>
    );
  }
}

export default TopSlider;
