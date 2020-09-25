import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Drawer from 'react-drag-drawer';
import { css } from "emotion";
import { CurrentDateString } from 'helpers';
import Select from "react-select";
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

const customStyles = {
  control: base => ({
    ...base,
    height: 38,
    borderRadius: '0',
  }),
  valueContainer: (provided) => ({
    ...provided,
    position: 'unset',
    height: 38,
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    width: '0px',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    paddingTop: 0,
    paddingBottom: 0,
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: 'white'
  }),
};

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

  handleTestOption = (options) => {
    this.setState({
      selected_options: options,
      test: options.map(item => {
        return item.value
      })
    })
  };

  handleSubmit = () => {
    if (!window.confirm('Are you sure?')) return false;
    const { test, appointment_date, time_slot, comments, selected_options } = this.state;
    const payload = {
      panels: test,
      appointment_date,
      time_slot: parseInt(time_slot),
      comments,
      total_price: selected_options.reduce((sum, item) => sum + item.price, 0)   
    };
    this.props.loaderOpenAction();
    this.props.createAppointmentAction(payload, this.props.history);
  };

  render() {
    const { tests, time_slots, current_appointments, past_appointments } = this.props;
    const { selected_options, open } = this.state;
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
                      {
                          current_appointments.length > 0 ?
                          'You cannot create new apointment'
                          :
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
                                  <Select isMulti onChange={this.handleTestOption} options={tests} styles={customStyles}/>
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
                              <div class="col-sm-12 checklist">
                                Selected Tests:
                                <table class="table">
                                  <tbody>
                                  { selected_options.map((item, i) => {
                                      return (
                                        <tr key={i}>
                                          <td class="text-capitalize font-weight-bold">{item.label} <b class="pl-4">({item.parent_label})</b></td>
                                          <td class="text-capitalize">{item.price}</td>
                                        </tr>
                                      )
                                    })
                                  }
                                  </tbody>
                                  <tfoot>
                                    <tr>
                                      <th>Total Bill</th>
                                      <th>{
                                          this.state.selected_options.reduce(
                                            (sum, item) => sum + item.price,
                                            0
                                          )                                        
                                        }</th>
                                    </tr>
                                  </tfoot>
                                </table>
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
                      }
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="tab1-2">
                    {current_appointments.length > 0
                      ? current_appointments.map((value) => (
                        <div class="container">
                          <div class="checklist">
                            <table class="table">
                              <thead>
                                <tr>
                                  <th>Date</th>
                                  <th>Time Slot</th>
                                </tr>
                              </thead>
                              <tbody>
                              { current_appointments.map((item, i) => {
                                  return (
                                    <tr key={i}>
                                      <td>{item.appointment_date}</td>
                                      <td>{item.time_slot}</td>
                                    </tr>
                                  )
                                })
                              }
                              </tbody>
                              <tfoot>
                                <tr>
                                  <th>Total Bill</th>
                                  <th>{value.total_price}</th>
                                </tr>
                              </tfoot>
                            </table>
                          </div>
                          <input
                              // onClick={()=> {this.paymentMethod()}}
                              onClick={this.toggle}
                              class="btn"
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
                                <PaymentPage/>
                            </div>
                        </Drawer>
                        </div>
                        ))
                      : 'No Current Appointments'}
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

const modal = css`
  position: absolute;
  top: 200px;
  background-color: white;
  padding: 15px 20px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;
