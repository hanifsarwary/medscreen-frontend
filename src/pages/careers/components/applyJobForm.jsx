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
            selectedFile: null
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    onFileChange = event => { 
        this.setState({ selectedFile: event.target.files[0] });
    }; 

    handleSubmit = (event) => {
        event.preventDefault();
        const { first_name, last_name, email, contact_no, cover_letter } = this.state;

        const formData = new FormData(); 
        formData.append('resume', this.state.selectedFile); 
        formData.append('first_name', first_name);
        formData.append('last_name', last_name);
        formData.append('email', email);
        formData.append('contact_no', contact_no);
        formData.append('cover_letter', cover_letter);
        this.props.loaderOpenAction();
        this.props.applyForJobAction(formData, this.props.history);
    }

    render() {
        const { first_name, last_name, email, contact_no, cover_letter } = this.state;
        return (
            <div className="container inner-appointment">
                <div> <h3>Fill Application Form</h3></div>
                <div className="container tm25 fade-apply">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="first_name">First name</label>
                            <input name="first_name" required value={first_name} onChange={this.handleChange} className="form-control" type="text" placeholder="First name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="last_name">Last name</label>
                            <input name="last_name" required value={last_name} onChange={this.handleChange} className="form-control" type="text" placeholder="Last name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input name="email" required value={email} onChange={this.handleChange} className="form-control" type="email" placeholder="Email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="contact_no">Contact no</label>
                            <input name="contact_no" required value={contact_no} onChange={this.handleChange} className="form-control" type="text" placeholder="Contact no"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="cover_letter">Cover letter</label>
                            <textarea name="cover_letter" required value={cover_letter} id="cover_letter" cols="30" rows="5" onChange={this.handleChange}></textarea>
                        </div>
                        <div className="form-group">
                            <input type="file" required className="form-control" onChange={this.onFileChange} /> 
                        </div>
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