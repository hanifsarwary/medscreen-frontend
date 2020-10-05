import React, { Component } from 'react'
import Select from "react-select";
import SelectPanel from './selectPanel';
const customStyles = {
    control: base => ({
      ...base,
      height: 48,
      borderRadius: '0',
    }),
    valueContainer: (provided) => ({
      ...provided,
      position: 'unset',
      height: 48,
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

export default class SelecCategory extends Component {
    render() {
        return (
            <div class="col-sm-12">
                <div class="form-field forms-field appointment-form-margin">
                    <label> Test: </label>
                    <Select value={this.props.selected_options} isMulti onChange={this.props.handleTestOption} options={this.props.tests} styles={customStyles}/>
                    {
                        this.props.selected_options.length > 0 ? 
                            <SelectPanel selected_options={this.props.selected_options}/>
                        : ''
                    }
                </div>
            </div>
        )
    }
}
