import React from 'react';
import { OurStory } from 'pages/home/constants';

export default function Story(props) {
  const lines = OurStory.split('\n');
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
                <p class="wow fadeIn" data-wow-duration="3s" data-wow-delay={0.4 + 's'} style={{fontSize: '16px'}} dangerouslySetInnerHTML={{ __html: props.description }}>
                  {/* {props.description} */}
                </p>
              {/* {lines.map((value, index) => {
                delay += 0.4;
                return (
                  <p class="wow fadeIn" data-wow-duration="3s" data-wow-delay={delay + 's'} style={{fontSize: '16px'}} key={index}>
                    {value}
                  </p>
                );
              })} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
