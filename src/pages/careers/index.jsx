import React, { Component } from 'react';
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
        window.open(this.props.match.url + '?step=2', "_blank")
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }
    componentDidMount() {
        this.props.getCareerListAction();
        const step = this.props.location.search ? this.props.location.search.split('=')[1] : 0;
        if (step) {
            this.setState({
                step: Number(step)
            })
        }
    }


    render() {
        const { step } = this.state;
        switch(step) {
            case 1:
                return (
                    <div className="container inner-appointment">
                        <div className="career-heading"> <h1>Careers</h1></div>
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