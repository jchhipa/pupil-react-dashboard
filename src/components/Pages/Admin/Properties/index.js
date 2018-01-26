import React, { Component } from 'react';
import Header from './../../../Header';
import AdminNav from './../AdminNav';
import Pagination from './../Pagination';
import PropertyFilter from './../PropertyFilter';
import Listings from './Listings';
import FadeAndSlide from '../../../Animations/FadeAndSlide';

import './Properties.css';

class Properties extends Component {

    constructor(props) {
        super(props);
      
    }

    render() {

        return (
            <div id="page-properties">
                    <AdminNav />
                    <div className="container">
                        <div className="flex space-between">
                            <FadeAndSlide
                            startX={'-50px'}
                            startY={'0px'}
                            delay={100}
                            duration={100}
                            >
                                <h1 className="page-title">Properties</h1>
                            </FadeAndSlide>

                            <div className="create-order">
                                <FadeAndSlide
                                    startX={'50px'}
                                    startY={'0px'}
                                    delay={150}
                                    duration={100}
                                >
                                    <button type="submit" className="btn btn--glossy">CREATE ORDER</button>
                                </FadeAndSlide>
                            </div>
                        </div>
                    </div>

                    <PropertyFilter  />
                    <Listings />
                    <Pagination />
            </div>
        );
    }
}

export default Properties;
