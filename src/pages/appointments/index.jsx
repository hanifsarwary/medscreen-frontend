import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Drawer from 'react-drag-drawer';
import { css } from "emotion";
import BookAppointment from './bookAppointments/bookAppointment';
import AppointmentHistory from './appointmentHistory/appointmentHistory';
import PaymentPage from '../paymentMethod/PaymentPage';
import { updateAppointmentPaymentStatus } from 'pages/appointments/containers/actions';

import {
  getTestsAction,
  getTimeSlotsAction,
  createAppointmentAction,
  getCurrentAppointmentsAction,
  getPastAppointmentsAction,
  cancelCurrentAppointmentsAction
} from 'pages/appointments/containers/actions';
import { loaderOpenAction } from 'components/loaders/components';

// import { Banner } from 'helpers';

class AppointmentsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: null,
      open: false
    };
  }

  componentDidMount() {
    // this.props.loaderOpenAction();
    this.props.getTestsAction();
    if (localStorage.getItem('access_token')) {
      this.props.getPastAppointmentsAction();
      this.props.getCurrentAppointmentsAction();
    }

  }

  toggle = () => {
    this.setState({ open: !this.state.open });
  };

  payAtFaciltity = () => {
    const { current_appointments } = this.props;
    const payload = {
      status: "confirmed",
      transaction_details: "",
      appointment_id: current_appointments[0].id
    }
    this.props.updateAppointmentPaymentStatus(payload, this.props.history)
    this.props.loaderOpenAction();
  };

  cancelAppointment = () => {
    this.props.loaderOpenAction();
    this.props.cancelCurrentAppointmentsAction(this.props.current_appointments[0].id, this.props.history)
  }

  render() {
    const { tests, current_appointments, past_appointments } = this.props;
    const { open } = this.state;
    return (
      <Fragment>
        {/* <Banner /> */}
          <div class="container inner-appointment">
            <div class="row">
              <ul id="tab1" class="nav nav-tabs">
                <li className={(current_appointments.length ? '' : 'active')}>
                  <a href="#tab1-1" data-toggle="tab">
                    Book An Appointment
                  </a>
                </li>
                <li className={(current_appointments.length > 0 ? 'active' : '')}>
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
                <div className={"tab-pane fade in " + (current_appointments.length ? '' : 'active')}  id="tab1-1">
                      {
                        current_appointments.length > 0 ?
                          <div className="user-message fade-apply">
                            You cannot create new apointment
                          </div>
                        :
                        <div class="row book-an-appoinment">
                          {
                            tests.length > 0 ?
                              <BookAppointment tests={tests} />
                            : ''
                          }
                        </div>
                      }
                </div>
                <div className={"tab-pane fade in " + (current_appointments.length > 0 ? 'active' : '')}  id="tab1-2">
                    {current_appointments.length > 0
                      ? 
                        <div class="container">
                          <div class="checklist set-margin-top">
                            <h4>Your Appointment:</h4>
                          <table class="table tm15">
                              <tbody>
                              <tr> 
                                <td>Time Solt</td> 
                                <td> <b>{current_appointments[0].time_slot ? current_appointments[0].time_slot.time_slot : ''}</b></td>
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
                                      <td></td>
                                    </tr>
                                  )
                                })
                              }
                              </tbody>
                              <tfoot>
                                <tr>
                                  <th>Total Bill</th>
                                  <th>
                                    {current_appointments[0].total_price}
                                  </th>
                                </tr>
                              </tfoot>
                            </table>
                          </div>
                          <input
                              onClick={this.toggle}
                              class="btn set-margin-top pull-right"
                              readOnly
                              value="Pay now"
                              data-error="Fix errors"
                              data-processing="Sending..."
                              data-success="Thank you!"
                          />
                          <input
                              onClick={this.payAtFaciltity}
                              class="btn set-margin-top pull-right rm5"
                              readOnly
                              value="PAY AT FACILITY"
                              data-error="Fix errors"
                              data-processing="Sending..."
                              data-success="Thank you!"
                          />
                          <input
                              onClick={this.cancelAppointment}
                              class="btn set-margin-top pull-right rm5"
                              readOnly
                              value="Cancel"
                              data-error="Fix errors"
                              data-processing="Sending..."
                              data-success="Thank you!"
                          />
                          <Drawer open={open}
                                modalElementClass={modal}
                                onRequestClose={this.toggle}>
                            <div>
                                <PaymentPage appointment_id={current_appointments[0].id} amount={current_appointments[0].panels.reduce( (sum, item) => sum + item.price, 0 )}/>
                            </div>
                        </Drawer>
                        </div>
                      : 'No Current Appointments'}
                </div>
                <div class="tab-pane fade" id="tab1-3">
                  <ul>
                    {past_appointments.length > 0
                      ? 
                      <AppointmentHistory past_appointments={past_appointments} />
                      // past_appointments.map((value, i) => (
                      //   <li key={i}>
                      //       {value.appointment_date} at {value.time_slot ? value.time_slot.time_slot : ''}
                      //   </li>
                      // ))
                      : 'No Appointments History'}
                  </ul>
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
  cancelCurrentAppointmentsAction,
  updateAppointmentPaymentStatus
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
