import React from 'react';
import { Link } from 'react-router-dom';
import beaker from 'assets/images/icons/icon2.svg';

export default function DrugScreeningPanels(props) {
  return (
    <div class="dark-wrapper">
      {props.panel.length > 0 ? (
        <div class="container inner">
          <div class="section-title text-center">
            {/* <h2>Drug Screening</h2> */}
            {/* <h3>We are here to serve you</h3> */}
          </div>
          <div class="row">
            {props.panel.map((panel, i) => {
              return (
                <div key={i} class="col-sm-4 col-md-4 wow fadeIn" data-wow-duration="1.5s" data-wow-delay="0.5s">
                  <div className="row">
                    <div class="icon col-sm-4">
                      <img src={beaker} alt="" className="responsive" />
                    </div>
                    <div class="col-sm-8 pl-0">
                      <h4 className="tm30">{panel.panel_name}</h4>
                      <ul>
                        {panel.tests.map((test, i) => {
                          return <li key={i}>{test.title}</li>;
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="btn-appointments tp20">
            <Link to="/appointments" class="btn btn-large">
              Book an Appointment
            </Link>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
