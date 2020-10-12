import React from 'react';
import beaker from 'assets/images/icons/icon2.svg';


export default function DrugConfirmationPanels(props) {
    return (
      <div class="dark-wrapper" id="drug-confirmation">
           { props.chlidCategory.map((category, i) => {
             return (
              <div class="container inner" key={i}>
                <div class="section-title text-center">
                  <h2>{category.name}</h2>
                  {/* <h3>We are here to serve you</h3> */}
                </div>
                <div class="row" key={i}>
                  {
                    category.panel.map((panel, i) => {
                      return (
                        <div class="col-sm-4 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.3s" key={i}>
                          <div class="row">
                            <div class="col-sm-4 icon icon-m">
                              <img src={beaker} alt="" />
                            </div>
                            <div class="col-sm-8 pl-0">
                              <h4 className="tm30">{panel.panel_name}</h4>
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
              )
            })
           }
      </div>
    );
}