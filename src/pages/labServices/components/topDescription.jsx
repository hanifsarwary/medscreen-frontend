import React from 'react';

export default function Description(props) {
  const { id, title, description } = props;
  const lines = description.split('\n');
  var delay = 0.0;
  return (
    <div class="light-wrapper" id={id}>
      <div class="container inner">
        <div class="section-title text-center">
          <h2>{title}</h2>
          {/* <h3>{subtitle}</h3> */}
          <br />

          <div class="row">
            <div class="col-sm-6 col-sm-offset-1 col-md-10 ">
              {lines.map((value, index) => {
                delay += 0.4;
                return (
                  <p key={index} class="wow fadeIn" data-wow-duration="3s" data-wow-delay={delay + 's'} style={{fontSize: '16px'}} dangerouslySetInnerHTML={{ __html: value }}>
                    {/* {value} */}
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
