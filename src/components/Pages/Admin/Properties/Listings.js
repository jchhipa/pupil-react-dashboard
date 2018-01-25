import React, { Component } from 'react';
import ListItem from './ListItem';

class Listings extends Component {

    render() {

        return (
            <div className="property-listings container">
                <ListItem
                  title="239 Eastdown Park Road"
                  subtitle="SW2 2DH"
                  imgSrc={'/assets/images/property18.jpg'}
                  status="Offline"
                />
                <ListItem
                  title="107 Claverdale Road"
                  subtitle="SW2 2DH"
                  imgSrc={'/assets/images/property18.jpg'}
                  status="Live"
                />
                <ListItem
                  title="239 Eastdown Park Road"
                  subtitle="SW2 2DH"
                  imgSrc={'/assets/images/property18.jpg'}
                  status="Live"
                />
                <ListItem
                  title="107 Claverdale Road"
                  subtitle="SW2 2DH"
                  imgSrc={'/assets/images/property18.jpg'}
                  status="Live"
                />
                
            </div>                       
        );
    }
}

export default Listings;
