import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { CurrentDateString } from 'helpers';

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
    };
  }

  componentDidMount() {
    // this.props.loaderOpenAction();
    this.props.getTestsAction();
    this.props.getPastAppointmentsAction();
    this.props.getCurrentAppointmentsAction();
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  getTimeSlots = (event) => {
    var appointment_date = event.target.value;
    this.props.getTimeSlotsAction(appointment_date);
    this.setState({
      appointment_date,
    });
  };

  handleSubmit = () => {
    if (!window.confirm('Are you sure?')) return false;
    const { test, appointment_date, time_slot, comments } = this.state;
    const payload = {
      test: parseInt(test),
      appointment_date,
      time_slot: parseInt(time_slot),
      comments,
    };
    this.props.loaderOpenAction();
    this.props.createAppointmentAction(payload, this.props.history);
  };

  render() {
    const { tests, time_slots, current_appointments, past_appointments } = this.props;
    return (
      <Fragment>
        <Banner />
        <br />
        <div class="light-wrapper">
          <div class="container inner2">
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
                  <div class="light-wrapper">
                    <div class="container inner2">
                      <div class="thin">
                        <div class="form-container">
                          <form
                            action="contact/vanilla-form.php"
                            method="post"
                            class="vanilla vanilla-form"
                            onSubmit={this.handleSubmit}
                          >
                            <div class="row">
                              <div class="col-sm-6">
                                <div class="form-field">
                                  <label>
                                    Date:
                                    <input
                                      id="date"
                                      type="date"
                                      name="appointment_date"
                                      onChange={this.getTimeSlots}
                                      min={new Date()}
                                    />
                                  </label>
                                </div>
                              </div>
                              <div class="col-sm-6">
                                <div class="form-field">
                                  Test:
                                  <label class="custom-select">
                                    <select name="test" required="required" onChange={this.handleChange}>
                                      <option disabled selected value>
                                        {' '}
                                        -- select an option --{' '}
                                      </option>
                                      {tests.map((value) => (
                                        <option key={value.id} value={value.id}>
                                          {value.title}
                                        </option>
                                      ))}
                                    </select>
                                    <span></span>{' '}
                                  </label>
                                </div>
                              </div>
                              <div class="col-sm-12">
                                <div class="form-field">
                                  Time Slot:
                                  <label class="custom-select">
                                    <select name="time_slot" required="required" onChange={this.handleChange}>
                                      <option disabled selected value>
                                        {' '}
                                        -- select a date to get an option --{' '}
                                      </option>
                                      {time_slots.map((value) => (
                                        <option key={value.id} value={value.id}>
                                          {value.time_slot}
                                        </option>
                                      ))}
                                    </select>
                                    <span></span>{' '}
                                  </label>
                                </div>
                              </div>
                              <div class="col-sm-12">
                                <label>Comments:</label>
                                <textarea
                                  name="comments"
                                  placeholder="Type your message here..."
                                  rows={3}
                                  onChange={this.handleChange}
                                ></textarea>
                                <input
                                  type="submit"
                                  class="btn"
                                  value="Book an appointment"
                                  data-error="Fix errors"
                                  data-processing="Sending..."
                                  data-success="Thank you!"
                                />
                                <footer class="notification-box"></footer>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="tab1-2">
                  <ul>
                    {current_appointments.length > 0
                      ? current_appointments.map((value) => (
                          <li>
                            {value.test.title} at {value.time_slot.time_slot}
                          </li>
                        ))
                      : 'No Current Appointments'}
                  </ul>
                </div>
                <div class="tab-pane fade" id="tab1-3">
                  <ul>
                    {past_appointments.length > 0
                      ? past_appointments.map((value) => (
                        <li>
                          {value.test.title} at {value.time_slot.time_slot}
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
