import React, { Component } from 'react';
import Select from 'react-select';
import SelectPanel from './selectPanel';
import { countBillValue } from 'helpers';

const customStyles = {
  control: (base) => ({
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
    display: 'none',
  }),
};

export default class SelecCategory extends Component {
  state = {
    selected_options: [],
  };

  handleTestOption = (options) => {
    if (options === null) {
      this.setState({
        selected_options: [],
      });
      this.props.handleTestOptionValue(null, 0);
    } else {
      this.setState({
        selected_options: options,
      });
      this.props.handleTestOptionValue(options);
    }
  };

  removeItem = (id) => {
    this.setState({
      selected_options: this.state.selected_options.filter((item) => item.value != id),
    });
    this.props.handleRemoveItem(id);
  };

  render() {
    return (
      <div class="col-sm-12">
        <div class="form-field forms-field appointment-form-margin">
          <label>
            {' '}
            <b> {this.props.tests.panel_name}</b>
            {this.props.tests.price_type === 'RANGE' ? (
              <span class="info-icon">
                <span class="ico-info">
                  <svg
                    width="30px"
                    height="18px"
                    viewBox="0 0 16 16"
                    class="bi bi-info-circle tm4"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                    />
                    <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z" />
                    <circle cx="8" cy="4.5" r="1" />
                  </svg>
                </span>
                <div class="popup-card">Price detail...</div>
              </span>
            ) : (
              ''
            )}
          </label>
          <Select
            isClearable={false}
            value={this.state.selected_options}
            isMulti
            onChange={this.handleTestOption}
            options={this.props.tests.panel_options}
            styles={customStyles}
          />
          {this.state.selected_options.length > 0 ? (
            <SelectPanel
              panelName={this.props.tests.panel_name}
              handleremoveItem={this.removeItem}
              selected_options={this.state.selected_options}
            />
          ) : (
            ''
          )}
        </div>
      </div>
    );
  }
}
