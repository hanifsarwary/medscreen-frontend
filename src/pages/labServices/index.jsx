import React, { Component, Fragment } from 'react';

import { Banner } from 'helpers';
import Description from 'pages/labServices/containers/components/topDescription';
import { drugTesting } from 'pages/labServices/constants';
import DrugScreeningPanels from 'pages/labServices/containers/components/drugScreeningPanels';
import DrugConfirmationPanels from 'pages/labServices/containers/components/drugConfirmationPanels';

class LabServicesPage extends Component {
    render() {
        return(
            <Fragment>
                <Banner />
                <Description id='drug-screening' title={drugTesting.title} subtitle={drugTesting.subtitle} description={drugTesting.description} />
                <DrugScreeningPanels />
                <DrugConfirmationPanels />
            </Fragment>
        );
    }
}

export default LabServicesPage;
