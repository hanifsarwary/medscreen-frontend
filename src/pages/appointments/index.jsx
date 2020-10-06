import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Drawer from 'react-drag-drawer';
import { css } from "emotion";
import { CurrentDateString } from 'helpers';
import BookAppointment from './bookAppointment'
import PaymentPage from '../paymentMethod/PaymentPage';

import {
  getTestsAction,
  getTimeSlotsAction,
  createAppointmentAction,
  getCurrentAppointmentsAction,
  getPastAppointmentsAction,
} from 'pages/appointments/containers/actions';
import { loaderOpenAction } from 'components/loaders/components';

import { Banner } from 'helpers';

class AppointmentsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: null,
      appointment_date: '',
      time_slot: null,
      comments: '',
      selected_options: [],
      open: false
    };
  }

  componentDidMount() {
    // this.props.loaderOpenAction();
    this.props.getTestsAction();
    this.props.getPastAppointmentsAction();
    this.props.getCurrentAppointmentsAction();

  }

  toggle = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { tests, time_slots, current_appointments, past_appointments } = this.props;
    const { selected_options, open, appointment_date } = this.state;
    console.log(tests);
    return (
      <Fragment>
        {/* <Banner /> */}
        <div class="light-wrapper">
          <div class="container inner2 inner-appointment">
            <div class="row">
              <ul id="tab1" class="nav nav-tabs">
                <li class="active">
                  <a href="#tab1-1" data-toggle="tab">
                    Book An Appointment
                  </a>
                </li>
                <li>
                  <a href="#tab1-2" data-toggle="tab">
                    Current Appointments
                  </a>
                </li>
                <li>
                  <a href="#tab1-3" data-toggle="tab">
                    Appointment history
                  </a>
                </li>
              </ul>
              <div id="myTabContent" class="tab-content">
                <div class="tab-pane fade in active" id="tab1-1">
                      {
                        current_appointments.length > 0 ?
                          <div className="user-message fade-apply">
                            You cannot create new apointment
                          </div>
                        :
                        <div class="row book-an-appoinment">
                              <BookAppointment tests={tests} />
                        </div>
                      }
                </div>
                <div class="tab-pane fade" id="tab1-2">
                    {current_appointments.length > 0
                      ? 
                        <div class="container">
                          <div class="checklist set-margin-top">
                          <table class="table">
                              <tbody>
                              <tr> 
                                <td>Time Solt</td> 
                                <td> <b>{current_appointments[0].time_slot.time_slot}</b></td>
                              </tr>
                              { current_appointments[0].panels.map((item, i) => {
                                  return (
                                    <tr key={i}>
                                      <td class="text-capitalize font-weight-bold fade-apply"> <b class="pl-4">({item.panel_name})</b>
                                        <ul>
                                          {
                                            item.tests.map((test, i) => {
                                              return (
                                                <li class="set-ul-margin" key={i}>{test.title}</li>
                                              )
                                            })
                                          }
                                        </ul>
                                      </td>
                                      <td class="text-capitalize">{item.price}</td>
                                    </tr>
                                  )
                                })
                              }
                              </tbody>
                              <tfoot>
                                <tr>
                                  <th>Total Bill</th>
                                  <th>
                                    {
                                      current_appointments[0].panels.reduce( (sum, item) => sum + item.price, 0 )                                        
                                    }
                                  </th>
                                </tr>
                              </tfoot>
                            </table>
                          </div>
                          <input
                              onClick={this.toggle}
                              class="btn set-margin-top"
                              readOnly
                              value="Pay now"
                              data-error="Fix errors"
                              data-processing="Sending..."
                              data-success="Thank you!"
                          />
                          <Drawer open={open}
                                modalElementClass={modal}
                                onRequestClose={this.toggle}>
                            <div>
                                <PaymentPage amount={current_appointments[0].panels.reduce( (sum, item) => sum + item.price, 0 )}/>
                            </div>
                        </Drawer>
                        </div>
                      : 'No Current Appointments'}
                </div>
                <div class="tab-pane fade" id="tab1-3">
                  <ul>
                    {past_appointments.length > 0
                      ? past_appointments.map((value, i) => (
                        <li key={i}>
                            {value.appointment_date} at {value.time_slot.time_slot}
                        </li>
                        ))
                      : 'No Appointments History'}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  const { tests, time_slots, current_appointments, past_appointments } = state.APPOINTMENTS;
  return { tests, time_slots, current_appointments, past_appointments };
};

const mapDispatchToProps = {
  loaderOpenAction,
  getTestsAction,
  getTimeSlotsAction,
  createAppointmentAction,
  getCurrentAppointmentsAction,
  getPastAppointmentsAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentsPage);

const modal = css`
  position: absolute;
  top: 200px;
  background-color: white;
  padding: 20px 20px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;
