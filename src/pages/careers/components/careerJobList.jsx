import React, { Component } from 'react'
import { Button, Accordion, Card } from 'react-bootstrap';
import '../careers.css';

export default class CareerJobList extends Component {
    render() {
        return (
            <Accordion> {
                this.props.jobList.map((item, i) => {
                    return (
                        <Card key={i}>
                            <Card.Header>
                                <Accordion.Toggle as={Button} eventKey={item.id} className="card-header row fade-apply ">
                                    <span className="col-sm-3">{item.title}</span>
                                    <span className="col-sm-3">{item.salary}</span>
                                    <span className="col-sm-3">{item.location}</span>
                                    <span className="col-sm-3 text-danger">{item.last_date_for_application}</span>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey={item.id}>
                                <Card.Body>
                                    <div className="job-description fade-apply">
                                        <b>Description :</b>
                                        <p>{item.description}</p>
                                    </div>
                                    <input class="btn btn-apply-now" onClick={this.props.nextStep} readOnly value="Apply"/>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    )
                })
            } </Accordion>
        )
    }
}
