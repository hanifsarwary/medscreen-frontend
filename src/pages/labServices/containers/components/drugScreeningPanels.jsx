import React from 'react';
import dropper from 'assets/images/icons/icon1.svg';
import beaker from 'assets/images/icons/icon2.svg';
import testTube from 'assets/images/icons/icon3.svg';


export default function DrugScreeningPanels(props) {
  const icons = [dropper, beaker, testTube]
    return (
      <div class="dark-wrapper">
        <div class="container inner">
          <div class="section-title text-center">
            <h2>Drug Screening</h2>
            {/* <h3>We are here to serve you</h3> */}
          </div>
          <div class="row">
            <div class="col-sm-4 col-md-4 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="0.5s">
              <div class="feature">
                <div class="icon icon-m">
                  {' '}
                  <img src={icons[Math.floor(Math.random() * icons.length)]} alt="" />{' '}
                </div>
                <h4>5 panel</h4>
              </div>
            </div>
            <div class="col-sm-4 col-md-4 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="1s">
              <div class="feature">
                <div class="icon icon-m">
                  {' '}
                  <img src={icons[Math.floor(Math.random() * icons.length)]} alt="" />{' '}
                </div>
                <h4>10 panel</h4>
              </div>
            </div>
            <div class="col-sm-4 col-md-4 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="1.5s">
              <div class="feature">
                <div class="icon icon-m">
                  {' '}
                  <img src={icons[Math.floor(Math.random() * icons.length)]} alt="" />{' '}
                </div>
                <h4>12 panel</h4>
                {/* <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
