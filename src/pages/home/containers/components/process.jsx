import React, { Component } from 'react';

import sample_collection from 'assets/images/icons/icons-06.png';
import sample_pickup from 'assets/images/icons/icons-07.png';
import sample_inspection from 'assets/images/icons/icon--inspection.png';
import testing_phase from 'assets/images/icons/icons-11.png';
import sample_storage from 'assets/images/icons/icons-10.png';
import results_review from 'assets/images/icons/icons-09.png';
import billing from 'assets/images/icons/icons-12.png';

import PortfolioCarousel from 'components/carousels/portfolioCarousel';

class Process extends Component {
  render() {
    return (
      <div class="light-wrapper">
        <div class="container">
          <div class="section-title text-center">
            <h2>The med screen process</h2>
            <h3>How we do things</h3>
          </div>
          <div class="carousel-wrapper wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s">
            <PortfolioCarousel navContainer='process-nav'>
              <div class="item post">
                <figure class="col-md-4">
                  <span class="process-number" style={{ backgroundColor: '#28C3EC' }}>
                    1
                  </span>
                  <img src={sample_collection} alt="" class="test-img" />
                </figure>
                <div class="post-content col-md-8">
                  <h3 class="post-title">
                    <a href="#/">Sample Collection</a>
                  </h3>
                  <div class="meta">
                    <span class="category">
                      {/* <a href="#"> */}
                      <p>
                        MSL provides on-site collectors and phlebotomists as needed.
                        <br />
                        Collectors are trained to instruct and assist the patient in providing a specimen.
                        <br />
                        Collectors are responsible to maintain the integrity of the collection process, ensuring patient
                        privacy and ensuring security if the specimen.
                        <br />
                        MSL provides all supplies necessary to collect process and transport specimens to tbe sent to
                        the laboratory for analysis.
                      </p>
                      {/* </a> */}
                    </span>
                  </div>
                </div>
              </div>
              <div class="item post">
                <figure class="col-md-4">
                  <span class="process-number" style={{ backgroundColor: '#EF3F66' }}>
                    2
                  </span>
                  <img src={sample_pickup} alt="" class="test-img" />
                </figure>
                <div class="post-content col-md-8">
                  <h3 class="post-title">
                    <a href="#/">Sample Pickup</a>
                  </h3>
                  <div class="meta">
                    <span class="category">
                      {/* <a href="#"> */}
                      <p>
                        Scheduled and on-demand sample pickup by our dedicated courier.
                        <br />
                        Couriers transport lab samples for testing in secure containers with professionalism and
                        courtesy.
                        <br />
                        Couriers are trained in specimen handling, compliance adn best practice standards.
                        <br />
                        Courier also drops off the necessary supplies to our clients locations.
                      </p>
                      {/* </a> */}
                    </span>
                  </div>
                </div>
              </div>
              <div class="item post">
                <figure class="col-md-4">
                  <span class="process-number" style={{ backgroundColor: '#1ab1ad' }}>
                    3
                  </span>
                  <img src={sample_inspection} alt="" class="test-img" />
                </figure>
                <div class="post-content col-md-8">
                  <h3 class="post-title">
                    <a href="#/">Sample Inspection and Accessioning</a>
                  </h3>
                  <div class="meta">
                    <span class="category">
                      {/* <a href="#"> */}
                      <p>
                        Upon arrival, all samples are checked to evaluates sampling and handling protocol.
                        <br />
                        Any samples that do not meet the sample handling protocol are disqualified and reported to the
                        facility.
                        <br />
                        Samples are logged into the MSL system.
                      </p>
                      {/* </a> */}
                    </span>
                  </div>
                </div>
              </div>
              <div class="item post">
                <figure class="col-md-4">
                  <span class="process-number" style={{ backgroundColor: '#F1592B' }}>
                    4
                  </span>
                  <img src={testing_phase} alt="" class="test-img" />
                </figure>
                <div class="post-content col-md-8">
                  <h3 class="post-title">
                    <a href="#/">Testing Phase</a>
                  </h3>
                  <div class="meta">
                    <span class="category">
                      {/* <a href="#"> */}
                      <p>
                        Testing is conducted in a highly controlled and regulated environment using the most
                        sophisticated instruments and anlyzers by our qualified and experienced scientists.
                        <br />
                        From advanced chemistry analyzers to highly complex LC-MS/MS instruments, we provide our clients
                        with all kinds of testing solutions.
                        <br />
                        Sample validity testing to check if sample has been diluted, bleached or adulterated by any
                        means.
                      </p>
                      {/* </a> */}
                    </span>
                  </div>
                </div>
              </div>
              <div class="item post">
                <figure class="col-md-4">
                  <span class="process-number" style={{ backgroundColor: '#CAA2CB' }}>
                    5
                  </span>
                  <img src={sample_storage} alt="" class="test-img" />
                </figure>
                <div class="post-content col-md-8">
                  <h3 class="post-title">
                    <a href="#/">Sample Storage</a>
                  </h3>
                  <div class="meta">
                    <span class="category">
                      {/* <a href="#"> */}
                      <p>
                        MSL retains all urine samples for a term of 60 days.
                        <br />
                        The samples are stored at optimum temprature to ensure the integrity of the specimen and provide
                        accurate results in case a retest is ordered for the same specimen.
                        <br />
                        If no written request for further testing is received, the specimen will be discarded at the end
                        of 60 day period.
                      </p>
                      {/* </a> */}
                    </span>
                  </div>
                </div>
              </div>
              <div class="item post">
                <figure class="col-md-4">
                  <span class="process-number" style={{ backgroundColor: '#3D6DB5' }}>
                    6
                  </span>
                  <img src={results_review} alt="" class="test-img" />
                </figure>
                <div class="post-content col-md-8">
                  <h3 class="post-title">
                    <a href="#/">Results Review and Release</a>
                  </h3>
                  <div class="meta">
                    <span class="category">
                      {/* <a href="#"> */}
                      <p>
                        Faster turn around time with initial screening done withing 5 to 10 hours and confirmation
                        testing within 24 hours.
                        <br />
                        Each result is thoroughly reviewed and then approved by our experts.
                        <br />
                        Our toxicologists are available for consultation about patient results around the clock and can
                        assist our clients to interpret the reports.
                      </p>
                      {/* </a> */}
                    </span>
                  </div>
                </div>
              </div>
              <div class="item post">
                <figure class="col-md-4">
                  <span class="process-number" style={{ backgroundColor: '#F176A1' }}>
                    7
                  </span>
                  <img src={billing} alt="" class="test-img" />
                </figure>
                <div class="post-content col-md-8">
                  <h3 class="post-title">
                    <a href="#/">Billing</a>
                  </h3>
                  <div class="meta">
                    <span class="category">
                      {/* <a href="#"> */}
                      <p>
                        MSL has a team of laboratory billing professionals with years of combined experience that
                        understand the nuances and complexities of clinical and toxicology laboratory billing.
                        <br />
                        Trained specimen collectors to ensure demographic information is accurate.
                        <br />
                        Patient encounter monitoring to ensure every speciment is properly billed.
                        <br />
                        MSL billing will work closely with the facility to ensure adherence to contracted rates.
                      </p>
                      {/* </a> */}
                    </span>
                  </div>
                </div>
              </div>
            </PortfolioCarousel>
          </div>
        </div>
      </div>
    );
  }
}

export default Process;
