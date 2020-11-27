import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SelecCategory from './selecCategory';
import {
    getTestsAction,
    getTimeSlotsAction,
    storeAppointmentAction,
    createAppointmentAction,
    getCurrentAppointmentsAction,
    getPastAppointmentsAction,
  } from 'pages/appointments/containers/actions';
import { loaderOpenAction } from 'components/loaders/components';
import NestedCheckBox from './nestedCheckBox';
import { rangeTypeAction } from 'helpers';

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
        open: true,
        totat_bill: 0,
        bill_array: []
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({ 
            step: step - 1,
            totat_bill: 0
         });
    }

    clearObj = () => {
        this.setState({
            selected_options: []
        })
        this.prevStep();
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
            newSelectTest = [...this.state.selected_test, getObjById(this.props.tests, newSelection)]
        }
        
        this.setState(prevState => ({
            ...prevState.categories,
            categories: newSelectionArray,
            selected_test: newSelectTest
        }));
    }

    handleTestOptionValue = (option) => {
        if (option === null) {
          this.setState({
            selected_options: [],
            test: [],
            appointment_date: '',
          })
        } else {
            const selected_option = this.state.selected_options.concat(option);
            this.setState({
                selected_options: [...new Map(selected_option.map(item => [item['value'], item])).values()]
            })
        }
    };

    removeItem = (id) => {
        this.setState({
            selected_options: this.state.selected_options.filter(item=>item.value !==id )
        })
    }

    getTestBill = () => {
        const { step } = this.state;
        const selected_option = this.state.selected_options;
        const withRange = selected_option.filter((obj) => obj.price_type === 'RANGE');
        const withOutRange = selected_option.filter((obj) => obj.price_type === 'CONVENTIONAL');
        this.setState({
            totat_bill: rangeTypeAction(withRange) + withOutRange.reduce( (sum, item) => sum + item.price_handle.price , 0),
            step: step + 1
        })
    }

    handleSubmit = () => {
        const { appointment_date, time_slot, comments, selected_options } = this.state;
        const payload = {
          panels: selected_options.map(item => { return item.value  }),
          appointment_date,
          time_slot: parseInt(time_slot),
          comments,
          total_price: this.state.totat_bill  
        };
        if (localStorage.getItem('access_token')) {
            this.props.loaderOpenAction();
            this.props.createAppointmentAction(payload, this.props.history);
        } else {
            this.props.storeAppointmentAction(payload);
            this.props.history.push('login');
        }
    };


    render() {
        const { time_slots } = this.props;
        const { step, open, appointment_date, categories, selected_test } = this.state;
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
                            <div>
                                {
                                    (seprateCategory(selected_test)).map((item, i) => {
                                        return (
                                            <div className="row" key={i}> {
                                                item.panel_options.length > 0 ?
                                                <SelecCategory handleRemoveItem={this.removeItem} selected_options={this.state.selected_options}  tests={item} handleTestOptionValue={this.handleTestOptionValue}/> : ''
                                            }
                                            </div>
                                        )
                                    })
                                }
                            </div>
                                :
                                <div className="user-message fade-apply set-margin-bottom">
                                    Please Select Category
                                </div>
                            }
                            <button className="btn btn-primary pull-left" onClick={this.clearObj}>Previous</button>
                            <button className="btn btn-primary pull-right" disabled={categories.length > 0 ? false : true} onClick={this.getTestBill}>Next</button>
                        </>
                )
            case 3:
                return (
                    <div>
                            {
                                this.state.selected_options.length > 0 ?
                                    <div className="checklist forms-field fade-apply">
                                        <h4>Selected Test List:</h4>
                                        <table class="table">
                                            <tbody>
                                                { this.state.selected_options.map((item, i) => {
                                                    return (
                                                        <tr key={i}>
                                                            <td class="text-capitalize font-weight-bold fade-apply"> <b class="pl-4">({item.label})</b>
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
                                                            <td ></td>
                                                        </tr>
                                                    )
                                                    })
                                                }
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>Total Bill</th>
                                                    <th class="text-align-end">{this.state.totat_bill}</th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div> 
                                : ''
                            }
                            <button className="btn btn-primary pull-left" onClick={this.clearObj}>Previous</button>
                            <button className="btn btn-primary pull-right mr-0" disabled={categories.length > 0 ? false : true} onClick={this.nextStep}>Next</button>
                    </div>
                )
            case 4:
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
    const { tests, time_slots, current_appointments, past_appointments, store_appointment } = state.APPOINTMENTS;
    return { tests, time_slots, current_appointments, past_appointments, store_appointment };
  };
  
  const mapDispatchToProps = {
    loaderOpenAction,
    getTestsAction,
    getTimeSlotsAction,
    storeAppointmentAction,
    createAppointmentAction,
    getCurrentAppointmentsAction,
    getPastAppointmentsAction,
  };
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookAppointment));


// const selectorObj = (obj) => {
    
//     return obj.map(item =>
//         item
//         ? {
//             label: item.name,
//             value: item.id,
//             options: item.panel.map(sub_item => {
//                 return sub_item
//                 ? {
//                 label: sub_item.panel_name,
//                 value: sub_item.id,
//                 price: sub_item.price,
//                 parent_label: item.name,
//                 parent_id: item.id,
//                 panel_test: sub_item.tests
//                 }
//                 : sub_item
//             })
//             }
//         : item
//     );
      
//   }

  const seprateCategory = (obj) => {
    const categoryObj = obj.map(item =>
        item
        ? {
            panel_name : item.name,
            sorting_order: item.sorting_order,
            price_type: item.price_type,
            panel_options: item.panel && item.panel.map(sub_item => {
                        return sub_item
                        ? {
                        label: sub_item.panel_name,
                        value: sub_item.id,
                        panel_test: sub_item.tests,
                        price_type : item.price_type,
                        price_handle: item.price_type === 'RANGE' ? {
                            interval_count: item.interval_count,
                            interval_price: item.interval_price,
                            start_price: item.start_price
                        } : {
                            price: sub_item.price,
                        },
                        }
                        : sub_item
                    })
                
            }
        : item
    );

    console.log(categoryObj.sort(function (a, b) {
        return parseInt(a.sorting_order) - parseInt(b.sorting_order)
    }));
    return categoryObj.sort(function (a, b) {
        return parseInt(a.sorting_order) - parseInt(b.sorting_order)
    });
      
  }

  const getObjById = (categories, value) => {
      for (const category of categories) {
          if(category.children_categories !== null) {
              for (const sub_category of category.children_categories) {
                  if(sub_category.name === value) {
                      return sub_category;
                  }
              }
          }
      }
  }
