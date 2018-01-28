import React, {Component} from 'react';
import SelectDropdown from '../../SelectDropdown.js'
import PropTypes from 'prop-types';

class SalesFilter extends Component {

  render() {

    return (
      <div className="sales-filter">
        <div className="filter-nav space-between">
          <div className="item">
            <SelectDropdown
              placeholder="Property Type"
              options={['Property A', 'Property B']}/>
          </div>

          <div className="item">
            <SelectDropdown placeholder="Up to" options={['£ 1,000,000', '£ 5,000,000']}/>
          </div>
          <div className="item">
            <SelectDropdown placeholder="Bedroom" options={['2 Bedrooms', '3 Bedrooms']}/>
          </div>
          <div className="item">
            <div>
              <a className="filter-link">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg">
                  <desc>Created with Sketch.</desc>
                  <defs></defs>
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                    strokeLinecap="square">
                    <g
                      id="4-3-1-Property-Listings"
                      transform="translate(-573.000000, -215.000000)"
                      stroke="#8E8DA4"
                      strokeWidth="2">
                      <g id="Group-3" transform="translate(574.000000, 216.000000)">
                        <path d="M2.45454545,7.36363636 L2.45454545,0" id="Shape"></path>
                        <path d="M2.45454545,18 L2.45454545,15.5454545" id="Shape"></path>
                        <path d="M9,0.818181818 L9,0" id="Shape"></path>
                        <path d="M9,18 L9,9" id="Shape"></path>
                        <path d="M15.5454545,7.36363636 L15.5454545,0" id="Shape"></path>
                        <path d="M15.5454545,18 L15.5454545,15.5454545" id="Shape"></path>
                        <circle id="Oval" cx="2.45454545" cy="13.0909091" r="2.45454545"></circle>
                        <circle id="Oval" cx="9" cy="6.54545455" r="2.45454545"></circle>
                        <circle id="Oval" cx="15.5454545" cy="13.0909091" r="2.45454545"></circle>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default SalesFilter;
