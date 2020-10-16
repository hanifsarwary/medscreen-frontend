import React, { Component } from 'react';
import { connect } from 'react-redux';
import { applyForJobAction } from 'pages/careers/containers/actions';
import { loaderOpenAction } from 'components/loaders/components';

class ApplyJobForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            contact_no: '',
            cover_letter: '',
            resume: null,
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { first_name, last_name, email, contact_no, cover_letter } = this.state;
        console.log(first_name, last_name, email, contact_no, cover_letter);
        const payload = {
            first_name, last_name, email, contact_no, cover_letter
        };
        this.props.loaderOpenAction();
        this.props.applyForJobAction(payload, this.props.history);
    }

    render() {
        const { first_name, last_name, email, contact_no, cover_letter } = this.state;
        return (
            <div className="container inner-appointment">
                <div> <h3>Fill Application Form</h3></div>
                <div className="container tm25">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="first_name">First name</label>
                            <input name="first_name" value={first_name} onChange={this.handleChange} className="form-control" type="text" placeholder="First name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="last_name">Last name</label>
                            <input name="last_name" value={last_name} onChange={this.handleChange} className="form-control" type="text" placeholder="Last name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input name="email" value={email} onChange={this.handleChange} className="form-control" type="email" placeholder="Email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="contact_no">Contact no</label>
                            <input name="contact_no" value={contact_no} onChange={this.handleChange} className="form-control" type="text" placeholder="Contact no"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="cover_letter">Cover letter</label>
                            <textarea name="cover_letter" value={cover_letter} id="cover_letter" cols="30" rows="5" onChange={this.handleChange}></textarea>
                        </div>

                        <button className="btn btn-primary pull-left" onClick={this.props.prevStep}>Previous</button>
                        <button type="submit" className="btn btn-primary pull-right mt-3 w-75">Apply</button>
                    </form>
                </div>
            </div>
        )
    }
}


  const mapDispatchToProps = {
    loaderOpenAction,
    applyForJobAction
  };
  
  export default connect(null, mapDispatchToProps)(ApplyJobForm);