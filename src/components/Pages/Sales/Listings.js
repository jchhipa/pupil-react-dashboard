import React, { Component } from 'react';
import PropertyThumb from './PropertyThumb';
import PropTypes from 'prop-types';
import FadeAndSlide from './../../Animations/FadeAndSlide';

class Listings extends Component {


  render() {

    return (
      <div className="property-lists pl-3 pr-3">
       
        <div className="row">
            {
              this.props.properties.map((property, index) => {
                return (
                  <div className=" col-md-6 col-sm-12" key={index}>
                    <FadeAndSlide
                      startX={'0px'}
                      startY={'-30px'}
                      delay={index*110}
                    >
                      <PropertyThumb 
                        imgSrc={property.imgSrc} 
                        bathTubs={property.bathTubs} 
                        beds={property.beds} 
                        area={property.area}
                        title={property.title} 
                        address={property.address} 
                        price={property.price}
                      />   
                    </FadeAndSlide >  
                  </div>      
                )
              })
            }
        </div>
      </div>
    );
  }
}



export default Listings;
