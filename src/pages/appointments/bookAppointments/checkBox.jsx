import React, { Component } from 'react';

export default class CheckBox extends Component {
  render() {
    return (
      <div className="checkbox-group">
        {this.props.options.map((option) => {
          return (
            <div>
              <label htmlFor={option.label} key={option}>
                <input
                  className="form-checkbox"
                  id={option.label}
                  name={option.label}
                  onChange={this.props.handleChange}
                  value={option.label}
                  checked={this.props.categories.indexOf(option.label) > -1}
                  type="checkbox"
                />{' '}
                {option.label}
              </label>{' '}
              <br />
            </div>
          );
        })}
      </div>
    );
  }
}
