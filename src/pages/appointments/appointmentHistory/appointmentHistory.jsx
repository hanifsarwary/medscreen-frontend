import React, { Component } from 'react';
import { Button, Accordion, Card } from 'react-bootstrap';

export default class AppointmentHistory extends Component {
    render() {
        return (
            <Accordion>
            {
                this.props.past_appointments.map((appointment, i) => (
                <Card key={i} className="history-card">
                    <Card.Header className="history-card-header">
                        <Accordion.Toggle as={Button} eventKey={appointment.id} className="card-panel-btn">
                           Time Slot - {appointment.time_slot ? appointment.time_slot.time_slot : ''}
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={appointment.id}>
                        <Card.Body className="checklist history-card-body fade-apply text-left">
                            <h3>Appointment History</h3>
                            {
                                <table className="table">
                                    <tbody>
                                    { appointment.panels.map((item, i) => {
                                        return (
                                            <tr key={i}>
                                                <td class="text-capitalize font-weight-bold fade-apply"> <b class="pl-4">({item.panel_name})</b>
                                                <ul>{ 
                                                        item.tests.map((test, i) => {
                                                            return (
                                                                <li class="set-ul-margin" key={i}>{test.title}</li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                                </td>
                                                <td class="text-capitalize">{item.price} </td>
                                            </tr>
                                            )
                                        })
                                    }
                                    </tbody>
                                    <tfoot>
                                    <tr>
                                        <th>Total Bill</th>
                                        <th> { appointment.panels.reduce( (sum, item) => sum + item.price, 0 ) } </th>
                                    </tr>
                                    </tfoot>
                                </table>
                            }
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                ))
            }
            </Accordion>
        )
    }
}
