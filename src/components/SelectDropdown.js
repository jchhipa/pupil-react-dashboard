import React, { Component } from 'react'
import PropTypes from 'prop-types';
const Selectivity = require('selectivity/react.js');
require('selectivity/styles/selectivity-react.css');

class SelectDropdown extends Component {
  render() {

    return (
      <div>
        <Selectivity.React
            allowClear={this.props.allowClear}
            items={this.props.options}
            placeholder={this.props.placeholder}
        />
      </div>
    )
  }
}


SelectDropdown.defaultProps = {
  allowClear: false
};

export default SelectDropdown;