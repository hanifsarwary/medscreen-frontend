import React, { Component } from 'react';
import Moment from 'react-moment';
import '../careers.css';

export default class CareerJobList extends Component {
    render() {
        return (
            <div className="row">
                {
                    this.props.jobList.map((item, i) => {
                        return (
                            <div className="col-sm-4" key={i}>
                                <div class="card tm-20 fade-apply">
                                    <div className="card-header">
                                        <div className="job-info row"> <b className="col-sm-5 lp-60">Job Title</b> <span className="col-sm-7">{item.title}</span> </div>
                                        <div className="job-info row"> <b className="col-sm-5 lp-60">Salary</b> <span className="col-sm-7">{item.salary}</span> </div>
                                        <div className="job-info row"> <b className="col-sm-5 lp-60">Location</b> <span className="col-sm-7">{item.location}</span> </div>
                                        <div className="job-info row text-danger"> <b className="col-sm-5 lp-60">Last Date</b> 
                                            <span className="col-sm-7">
                                                <Moment format="MM-DD-YYYY">{item.last_date_for_application}</Moment>
                                            </span> 
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <div className="job-description">
                                            <b>Description :</b>
                                            <p>{item.description}</p>
                                        </div>
                                        <input class="btn btn-apply-now" onClick={this.props.nextStep} readOnly value="Apply"/>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
