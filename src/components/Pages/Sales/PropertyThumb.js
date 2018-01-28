import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PropertyThumb extends Component {


  render() {

    return (
      <div className="property-thumbnail">
       
        <div className="property-thumbnail--inner">
          <div className="property-thumbnail-img" style={{backgroundImage: `url(${this.props.imgSrc})`}}>
          </div>
          <div className="property-thumbnail-desc pl-3 pr-3">
            <h5>{this.props.price}</h5>
            <div className="details">
              <div>
                {this.props.title}
              </div>
              <div>
                {this.props.address}
              </div>
              <div className="flex valign-center space-between">
                <div className="area flex">
                  <span className="icon-property-area"></span>
                  <div>{this.props.area}</div>
                </div>
                <div className="beds flex">
                  <span className="icon-bed"></span>
                  <div>{this.props.beds}</div>
                </div>
                <div className="bath-tubs flex">
                  <span className="icon-bath-tub"></span>
                  <div>{this.props.bathTubs}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        

      </div>
    );
  }
}


export default PropertyThumb;
