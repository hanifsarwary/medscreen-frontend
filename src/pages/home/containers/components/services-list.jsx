import React from 'react';
import { Link } from 'react-router-dom';

export default function ServicesList(props) {
  return (
    <div class="light-wrapper" id="drug-testing">
      <div class="container inner">
        <div class="section-title text-center">
          <h2>Our Services</h2>
          <h3>what we do</h3>
        </div>
        <div class="row lm0">
          {
            props.service && props.service.map((item, i) => {
              return (
                <div key={i} className="col-sm-6 col-md-6 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="0.5s">
                  <div className="row lm0">
                    <div className="col-sm-3">
                       <div className="icon icon-m fit-img tm25">
                          <img className="" src={item.icon_image} alt="" />
                       </div>
                    </div>
                    <div className="col-sm-9">
                      <Link to={item.is_display ? "/services/" + item.id : '/home'}><h4 className="tm30">{item.alias_name}</h4></Link>
                      <p dangerouslySetInnerHTML={{ __html: item.secondary_description }}></p>
                    </div>
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