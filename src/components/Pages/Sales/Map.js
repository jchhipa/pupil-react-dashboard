import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature, Popup } from "react-mapbox-gl";
import MapMarker from './MapMarker';

class Map extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        const Map = ReactMapboxGl({
            accessToken: "pk.eyJ1IjoicmF3bW9tZW50dW0iLCJhIjoiY2pjbmF4cnA2MWI4OTJ3bzNmOHZhMnJhYSJ9.iGPLmXPqShnvkykxnT2Kuw",
            scrollZoom: false
        });

        return (
            <div>
                <Map
                    style="mapbox://styles/mapbox/light-v9"
                    containerStyle={{
                        height: "calc(100vh - 74px)",
                        width: "100%"
                    }}>
                 
                    {  
                        this.props.properties.map((property, index) => {
                            return (
                                <MapMarker 
                                    key={index}
                                    coordinates={property.coordinates}
                                    imgSrc={property.imgSrc} 
                                    bathTubs={property.bathTubs} 
                                    beds={property.beds} 
                                    area={property.area}
                                    title={property.title} 
                                    address={property.address} 
                                    price={property.price}
                                    markerText={property.markerText}
                                >
                                </MapMarker>
                            )
                        })
                    }
                    
                </Map>
            </div>
        )
    }
}

export default Map;

