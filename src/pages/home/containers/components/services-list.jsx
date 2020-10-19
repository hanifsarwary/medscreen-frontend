import React from 'react';

export default function ServicesList(props) {
  console.log(props);
  return (
    <div class="light-wrapper" id="drug-testing">
      <div class="container inner">
        <div class="section-title text-center">
          <h2>Our Services</h2>
          <h3>We are here to serve you</h3>
        </div>
        <div class="row">
          {
            props.service && props.service.map((item, i) => {
              return (
                <div key={i} class="col-sm-6 col-md-6 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="0.5s">
                  <div class="feature">
                    <div class="icon icon-m">
                      {' '}
                      <img src={item.icon_image} alt="" />{' '}
                    </div>
                    <h4>{item.alias_name}</h4>
                    <p>
                      {item.secondary_description}
                      {' '}
                    </p>
                  </div>
              </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}



{/* <div class="col-sm-6 col-md-6 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="1.0s">
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
          </div> */}