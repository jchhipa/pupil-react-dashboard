import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectDropdown from '../../../SelectDropdown.js'

class RangeSelector extends Component {

  constructor(props) {

      super(props);

      this.state = {
        current: 'custom',
      };
    }

   
  changeSelector(range) {
    this.setState({
      current: range
    })
  }


  render() {

   const currentRange = this.state.current;

    return (
      <div className="container">
        <div className="filter-nav  range-selector">
          <div className="item range week">
            <a className={currentRange == 'week' ? 'active' : ''} onClick={this.changeSelector.bind(this, 'week')}>7 DAYS</a>
          </div>
          <div className="item range month">
            <a className={currentRange == 'month' ? 'active' : ''} onClick={this.changeSelector.bind(this, 'month')}>THIS MONTH</a>
          </div>
          <div className="item range alltime">
            <a className={currentRange == 'all' ? 'active' : ''} onClick={this.changeSelector.bind(this, 'all')}>ALL TIME</a>
          </div>
          <div className={currentRange == 'custom' ? "active item wide" : "item wide"}  onClick={this.changeSelector.bind(this, 'custom')}>
              <SelectDropdown placeholder="Date Range - Jan 2017 - Aug 2017" options={['Date Range - Jan 2017 - Aug 2017', 'Date Range - Aug 2017 - Dec 2017']} />
            </div>
        </div>

      </div>
    );
  }
}


export default RangeSelector;
