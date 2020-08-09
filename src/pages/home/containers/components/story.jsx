import React from 'react';
import { OurStory } from 'pages/home/constants';

export default function Story(props) {
  const lines = OurStory.split('\n');
  console.log(lines);
  var delay = 0.0;
  return (
    <div class="inverse-wrapper" id="drug-testing">
      <div class="container inner">
        <div class="section-title text-center">
          <h2>Our Story</h2>
          <h3>who we are</h3>
          <br />

          <div class="row">
            <div class="col-sm-6 col-sm-offset-1 col-md-10 ">
              {lines.map((value, index) => {
                delay += 0.5;
                return (
                  <p class="wow fadeIn" data-wow-duration="3s" data-wow-delay={delay + 's'} >
                    {value}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
