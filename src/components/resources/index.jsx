import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Rodal from 'rodal';

import urineForm from 'assets/pdfs/urineToxicologyRequisitionForm.pdf';
import oralForm from 'assets/pdfs/oralToxicologyRequisitionForm.pdf';
import urineCutoff from 'assets/pdfs/urineCutoff.pdf';
import oralCutoff from 'assets/pdfs/oralCutoff.pdf';
import toxicologyReport from 'assets/pdfs/toxicology-report.pdf';
import bloodRequisition from 'assets/pdfs/Blood-Req.pdf';
import brochure from 'assets/pdfs/MedScreenBrochure.pdf';
import convid19TestPrices  from 'assets/pdfs/covid19-test-prices.pdf'

import PDFRenderer from 'components/pdfrenderer';
import CovidTestingPrices from 'components/Modalbody'

// include styles
import 'rodal/lib/rodal.css';

class Resources extends Component {

  constructor(props) {
   super(props)
    this.state = {
      modalWidth: window.innerWidth < 855 ? window.innerWidth - 50 : 855,
    };
    this.updateModalDimensions = this.updateModalDimensions.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateModalDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateModalDimensions);
  }

  updateModalDimensions() {
    const newWidth = window.innerWidth < 855 ? window.innerWidth - 50 : 855;
    this.setState({
      modalWidth: newWidth,
    });
  }

  render() {
    const { visible, handleClose, index } = this.props;
    const pdfs = [urineForm, oralForm, bloodRequisition, toxicologyReport, urineCutoff, oralCutoff, brochure,convid19TestPrices]
    return (
      <div>
        {
        index<7?
        <Rodal visible={visible} onClose={handleClose} width={655} height={655} animation={'fade'}>
          <PDFRenderer file={pdfs[index]} />
        </Rodal>
        :
        <Rodal visible={visible} onClose={handleClose} width={this.state.modalWidth} height={455} animation={'fade'}>
         <CovidTestingPrices />
        </Rodal>
        }

      </div>
    );
  }
}

export default withRouter(Resources);
