import React, { Component } from 'react';
import Rodal from 'rodal';

import urineForm from 'assets/pdfs/urineToxicologyRequisitionForm.pdf';
import oralForm from 'assets/pdfs/oralToxicologyRequisitionForm.pdf';
import urineCutoff from 'assets/pdfs/urineCutoff.pdf';
import oralCutoff from 'assets/pdfs/oralCutoff.pdf';
import toxicologyReport from 'assets/pdfs/toxicology-report.pdf';
import bloodRequisition from 'assets/pdfs/Blood-Req.pdf';
import brochure from 'assets/pdfs/MedScreenBrochure.pdf';

import PDFRenderer from 'components/pdfrenderer';

// include styles
import 'rodal/lib/rodal.css';

class Resources extends Component {
  render() {
    const { visible, handleClose, index } = this.props;
    const pdfs = [urineForm, oralForm, bloodRequisition, toxicologyReport, urineCutoff, oralCutoff, brochure]
    return (
      <div>
        <Rodal visible={visible} onClose={handleClose} width={655} height={655} animation={'fade'}>
          <PDFRenderer file={pdfs[index]} />
        </Rodal>
      </div>
    );
  }
}

export default Resources;
