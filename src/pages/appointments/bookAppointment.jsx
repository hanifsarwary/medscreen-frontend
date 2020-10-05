import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelecCategory from './bookAppointments/selecCategory';
import {
    getTestsAction,
    getTimeSlotsAction,
    createAppointmentAction,
    getCurrentAppointmentsAction,
    getPastAppointmentsAction,
  } from 'pages/appointments/containers/actions';
import { loaderOpenAction } from 'components/loaders/components';

class BookAppointment extends Component {

    state = {
        step: 1,
        test: null,
        appointment_date: '',
        time_slot: null,
        comments: '',
        selected_options: [],
        categories: [],
        open: false
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }

    getTimeSlots = (event) => {
        var appointment_date = event.target.value;
        this.props.getTimeSlotsAction(appointment_date);
        this.setState({
          appointment_date,
        });
    };

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
        console.log(event.target);
      };

      
    handleCheckBox = (e) => {
        const newSelection = e.target.value;
        let newSelectionArray;

        if (this.state.categories.indexOf(newSelection) > -1) {
          newSelectionArray = this.state.categories.filter(
            s => s !== newSelection
          );
        } else {
          newSelectionArray = [...this.state.categories, newSelection];
        }
    
        this.setState(prevState => ({
            ...prevState.categories,
            categories: newSelectionArray 
        }));
        console.log(newSelectionArray);
    }

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
        const { step, selected_options, open, appointment_date, categories, time_slot } = this.state;
        switch(step) {
            case 1:
                return (
                    <div class="col-sm-12">
                        <div class="forms-field fade-apply appointment-form-margin">
                            <label> Select Category</label>
                            <div class="select-category">
                                {
                                    this.props.tests.map((item, i) => {
                                        return (
                                            <label key={i} className="checkbox">
                                            <input
                                                id={item.label}
                                                name={item.label}
                                                value={item.label}
                                                checked={categories.indexOf(item.label) > -1}
                                                onChange={this.handleCheckBox}
                                                type="checkbox"
                                                key={i}
                                            />
                                            {item.label}
                                            </label> 
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <button className="btn btn-primary pull-right" onClick={this.nextStep}>Next</button>
                    </div>
                )
            case 2:
                return (
                        <>
                        {
                            categories.length > 0 ?
                                <SelecCategory selected_options={this.state.selected_options}  tests={this.props.tests} handleTestOption={this.handleTestOption}/>
                                :
                                <div className="user-message fade-apply set-margin-bottom">
                                    Please Select Category
                                </div>
                            }
                            <button className="btn btn-primary pull-left" onClick={this.prevStep}>Previous</button>
                            <button className="btn btn-primary pull-right" disabled={categories.length > 0 ? false : true} onClick={this.nextStep}>Next</button>
                        </>
                )
            case 3:
                return ( 
                    <div class="appointment-form-margin">
                        {
                            this.state.selected_options.length > 0 ? 
                            <div class="col-sm-12">
                                <div class="forms-field fade-apply set-margin-bottom">
                                    <label> Select Date: </label>
                                    <input
                                        id="date"
                                        type="date"
                                        name="appointment_date"
                                        onChange={this.getTimeSlots}
                                        min={new Date()}
                                    />
                                </div>
                            </div>
                            : 
                            <div className="user-message fade-apply set-margin-bottom">
                                Please Select atleast One Panel
                            </div>
                        }
                        {
                            appointment_date ?
                                    <div class="col-sm-12">
                                    { 
                                        time_slots.length > 0 ?
                                        <div class="form-field forms-field fade-apply set-margin-bottom">
                                            <label class="custom-select"> Time Slot: </label>
                                            <select name="time_slot" required="required" onChange={this.handleChange}>
                                                <option disabled value="DEFAULT">
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
                                        <div className="user-message fade-apply set-margin-bottom">
                                            No Time Slot Avaiable
                                        </div>
                                    }
                                    </div>
                                : ''
                        }
                        <button className="btn btn-primary pull-left set-margin-top" onClick={this.prevStep}>Previous</button>
                        <button className="btn btn-primary pull-right set-margin-top" onClick={this.handleSubmit}>Book an appointment</button>
                    </div>
                )
            

        }
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(BookAppointment);