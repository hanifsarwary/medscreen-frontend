import React from 'react';
// import { Carousel } from 'react-responsive-carousel';

import cert1 from 'assets/images/cert1.png';
import cert2 from 'assets/images/cert2.png';
import cert3 from 'assets/images/cert3.gif';
import cert4 from 'assets/images/cert4.png';
import cert5 from 'assets/images/cert5.png';
import cert6 from 'assets/images/cert6.png';

export default function Certifications(props) {
	return (
		<div class='dark-wrapper'>
			<div class='container inner'>
				<div class='section-title text-center'>
					<h3>Certifications</h3>
					<p class='lead'></p>
				</div>
				<div class='row testimonials col3'>
					<div class='col-sm-6 col-md-4 text-center wow fadeInUp d-flex' data-wow-duration='1s' data-wow-delay='0.0s'>
						<div class='icon icon-m bm10'>
							{' '}
							<img src={cert1} alt='' />{' '}
						</div>
					</div>
					<div class='col-sm-6 col-md-4 text-center wow fadeInUp d-flex' data-wow-duration='1s' data-wow-delay='0.3s'>
						<div class='icon icon-m bm10'>
							{' '}
							<img src={cert2} alt='' />{' '}
						</div>
					</div>
					<div class='col-sm-6 col-md-4 text-center wow fadeInUp d-flex' data-wow-duration='1s' data-wow-delay='0.6s'>
						<div class='icon icon-m bm10'>
							{' '}
							<img src={cert3} alt='' />
						</div>
					</div>
					<div class='col-sm-6 col-md-4 text-center wow fadeInUp d-flex' data-wow-duration='1s' data-wow-delay='0.9s'>
						<div class='icon icon-m bm10'>
							{' '}
							<img src={cert4} alt='' />{' '}
						</div>
					</div>
					<div class='col-sm-6 col-md-4 text-center wow fadeInUp d-flex' data-wow-duration='1s' data-wow-delay='1.2s'>
						<div class='icon icon-m bm10'>
							{' '}
							<img src={cert5} alt='' />{' '}
						</div>
					</div>
					<div class='col-sm-6 col-md-4 text-center wow fadeInUp d-flex' data-wow-duration='1s' data-wow-delay='1.5s'>
						<div class='icon icon-m bm10'>
							{' '}
							<img src={cert6} alt='' />{' '}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
