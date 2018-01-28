import React, { Component } from 'react';
import { Marker, Popup } from "react-mapbox-gl";
import Fade from './../../Animations/Fade';
import PropertyThumb from './PropertyThumb';

class MapMarker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      openPopup: false
    }

  }

  closePopup() {
    this.setState({
      openPopup: false
    })
  }


  render() {

    let markerType = 'primary'
    let markerText = this.props.markerText;
    
    if(this.props.markerText.substring(0, 4) === 'icon') {
      markerType = 'secondary';
      markerText = (<span className={markerText}></span>)
    }

    return (
      <div>
        <Marker
            coordinates={this.props.coordinates}
            anchor="bottom"
            onClick={() => {
                this.setState({
                  openPopup: !this.state.openPopup
                })
            }}
            >
            <div className={`map-marker map-marker--${markerType}`}>
                <span className="text">{markerText}</span>
                <div className='pin'></div>
            </div>
        </Marker>
        {
            this.state.openPopup ? 
            <div>
              <Fade>
                <Popup coordinates={this.props.coordinates}>
                    <div className="popup">
                      <PropertyThumb 
                        imgSrc={this.props.imgSrc} 
                        bathTubs={this.props.bathTubs} 
                        beds={this.props.beds} 
                        area={this.props.area}
                        title={this.props.title} 
                        address={this.props.address} 
                        price={this.props.price}
                      />  
                      <button
                          id="close-map-popup" className='btn btn--no-shadow'
                          onClick={this
                          .closePopup
                          .bind(this)}>
                          <i className="fa fa-close"></i>
                      </button>
                    </div>
                </Popup>
              </Fade>
            </div>
             : null
        }
      </div>
    );
  }
}


export default MapMarker;
