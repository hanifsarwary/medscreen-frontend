import React, { Component } from 'react'

export default class Charts extends Component {
    render() {
        return (
            <div class="light-wrapper">
            <div class="col-image text-center">
              <div class="container">
                <div class="row">
                  <div class="col-md-5 inner-col">
                    <div class="section-title">
                      <h3>Company Progress</h3>
                      <p class="lead">detailed graphical information of company growth</p>
                    </div>
                    <div class="divide10"></div>
                    <div class="row">
                      <div class="col-xs-6 col-sm-3 col-md-6 circle-progress-wrapper bm40 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.0s"> <div class="circle-progress circle first"> <strong>New Visitors</strong> </div>
                      </div>
                      <div class="col-xs-6 col-sm-3 col-md-6 circle-progress-wrapper bm40 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.6s"> <div class="circle-progress circle second"> <strong>Social Media</strong> </div>
                      </div>
                      <div class="col-xs-6 col-sm-3 col-md-6 circle-progress-wrapper bm0 wow fadeIn" data-wow-duration="1s" data-wow-delay="1.2s"> <div class="circle-progress circle third"> <strong>Referals</strong> </div>
                      </div>
                      <div class="col-xs-6 col-sm-3 col-md-6 circle-progress-wrapper bm0 wow fadeIn" data-wow-duration="1s" data-wow-delay="1.8s"> <div class="circle-progress circle fourth"> <strong>Search Engines</strong> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-wrapper inverse-wrapper image-wrapper col-md-6 col-md-offset-6">
                <div class="bg-holder" style={{backgroundImage: `url(${require("assets/images/bg2.jpg")})`}}></div>
              </div>
            </div>
          </div>
        )
    }
}
