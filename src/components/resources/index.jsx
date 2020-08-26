import React, { Component } from 'react';
import Rodal from 'rodal';
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import Slider from "react-slick";

import urineForm from 'assets/pdfs/urineToxicologyRequisitionForm.pdf';
import oralForm from 'assets/pdfs/oralToxicologyRequisitionForm.pdf';
import urineCutoff from 'assets/pdfs/urineCutoff.pdf';
import oralCutoff from 'assets/pdfs/oralCutoff.pdf';
import brochure from 'assets/pdfs/MedScreenBrochure.pdf';

import PDFRenderer from 'components/pdfrenderer';

// include styles
import 'rodal/lib/rodal.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class Resources extends Component {
  componentDidUpdate() {
    const { index } = this.props;
    this.slider.slickGoTo(index)
  }

  render() {
    const { visible, handleClose } = this.props;
    var settings = {
      centerMode: true,
      lazyLoad: true
    };
    return (
      <div>
        <Rodal visible={visible} onClose={handleClose} width={800} height={630} animation={'fade'}>
          <Slider {...settings} ref={(slider) => (this.slider = slider)}>
            <div>
              <PDFRenderer file={urineForm} />
            </div>
            <div>
              <PDFRenderer file={oralForm} />
            </div>
            <div>
              <PDFRenderer file={urineCutoff} />
            </div>
            <div>
              <PDFRenderer file={oralCutoff} />
            </div>
            <div>
              <PDFRenderer file={brochure} />
            </div>
          </Slider>
        </Rodal>
      </div>
    );
  }
}

export default Resources;
