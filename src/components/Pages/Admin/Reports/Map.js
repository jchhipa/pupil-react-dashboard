import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature, Marker, Popup } from "react-mapbox-gl";

class Map extends Component {

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
                        height: "300px",
                        width: "100%"
                    }}>
                    <Layer
                    type="symbol"
                    id="marker"
                    layout={{ "icon-image": "marker-15" }}>
                        <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
                    </Layer>

                    <Marker
                        coordinates={[-0.2416815, 51.5285582]}
                        anchor="bottom">
                        <div className="map-marker map-marker--primary">
                            <span className="text">50%</span>
                            <div className='pin'></div>
                        </div>
                    </Marker>
                    
                    <Marker
                        coordinates={[-0.2216815, 51.5155582]}
                        anchor="bottom">
                        <div className="map-marker map-marker--primary">
                            <span className="text">33%</span>
                            <div className='pin'></div>
                        </div>
                    </Marker>

                    <Marker
                        coordinates={[-0.2316815, 51.5185582]}
                        anchor="bottom">
                        <div className="map-marker map-marker--primary">
                            <span className="text">75%</span>
                            <div className='pin'></div>
                        </div>
                    </Marker>

                    <Marker
                        coordinates={[-0.1916815, 51.5385582]}
                        anchor="bottom">
                        <div className="map-marker map-marker--primary">
                            <span className="text">25%</span>
                            <div className='pin'></div>
                        </div>
                    </Marker>

                    <Marker
                        coordinates={[-0.2916815, 51.5485582]}
                        anchor="bottom">
                        <div className="map-marker map-marker--primary">
                            <span className="text">19%</span>
                            <div className='pin'></div>
                        </div>
                    </Marker>
                    
                </Map>
            </div>
        )
    }
}

export default Map;

