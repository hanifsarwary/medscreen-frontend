import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Banner } from 'helpers';
import Description from 'pages/labServices/components/topDescription';
import DrugScreeningPanels from 'pages/labServices/components/drugScreeningPanels';
import DrugConfirmationPanels from 'pages/labServices/components/drugConfirmationPanels';
import {
    getTestsByID
  } from 'pages/labServices/containers/actions';
  import { loaderOpenAction } from 'components/loaders/components';

class LabServicesPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getTestsByID(this.props.match.params.id);
    }

    componentDidUpdate(prevProps) {
        if(prevProps.match.params.id !== this.props.match.params.id) {
            this.props.getTestsByID(this.props.match.params.id);
        }
    }

    render() {
        const { testsById } = this.props;
        return(
            <Fragment>
                <Banner imgUrl={testsById.main_image}/>
                <Description id={testsById.name} title={testsById.name} description={testsById.description ? testsById.description : ''} />
                { <DrugScreeningPanels panel={testsById.panel ? testsById.panel : []}/> }
                { testsById.children_categories ? <DrugConfirmationPanels chlidCategory={testsById.children_categories}/> : ''}
            </Fragment>
        );
    }
}


const mapStateToProps = (state) => {
    const { testsById } = state.TEST;
    return { testsById };
  };
  
  const mapDispatchToProps = { loaderOpenAction, getTestsByID };
  
  export default connect(mapStateToProps, mapDispatchToProps)(LabServicesPage);