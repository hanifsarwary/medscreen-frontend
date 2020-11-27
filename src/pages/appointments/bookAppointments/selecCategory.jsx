import React, { Component } from 'react'
import Select from "react-select";
import SelectPanel from './selectPanel';
import { countBillValue } from 'helpers';

const customStyles = {
    control: base => ({
      ...base,
      height: 48,
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
      backgroundColor: 'white',
    }),
    multiValueRemove: (provided) => ({
      display: 'none'
    })
  };

export default class SelecCategory extends Component {

    state = {
      selected_options: []
    }

    handleTestOption = (options) => {
        if (options === null) {
          this.setState({
            selected_options: [],
          })
          this.props.handleTestOptionValue(null, 0)
        } else {
          this.setState({
            selected_options: options
          })
          this.props.handleTestOptionValue(options)
        }
    };

    removeItem = (id) => {
      this.setState({
        selected_options: this.state.selected_options.filter(item=>item.value !=id )
      })
      this.props.handleRemoveItem(id);
    }

    render() {
        return (
            <div class="col-sm-12">
                <div class="form-field forms-field appointment-form-margin">
                    <label> <b> {this.props.tests.panel_name}: </b></label>
                    <Select isClearable={false} value={this.state.selected_options} isMulti onChange={this.handleTestOption} options={this.props.tests.panel_options} styles={customStyles}/>
                    {
                        this.state.selected_options.length > 0 ? 
                            <SelectPanel panelName={this.props.tests.panel_name} handleremoveItem={this.removeItem} selected_options={this.state.selected_options} />
                        : ''
                    }
                </div>
            </div>
        )
    }
}
