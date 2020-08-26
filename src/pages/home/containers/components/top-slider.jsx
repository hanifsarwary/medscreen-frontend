import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import {connect} from 'react-redux';
// import {withRouter} from 'react-router-dom';
// import logo from 'assets/videos/logo-video.mp4';
import logo from 'assets/images/icons/animatedLogo.gif';
import slide from 'assets/images/1.jpg';


export default function TopSlider(props) {
  return (
    <div class="rev_slider_wrapper">
      <div id="slider1" class="rev_slider" data-version="5.0">
        <ul>
          <li data-transition="fade">
            {' '}
            <img src={slide} alt=""></img>
            <div
              class="tp-caption large"
              data-x="50"
              data-y="bottom"
              data-voffset="350"
              data-width="['auto','auto','auto','auto']"
              data-height="['auto','auto','auto','auto']"
              data-transform_idle="o:1;"
              data-transform_in="x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;"
              data-transform_out="auto:auto;s:1000;"
              data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
              data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
              data-start="1200"
              data-splitin="none"
              data-splitout="none"
              data-responsive_offset="on"
              style={{ zIndex: 9, whiteSpace: 'nowrap', fontSize: '50px', lineHeight: '50px' }}
            >
              Med Screen Laboratories
            </div>
            <div
              class="tp-caption medium text-left"
              data-x="50"
              data-y="bottom"
              data-voffset="310"
              data-width="['auto','auto','auto','auto']"
              data-height="['auto','auto','auto','auto']"
              data-visibility="['on','on','on','off']"
              data-transform_idle="o:1;"
              data-transform_in="x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;"
              data-transform_out="auto:auto;s:1000;"
              data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
              data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
              data-start="1700"
              data-splitin="none"
              data-splitout="none"
              data-responsive_offset="on"
              style={{ zIndex: 9, whiteSpace: 'nowrap', fontSize: '25px', lineHeight: '25px' }}
            >
              The Nation's Leading Toxicology Laboratory
            </div>
            <div
              class="tp-caption medium text-left"
              data-x="50"
              data-y="bottom"
              data-voffset="250"
              data-width="['auto','auto','auto','auto']"
              data-height="['auto','auto','auto','auto']"
              data-visibility="['on','on','on','off']"
              data-transform_idle="o:1;"
              data-transform_in="x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;"
              data-transform_out="auto:auto;s:1000;"
              data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
              data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
              data-start="2100"
              data-splitin="none"
              data-splitout="none"
              data-responsive_offset="on"
              style={{ zIndex: 9, whiteSpace: 'nowrap', fontSize: '25px', lineHeight: '25px' }}
            >
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
