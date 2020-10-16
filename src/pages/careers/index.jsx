import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getCareerListAction } from 'pages/careers/containers/actions';
import { loaderOpenAction } from 'components/loaders/components';
import { Card } from 'react-bootstrap';
import CareerJobList from 'pages/careers/components/careerJobList';
import ApplyJobForm from './components/applyJobForm';
import './careers.css';

class CareerPage extends Component {
    state = {
        step: 1,
    }
    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }
    componentDidMount() {
        this.props.getCareerListAction();
    }


    render() {
        const { step } = this.state;
        switch(step) {
            case 1:
                return (
                    <div className="container inner-appointment">
                        <div className="career-heading"> <h1>Careers</h1></div>
                        <Card className="tm25">
                            <Card.Header className="row fade-apply ">
                                <b className="col-sm-3">Title</b>
                                <b className="col-sm-3">Salary</b>
                                <b className="col-sm-3">Location</b>
                                <b className="col-sm-3">Last Date</b>
                            </Card.Header>
                        </Card>
                        {
                            this.props.careersLits ? 
                                <CareerJobList nextStep={this.nextStep} jobList={this.props.careersLits}/>
                            : ''
                        }
                    </div>
                )
            case 2:
                return (
                    <ApplyJobForm prevStep={this.prevStep}/>
                )
        }
    }

    // render() {
    //     return (
    //         <Fragment>
    //             <div className="container inner-appointment">
    //                 <div className="career-heading"> <h1>Careers</h1></div>
    //                 <Card className="tm25">
    //                     <Card.Header className="row fade-apply ">
    //                         <b className="col-sm-3">Title</b>
    //                         <b className="col-sm-3">Salary</b>
    //                         <b className="col-sm-3">Location</b>
    //                         <b className="col-sm-3">Last Date</b>
    //                     </Card.Header>
    //                 </Card>
    //                  {
    //                     this.props.careersLits ? 
    //                      <CareerJobList jobList={this.props.careersLits}/>
    //                     : ''
    //                  }
    //             </div>
    //         </Fragment>
    //     )
    // }
}


const mapStateToProps = (state) => {
    const { careersLits } = state.CAREERS;
    return { careersLits};
  };
  
  const mapDispatchToProps = {
    loaderOpenAction,
    getCareerListAction
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(CareerPage);