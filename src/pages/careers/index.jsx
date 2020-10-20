import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCareerListAction } from 'pages/careers/containers/actions';
import { loaderOpenAction } from 'components/loaders/components';
import { Card } from 'react-bootstrap';
import CareerJobList from 'pages/careers/components/careerJobList';
import ApplyJobForm from './components/applyJobForm';
import './careers.css';

class CareerPage extends Component {

    applyJob = () => {
        window.open('/apply-for-job', "_blank")
    }

    componentDidMount() {
        this.props.getCareerListAction();
    }

    render() {
        return (
            <div className="container inner-appointment">
                <div className="career-heading"> <h1>Careers</h1></div>
                {
                    this.props.careersLits ? 
                        <CareerJobList nextStep={this.applyJob} jobList={this.props.careersLits}/>
                    : ''
                }
            </div>
        )
    }
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