import React from 'react';
import dropper from 'assets/images/icons/icon1.svg';
import beaker from 'assets/images/icons/icon2.svg';
import testTube from 'assets/images/icons/icon3.svg';


export default function DrugConfirmationPanels(props) {
    const icons = [dropper, beaker, testTube]

    return (
      <div class="dark-wrapper" id="drug-confirmation" >
        <div class="container inner">
          <div class="section-title text-center">
            <h2>Drug Confirmation</h2>
            {/* <h3>We are here to serve you</h3> */}
          </div>
          <div class="row">
            <div class="col-sm-4  wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
              <div class="feature">
                <div class="icon icon-m">
                  <img src={icons[Math.floor(Math.random() * icons.length)]} alt="" />
                </div>
                <h4>Alcohol Biomarkers (C1)</h4>
              </div>
            </div>
            <div class="col-sm-4  wow fadeIn" data-wow-duration="1s" data-wow-delay="0.6s">
              <div class="feature">
                <div class="icon icon-m">
                  <img src={icons[Math.floor(Math.random() * icons.length)]} alt="" />
                </div>
                <h4>Amphetamines (C2)</h4>
              </div>
            </div>
            <div class="col-sm-4  wow fadeIn" data-wow-duration="1s" data-wow-delay="0.9s">
              <div class="feature">
                <div class="icon icon-m">
                  <img src={icons[Math.floor(Math.random() * icons.length)]} alt="" />
                </div>
                <h4>Anti-depressants, serotonergic class (C3)</h4>
              </div>
            </div>
            <div class="col-sm-4  wow fadeIn" data-wow-duration="1s" data-wow-delay="1.1s">
              <div class="feature">
                <div class="icon icon-m">
                  <img src={icons[Math.floor(Math.random() * icons.length)]} alt="" />
                </div>
                <h4>Anti-depressants, tricyclic & other cyclicals (C4)</h4>
              </div>
            </div>
            <div class="col-sm-4  wow fadeIn" data-wow-duration="1s" data-wow-delay="1.4s">
              <div class="feature">
                <div class="icon icon-m">
                  <img src={icons[Math.floor(Math.random() * icons.length)]} alt="" />
                </div>
                <h4>Anti-depressants, others (C5)</h4>
              </div>
            </div>
            <div class="col-sm-4  wow fadeIn" data-wow-duration="1s" data-wow-delay="1.7s">
              <div class="feature">
                <div class="icon icon-m">
                  <img src={icons[Math.floor(Math.random() * icons.length)]} alt="" />
                </div>
                <h4>Antiepileptics (C6)</h4>
              </div>
            </div>
            <div class="col-sm-4  wow fadeIn" data-wow-duration="1s" data-wow-delay="2s">
              <div class="feature">
                <div class="icon icon-m">
                  <img src={icons[Math.floor(Math.random() * icons.length)]} alt="" />
                </div>
                <h4>Anxiolytic (C7)</h4>
              </div>
            </div>
            <div class="col-sm-4  wow fadeIn" data-wow-duration="1s" data-wow-delay="2.3s">
              <div class="feature">
                <div class="icon icon-m">
                  <img src={icons[Math.floor(Math.random() * icons.length)]} alt="" />
                </div>
                <h4>Antipsychotic (C8)</h4>
              </div>
            </div>
            <div class="col-sm-4  wow fadeIn" data-wow-duration="1s" data-wow-delay="2.6s">
              <div class="feature">
                <div class="icon icon-m">
                  <img src={icons[Math.floor(Math.random() * icons.length)]} alt="" />
                </div>
                <h4>Barbiturates (C9)</h4>
              </div>
            </div>
            <div class="col-sm-4  wow fadeIn" data-wow-duration="1s" data-wow-delay="2.9s">
              <div class="feature">
                <div class="icon icon-m">
                  <img src={icons[Math.floor(Math.random() * icons.length)]} alt="" />
                </div>
                <h4>Bath salts (stimulants, synthetic) (C10)</h4>
              </div>
            </div>
            <div class="col-sm-4  wow fadeIn" data-wow-duration="1s" data-wow-delay="3.2s">
              <div class="feature">
                <div class="icon icon-m">
                  <img src={icons[Math.floor(Math.random() * icons.length)]} alt="" />
                </div>
                <h4>Benzodiazepines (C11)</h4>
              </div>
            </div>
            <div class="col-sm-4  wow fadeIn" data-wow-duration="1s" data-wow-delay="3.5s">
              <div class="feature">
                <div class="icon icon-m">
                  <img src={icons[Math.floor(Math.random() * icons.length)]} alt="" />
                </div>
                <h4>Buprenorphine (C12)</h4>
              </div>
            </div>
            <div class="col-sm-4  wow fadeIn" data-wow-duration="1s" data-wow-delay="3.8s">
              <div class="feature">
                <div class="icon icon-m">
                  <img src={icons[Math.floor(Math.random() * icons.length)]} alt="" />
                </div>
                <h4>Cannabinoids, natural (C13)</h4>
              </div>
            </div>
            <div class="col-sm-4  wow fadeIn" data-wow-duration="1s" data-wow-delay="4.1s">
              <div class="feature">
                <div class="icon icon-m">
                  <img src={icons[Math.floor(Math.random() * icons.length)]} alt="" />
                </div>
                <h4>Cocaine metabolite (C14)</h4>
              </div>
            </div>
            <div class="col-sm-4  wow fadeIn" data-wow-duration="1s" data-wow-delay="4.4s">
              <div class="feature">
                <div class="icon icon-m">
                  <img src={icons[Math.floor(Math.random() * icons.length)]} alt="" />
                </div>
                <h4>Fentanyls (C15)</h4>
              </div>
            </div>
            <div class="col-sm-4  wow fadeIn" data-wow-duration="1s" data-wow-delay="4.7s">
              <div class="feature">
                <div class="icon icon-m">
                  <img src={icons[Math.floor(Math.random() * icons.length)]} alt="" />
                </div>
                <h4>Gabapentin (C16)</h4>
              </div>
            </div>
            <div class="col-sm-4  wow fadeIn" data-wow-duration="1s" data-wow-delay="5s">
              <div class="feature">
                <div class="icon icon-m">
                  <img src={icons[Math.floor(Math.random() * icons.length)]} alt="" />
                </div>
                <h4>Heroin metabolite (C17)</h4>
              </div>
            </div>
            <div class="col-sm-4  wow fadeIn" data-wow-duration="1s" data-wow-delay="5.3s">
              <div class="feature">
                <div class="icon icon-m">
                  <img src={icons[Math.floor(Math.random() * icons.length)]} alt="" />
                </div>
                <h4>Ketamine & norketamine (C18)</h4>
              </div>
            </div>
            <div class="col-sm-4  wow fadeIn" data-wow-duration="1s" data-wow-delay="5.6s">
              <div class="feature">
                <div class="icon icon-m">
                  <img src={icons[Math.floor(Math.random() * icons.length)]} alt="" />
                </div>
                <h4>K2/K3/spice (cannabinoids, synthetic) (C19)</h4>
              </div>
            </div>
            <div class="col-sm-4  wow fadeIn" data-wow-duration="1s" data-wow-delay="5.9s">
              <div class="feature">
                <div class="icon icon-m">
                  <img src={icons[Math.floor(Math.random() * icons.length)]} alt="" />
                </div>
                <h4>Kratom (alkaloids) (C20)</h4>
              </div>
            </div>
            <div class="col-sm-4  wow fadeIn" data-wow-duration="1s" data-wow-delay="6.1s">
              <div class="feature">
                <div class="icon icon-m">
                  <img src={icons[Math.floor(Math.random() * icons.length)]} alt="" />
                </div>
                <h4>MDMA (Ecstasy) (C21)</h4>
              </div>
            </div>
            <div class="col-sm-4  wow fadeIn" data-wow-duration="1s" data-wow-delay="6.4s">
              <div class="feature">
                <div class="icon icon-m">
                  <img src={icons[Math.floor(Math.random() * icons.length)]} alt="" />
                </div>
                <h4>Methadone (C22)</h4>
              </div>
            </div>
            <div class="col-sm-4  wow fadeIn" data-wow-duration="1s" data-wow-delay="6.7s">
              <div class="feature">
                <div class="icon icon-m">
                  <img src={icons[Math.floor(Math.random() * icons.length)]} alt="" />
                </div>
                <h4>Methylphenidate (C23)</h4>
              </div>
            </div>
            <div class="col-sm-4  wow fadeIn" data-wow-duration="1s" data-wow-delay="7s">
              <div class="feature">
                <div class="icon icon-m">
                  <img src={icons[Math.floor(Math.random() * icons.length)]} alt="" />
                </div>
                <h4>Muscle relaxants (C24)</h4>
              </div>
            </div>
            <div class="col-sm-4  wow fadeIn" data-wow-duration="1s" data-wow-delay="7.3s">
              <div class="feature">
                <div class="icon icon-m">
                  <img src={icons[Math.floor(Math.random() * icons.length)]} alt="" />
                </div>
                <h4>Opiates (C25)</h4>
              </div>
            </div>
            <div class="col-sm-4  wow fadeIn" data-wow-duration="1s" data-wow-delay="7.6s">
              <div class="feature">
                <div class="icon icon-m">
                  <img src={icons[Math.floor(Math.random() * icons.length)]} alt="" />
                </div>
                <h4>Opioids & opiate analogs (C26)</h4>
              </div>
            </div>
            <div class="col-sm-4  wow fadeIn" data-wow-duration="1s" data-wow-delay="7.9s">
              <div class="feature">
                <div class="icon icon-m">
                  <img src={icons[Math.floor(Math.random() * icons.length)]} alt="" />
                </div>
                <h4>Oxycodone (C27)</h4>
              </div>
            </div>
            <div class="col-sm-4  wow fadeIn" data-wow-duration="1s" data-wow-delay="8.1s">
              <div class="feature">
                <div class="icon icon-m">
                  <img src={icons[Math.floor(Math.random() * icons.length)]} alt="" />
                </div>
                <h4>PCP (phencyclidine) (C28)</h4>
              </div>
            </div>
            <div class="col-sm-4  wow fadeIn" data-wow-duration="1s" data-wow-delay="8.4s">
              <div class="feature">
                <div class="icon icon-m">
                  <img src={icons[Math.floor(Math.random() * icons.length)]} alt="" />
                </div>
                <h4>Pregablin (C29)</h4>
              </div>
            </div>
            <div class="col-sm-4  wow fadeIn" data-wow-duration="1s" data-wow-delay="8.7s">
              <div class="feature">
                <div class="icon icon-m">
                  <img src={icons[Math.floor(Math.random() * icons.length)]} alt="" />
                </div>
                <h4>Propoxyphene (C30)</h4>
              </div>
            </div>
            <div class="col-sm-4  wow fadeIn" data-wow-duration="1s" data-wow-delay="9s">
              <div class="feature">
                <div class="icon icon-m">
                  <img src={icons[Math.floor(Math.random() * icons.length)]} alt="" />
                </div>
                <h4>Sedative hypnotics (C31)</h4>
              </div>
            </div>
            <div class="col-sm-4  wow fadeIn" data-wow-duration="1s" data-wow-delay="9.3s">
              <div class="feature">
                <div class="icon icon-m">
                  <img src={icons[Math.floor(Math.random() * icons.length)]} alt="" />
                </div>
                <h4>Tapentadol (C32)</h4>
              </div>
            </div>
            <div class="col-sm-4  wow fadeIn" data-wow-duration="1s" data-wow-delay="9.6s">
              <div class="feature">
                <div class="icon icon-m">
                  <img src={icons[Math.floor(Math.random() * icons.length)]} alt="" />
                </div>
                <h4>Tramadol (C33)</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
