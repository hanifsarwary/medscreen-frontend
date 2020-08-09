import React from 'react';
import dropper from 'assets/images/icons/icon1.svg';
import beaker from 'assets/images/icons/icon2.svg';
import testTube from 'assets/images/icons/icon3.svg';

export default function ServicesList(props) {
  return (
    <div class="light-wrapper" id="drug-testing">
      <div class="container inner">
        <div class="section-title text-center">
          <h2>Our Services</h2>
          <h3>We are here to serve you</h3>
        </div>
        <div class="row">
          <div class="col-sm-6 col-md-6 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="0.5s">
            <div class="feature">
              <div class="icon icon-m">
                {' '}
                <img src={dropper} alt="" />{' '}
              </div>
              <h4>Toxicology</h4>
              <p>
                Through the use of Enzyme-immunoassay (EIA) methodology, our instruments detect whether the target drug
                is present in the patient sample. It is reported qualitatively as positive or negative.{' '}
              </p>
            </div>
          </div>
          <div class="col-sm-6 col-md-6 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="1.0s">
            <div class="feature">
              <div class="icon icon-m">
                {' '}
                <img src={beaker} alt="" />{' '}
              </div>
              <h4>Clinical blood</h4>
              <p>
                Through the use of Enzyme-immunoassay (EIA) methodology, our instruments detect whether the target drug
                is present in the patient sample. It is reported qualitatively as positive or negative.{' '}
              </p>
            </div>
          </div>
          <div class="col-sm-6 col-md-6 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="1.5s">
            <div class="feature">
              <div class="icon icon-m">
                {' '}
                <img src={testTube} alt="" />{' '}
              </div>
              <h4>Tele-screen</h4>
              <p>
                Through the use of Liquid-Chromatography Mass Spectrometry (LC/MS), our sensitive instrumentation
                further quantitatively identifies the exact metabolite in the specified drug class. It is then verified
                by our certified toxicologist.
              </p>
            </div>
          </div>
          <div class="col-sm-6 col-md-6 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="2.0s">
            <div class="feature">
              <div class="icon icon-m">
                {' '}
                <img src={testTube} alt="" />{' '}
              </div>
              <h4>COVID-19</h4>
              <p>
                Through the use of Liquid-Chromatography Mass Spectrometry (LC/MS), our sensitive instrumentation
                further quantitatively identifies the exact metabolite in the specified drug class. It is then verified
                by our certified toxicologist.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
