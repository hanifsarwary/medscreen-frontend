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

// import { Banner } from 'helpers';

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

    const that = this;
    let sqPaymentScript = document.createElement('script');
    sqPaymentScript.src = "https://js.squareup.com/v2/paymentform";
    sqPaymentScript.type = "text/javascript"
    sqPaymentScript.async = false;
    sqPaymentScript.onload = ()=>{that.setState({
      loaded: true
    })};
    document.getElementsByTagName("head")[0].appendChild(sqPaymentScript);
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
    if (options === null) {
      this.setState({
        selected_options: [],
        test: [],
        appointment_date: '',
      })
    } else {
      this.setState({
        selected_options: options,
        test: options.map(item => {
          return item.value
        })
      })
    }
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
    const { selected_options, open, appointment_date } = this.state;
    console.log(current_appointments);
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
                  <div class="light-wrapper">
                    <div class="container">
                      <div class="thin">
                      {
                        current_appointments.length > 0 ?
                          <div className="user-message fade-apply">
                            You cannot create new apointment
                          </div>
                        :
                        <div class="form-container">
                          <form
                            action="contact/vanilla-form.php"
                            method="post"
                            class="vanilla vanilla-form"
                            onSubmit={this.handleSubmit}
                          >
                            <div class="row book-an-appoinment">
                              <div class="col-sm-12">
                                <div class="form-field forms-field">
                                  <label> Test: </label>
                                  <Select isMulti onChange={this.handleTestOption} options={tests} styles={customStyles}/>
                                </div>
                              </div>
                              {
                                selected_options.length > 0 ? 
                                <div class="col-sm-12 checklist forms-field fade-apply">
                                  <label> Selected Tests: </label>
                                  <table class="table">
                                    <tbody>
                                    { selected_options.map((item, i) => {
                                        return (
                                          <tr key={i}>
                                            <td class="text-capitalize font-weight-bold fade-apply">{item.label} <b class="pl-4">({item.parent_label})</b>
                                              <ul>
                                                {
                                                  item.panel_test.map((test, i) => {
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
                                        <th>{
                                            this.state.selected_options.reduce( (sum, item) => sum + item.price, 0 )                                        
                                          }</th>
                                      </tr>
                                    </tfoot>
                                  </table>
                                </div>
                                : ''
                              } {
                                selected_options.length > 0 ? 
                                <div class="col-sm-12">
                                  <div class="forms-field fade-apply">
                                    <label> Date: </label>
                                    <input
                                        id="date"
                                        type="date"
                                        name="appointment_date"
                                        onChange={this.getTimeSlots}
                                        min={new Date()}
                                      />
                                  </div>
                                </div>
                                : ''
                              }
                              {
                                appointment_date && selected_options.length > 0 ?
                                      <div class="col-sm-12">
                                        { time_slots.length > 0 ?
                                        <div class="form-field forms-field fade-apply">
                                          <label class="custom-select"> Time Slot: </label>
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
                                        </div>
                                        :
                                          <div className="user-message fade-apply">
                                            No Time Slot Avaiable
                                          </div>
                                        }
                                      </div>
                                  : ''
                              }
                              <div class="col-sm-12 form-field forms-field">
                                <label>Comments:</label>
                                <textarea
                                  name="comments"
                                  placeholder="Type your message here..."
                                  rows={3}
                                  onChange={this.handleChange}
                                ></textarea>
                                <input
                                  type="submit"
                                  class="btn pull-right"
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
                              // onClick={()=> {this.paymentMethod()}}
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
