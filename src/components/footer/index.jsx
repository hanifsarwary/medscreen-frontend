import React, { Component } from 'react';
import logo from 'assets/images/logo.png';

class Footer extends Component {
  render() {
    return (
      <footer class="footer inverse-wrapper">
        <div class="container inner2">
          <div class="row">
            <div class="col-sm-4">
              <div class="widget">
                {' '}
                <img src={logo} alt="" />
                <div class="divide20"></div>
                <p>
                  Med Screen Laboratories is a state of the art high complexity toxicology laboratory dedicated to the
                  monitoring and detection of addiction and substance misuse.{' '}
                </p>
                <ul class="social">
                    <li>
                      <a href="https://www.linkedin.com/in/med-screen-laboratories-413a6a199">
                        <i class="icon-s-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/Medscreen-Laboratories-303502543596874/">
                        <i class="icon-s-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com/medscreenlabs?igshid=1kw4y6604w4ex">
                        <i class="icon-s-instagram"></i>
                      </a>
                    </li>
                  </ul>
              </div>
            </div>

            {/* <div class='col-sm-4'>
							<div class='widget'>
								<h4 class='widget-title'>Recent Posts</h4>
								<ul class='post-list'>
									<li>
										<figure class='overlay'>
											{' '}
											<a href='blog-post.html'>
												<div class='overlay icon'>
													<div class='info'></div>
												</div>
												<img src='style/images/art/a1.jpg' alt='' />
											</a>{' '}
										</figure>
										<div class='post-content'>
											<p>
												{' '}
												<a href='blog-post.html'>Magna mollis ultricies</a>{' '}
											</p>
											<div class='meta'>
												<span class='date'>3th Oct 2012</span>{' '}
											</div>
										</div>
									</li>
									<li>
										<figure class='overlay'>
											{' '}
											<a href='blog-post.html'>
												<div class='overlay icon'>
													<div class='info'></div>
												</div>
												<img src='style/images/art/a2.jpg' alt='' />
											</a>{' '}
										</figure>
										<div class='post-content'>
											<p>
												{' '}
												<a href='blog-post.html'>Ornare nullam risus</a>{' '}
											</p>
											<div class='meta'>
												<span class='date'>28th Sep 2012</span>{' '}
											</div>
										</div>
									</li>
									<li>
										<figure class='overlay'>
											{' '}
											<a href='blog-post.html'>
												<div class='overlay icon'>
													<div class='info'></div>
												</div>
												<img src='style/images/art/a3.jpg' alt='' />
											</a>{' '}
										</figure>
										<div class='post-content'>
											<p>
												{' '}
												<a href='blog-post.html'>Euismod nullam</a>{' '}
											</p>
											<div class='meta'>
												<span class='date'>15th Aug 2012</span>{' '}
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div> */}

            <div class="col-sm-4">
              <div class="widget">
                <h4 class="widget-title">Get in Touch</h4>
                <address>
                  <strong>Med Screen Labs</strong>
                  <br />
                  992 Clifton Ave, Clifton, <br />
                  NJ 07013
                  <br />
                  <abbr title="Phone">Phone:</abbr> (973) 320-3237 <br />
                  <abbr title="Email">Email:</abbr> <a href="mailto:#">info@medscreenlabs.com</a>
                </address>
              </div>
              {/* <div class="widget">
                <h4 class="widget-title">Subscribe</h4>
                <div class="newsletter-wrapper">
                  <div id="mc_embed_signup2" class="newsletter-form">
                    <form
                      action="http://elemisfreebies.us3.list-manage1.com/subscribe/post?u=ddc180777a163e0f9f66ee014&amp;id=056957de28"
                      method="post"
                      id="mc-embedded-subscribe-form2"
                      name="mc-embedded-subscribe-form"
                      class="validate"
                      target="_blank"
                      noValidate
                    >
                      <input
                        type="email"
                        value=""
                        name="EMAIL"
                        class="email"
                        id="mce-EMAIL2"
                        placeholder="Enter email"
                        required=""
                      />
                      <div style={{ position: 'absolute', left: '-5000px' }}>
                        <input type="text" name="b_ddc180777a163e0f9f66ee014_056957de28" value="" />
                      </div>
                      <div class="clear">
                        <input type="submit" value="Join" name="subscribe" id="mc-embedded-subscribe2" class="btn" />
                      </div>
                    </form>
                  </div>
                </div>
              </div> */}
            </div>
            <div class="col-sm-4">
              <div class="widget">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.3863425794916!2d-74.16616104902904!3d40.863394979214235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2ff9e63e1ad41%3A0x95d8df79222c101c!2sMed%20Screen%20Labs!5e0!3m2!1sen!2str!4v1596446875708!5m2!1sen!2str"
                  width="100%"
                  height="200"
                  frameBorder={0}
                  style={{border:0}}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            {/* <div class='col-sm-3'>
							<div class='widget'>
								<h4 class='widget-title'>Recent Tags</h4>
								<ul class='tag-list'>
									<li>
										{' '}
										<a href='#' class='btn'>
											Blog
										</a>{' '}
									</li>
									<li>
										{' '}
										<a href='#' class='btn'>
											Photography
										</a>{' '}
									</li>
									<li>
										{' '}
										<a href='#' class='btn'>
											Illustation
										</a>{' '}
									</li>
									<li>
										{' '}
										<a href='#' class='btn'>
											Fun
										</a>{' '}
									</li>
								</ul>
							</div>
							<div class='widget'>
								<h4 class='widget-title'>Top Categories</h4>
								<ul class='circled'>
									<li>
										{' '}
										<a href='#'>Lifestyle (21)</a>{' '}
									</li>
									<li>
										{' '}
										<a href='#'>Photography (19)</a>{' '}
									</li>
									<li>
										{' '}
										<a href='#'>Journal (16)</a>{' '}
									</li>
									<li>
										{' '}
										<a href='#'>Works (7)</a>{' '}
									</li>
								</ul>
							</div>
						</div> */}
          </div>
        </div>

        <div class="sub-footer">
          <div class="container inner3">
            <p class="text-center">
              © 2020. All rights reserved by Med Screen Laboratories Inc.
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
