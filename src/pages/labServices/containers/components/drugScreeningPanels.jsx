import React from 'react';
import beaker from 'assets/images/icons/icon2.svg';


export default function DrugScreeningPanels(props) {
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
                  <img src={beaker} alt="" />{' '}
                </div>
                <h4>5 panel</h4>
                <ul>
                    <li>Amphetamines</li>
                    <li>Benzodiazepines</li>
                    <li>Cocaine</li>
                    <li>Opiates</li>
                    <li>THC (Cannabinoids)</li>
                    <li>Specimen validity</li>
                </ul>
              </div>
            </div>
            <div class="col-sm-4 col-md-4 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="1s">
              <div class="feature">
                <div class="icon icon-m">
                  {' '}
                  <img src={beaker} alt="" />{' '}
                </div>
                <h4>10 panel</h4>
                <ul>
                    <li>Amphetamines</li>
                    <li>Barbiturates</li>
                    <li>Benzodiazepines</li>
                    <li>Cocaine</li>
                    <li>Methadone</li>
                    <li>Opiates</li>
                    <li>Oxycodone</li>
                    <li>Phencyclidine</li>
                    <li>Propoxyphene</li>
                    <li>THC (Cannabinoids)</li>
                    <li>Specimen validity</li>
                </ul>
              </div>
            </div>
            <div class="col-sm-4 col-md-4 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="1.5s">
              <div class="feature">
                <div class="icon icon-m">
                  {' '}
                  <img src={beaker} alt="" />{' '}
                </div>
                <h4>12 panel</h4>
                <ul>
                    <li>Amphetamines</li>
                    <li>Barbiturates</li>
                    <li>Benzodiazepines</li>
                    <li>Buprenorphine</li>
                    <li>Cocaine</li>
                    <li>Ethanol</li>
                    <li>MDMA</li>
                    <li>Methadone</li>
                    <li>Opiates</li>
                    <li>Oxycodone</li>
                    <li>Phencyclidine</li>
                    <li>Propoxyphene</li>
                    <li>THC (Cannabinoids)</li>
                    <li>Specimen validity</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
