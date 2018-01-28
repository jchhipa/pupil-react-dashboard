import React, {Component} from 'react';
import FadeAndSlide from '../../Animations/FadeAndSlide';
import Filter from './Filter';
import Listings from './Listings';
import Map from "./Map";
import {Scrollbars} from 'react-custom-scrollbars';

import './Sales.css';

class Sales extends Component {

  constructor(props) {
    super(props);

    this.state = {
      properties: [
        {
          coordinates: [-0.2916815, 51.5485582],
          imgSrc: "/assets/images/property4.png",
          bathTubs: 2,
          beds: 2,
          area: "2,000 sq ft",
          title: "Detached House",
          address: "82 Mraz Radial",
          price: "£6,999,000",
          markerText: 'icon-home'
        }, {
          coordinates: [-0.1916815, 51.5385582],
          imgSrc: "/assets/images/property7.jpg",
          bathTubs: 2,
          beds: 2,
          area: "1,000 sq ft",
          title: "Detached House",
          address: "82 Mraz Radial",
          price: "£4,999,000",
          markerText: '3'
        }, {
          coordinates: [-0.2316815, 51.5585582],
          imgSrc: "/assets/images/property17.png",
          bathTubs: 2,
          beds: 3,
          area: "2,200 sq ft",
          title: "Detached House",
          address: "82 Mraz Radial",
          price: "£3,799,000",
          markerText: '7'
        }, {
          coordinates: [-0.2716815, 51.4855582],
          imgSrc: "/assets/images/property14.png",
          bathTubs: 1,
          beds: 2,
          area: "2,000 sq ft",
          title: "Detached House",
          address: "82 Mraz Radial",
          price: "£8,999,000",
          markerText: '1'
        }, {
          coordinates: [-0.2416815, 51.5285582],
          imgSrc: "/assets/images/property13.png",
          bathTubs: 2,
          beds: 2,
          area: "2,000 sq ft",
          title: "Detached House",
          address: "82 Mraz Radial",
          price: "£6,999,000",
          markerText: 'icon-home'
        }, {
          coordinates: [-0.1816815, 51.5115582],
          imgSrc: "/assets/images/property9.png",
          bathTubs: 2,
          beds: 2,
          area: "2,000 sq ft",
          title: "Detached House",
          address: "82 Mraz Radial",
          price: "£4,999,000",
          markerText: '5'
        }
      ]
    }
  }

  render() {

    return (
      <div id="page-sales">
        <div className="property-listings">
          <div className="">
            <FadeAndSlide startX={'-50px'} startY={'0px'} delay={100} duration={100}>
              <h1 className="page-title">Sales</h1>
            </FadeAndSlide>

            <Filter/>

            <Scrollbars
              autoHeight={true}
              autoHeightMin={'55vh'}
              autoHide={true}
              autoHideTimeout={500}
              autoHideDuration={300}
             >

              <Listings properties={this.state.properties}/>
            </Scrollbars>

            
          </div>

        </div>

        <div id="map">
          <Map properties={this.state.properties} />
        </div>
      </div>
    );
  }
}

export default Sales;
