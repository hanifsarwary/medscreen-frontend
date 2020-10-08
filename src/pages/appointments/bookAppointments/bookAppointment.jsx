import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelecCategory from './selecCategory';
import {
    getTestsAction,
    getTimeSlotsAction,
    createAppointmentAction,
    getCurrentAppointmentsAction,
    getPastAppointmentsAction,
  } from 'pages/appointments/containers/actions';
import { loaderOpenAction } from 'components/loaders/components';
import NestedCheckBox from './nestedCheckBox';

class BookAppointment extends Component {

    state = {
        step: 1,
        test: null,
        appointment_date: '',
        time_slot: null,
        comments: '',
        selected_options: [],
        selected_test: [],
        categories: [],
        open: true
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
        this.setState({ [name]: value, open: false });
      };

      
    handleCheckBox = (e) => {
        const newSelection = e.target.value;
        let newSelectionArray;
        let newSelectTest;

        if (this.state.categories.indexOf(newSelection) > -1) {
            newSelectionArray = this.state.categories.filter( s => s !== newSelection );
            newSelectTest = this.state.selected_test.filter(test =>  test.name !== newSelection )
        } 
        else {
            newSelectionArray = [...this.state.categories, newSelection];
            newSelectTest = [...this.state.selected_test, this.props.tests.filter(test =>  test.name === newSelection )[0]]
        }
        
        this.setState(prevState => ({
            ...prevState.categories,
            categories: newSelectionArray,
            selected_test: newSelectTest
        }));
    }

    handleSubCheckBox = (e) => {
        const newSelection = e.target.value;
        let newSelectionArray;
        let newSelectTest;

        if (this.state.categories.indexOf(newSelection) > -1) {
            newSelectionArray = this.state.categories.filter( s => s !== newSelection );
            newSelectTest = this.state.selected_test.filter(test =>  test.name !== newSelection )
        } 
        else {
            newSelectionArray = [...this.state.categories, newSelection];
            newSelectTest = [...this.state.selected_test, this.state.selected_test.map(test => 
                test.children_categories !== null && test.children_categories.filter((match) =>  match.name === newSelection)[0])[0]]
        }
        
        this.setState(prevState => ({
            ...prevState.categories,
            categories: newSelectionArray,
            selected_test: newSelectTest
        }));
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
        const { time_slots, tests } = this.props;
        const { step, open, appointment_date, categories, time_slot, selected_test } = this.state;
        console.log(selected_test);
        switch(step) {
            case 1:
                return (
                    <div class="col-sm-12">
                        <div class="forms-field fade-apply appointment-form-margin">
                            <label> Select Category</label>
                            <div class="select-category">
                            {
                                this.props.tests.length > 0 ?
                                    <NestedCheckBox handleSubCheckBox={this.handleSubCheckBox} handleCheckBox={this.handleCheckBox} tests={this.props.tests} categories={categories} selected_test={selected_test}/>
                                : ''
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
                                <SelecCategory selected_options={this.state.selected_options}  tests={selectorObj(selected_test)} handleTestOption={this.handleTestOption}/>
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
                                Please Select Panel
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
                                                <option disabled selected defaultValue="defualt">
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
                        <button className="btn btn-primary pull-right set-margin-top" disabled={open === true ? true : false} 
                         onClick={this.handleSubmit}>Book an appointment</button>
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


    const selectorObj = (obj) => {
    
        return obj.map(item =>
          item
            ? {
                label: item.name,
                value: item.id,
                options: item.panel.map(sub_item => {
                  return sub_item
                  ? {
                    label: sub_item.panel_name,
                    value: sub_item.id,
                    price: sub_item.price,
                    parent_label: item.name,
                    parent_id: item.id,
                    panel_test: sub_item.tests
                  }
                  : sub_item
                })
              }
            : item
        );
      
  }