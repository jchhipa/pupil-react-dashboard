import React, { Component } from 'react';
import SelectDropdown from '../../../SelectDropdown.js'
import PropTypes from 'prop-types';

class RangeSelector extends Component {

  constructor(props) {

      super(props);

      this.state = {
        current: 'all',
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
        <div className="filter-nav space-between">
          <div className="nav">
            <div className="item">
              <a className={currentRange == 'all' ? 'active' : ''} onClick={this.changeSelector.bind(this, 'all')}>ALL PROPERTIES</a>
            </div>
            <div className="item">
              <a className={currentRange == 'sales' ? 'active' : ''} onClick={this.changeSelector.bind(this, 'sales')}>SALES</a>
            </div>
            <div className="item">
              <a className={currentRange == 'lettings' ? 'active' : ''} onClick={this.changeSelector.bind(this, 'lettings')}>LETTINGS</a>
            </div>
          </div>
          <div className="search flex">
            <div className="item">
              <span className="fa fa-search"></span><input type="text" placeholder="SEARCH" />
            </div>
            <div className="item">
              <SelectDropdown placeholder="Arrange By" options={['Price', 'Reviews']} />
            </div>
          </div>
        </div>

      </div>
    );
  }
}


export default RangeSelector;
