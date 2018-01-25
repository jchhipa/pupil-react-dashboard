import React, { Component } from 'react';
import Header from './../../../Header';
import AdminNav from './../AdminNav';
import Pagination from './../Pagination';
import PropertyFilter from './PropertyFilter';
import Listings from './Listings';
import './Properties.css';

class Properties extends Component {

    render() {

        return (
            <div id="page-properties">
                    <AdminNav />
                    <div className="container">
                    </div>

                    <PropertyFilter />
                    <Listings />
                    <Pagination />
            </div>
        );
    }
}

export default Properties;
