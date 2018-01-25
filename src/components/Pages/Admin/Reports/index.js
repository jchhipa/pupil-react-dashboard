import React, { Component } from 'react';
import Header from './../../../Header';
import AdminNav from './../AdminNav';
import './Reports.css';

import QuickStats from "./QuickStats";
import Map from "./Map";
import ViewsAnalytics from './ViewsAnalytics';
import TimeAnalytics from './TimeAnalytics';
import VisitsAnalytics from './VisitsAnalytics';
import ViewsAvgAnalytics from './ViewsAvgAnalytics';
import TopPerformers from './TopPerformers';
import RangeSelector from './RangeSelector';

class Reports extends Component {

    render() {

        return (
            <div id="page-reports">
              
                <AdminNav showWeather={true} />

                <div className="container">
                    <h1 className="page-title">Welcome Back, Faux Properties</h1>
                </div>

                <RangeSelector />
                <QuickStats />

                <div className="container">
                    <div className="box box--full">
                        <div className="row">
                            <div className="col-md">
                                <ViewsAnalytics />
                            </div>
                            <div className="col-md">
                                <Map />
                            </div>
                        </div>
                    </div>

                    <TopPerformers />
                    
                    <div className="box box--full">
                        <div className="row">
                            <div className="col-sm">
                                <TimeAnalytics />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm">
                            <div className="box">
                                <VisitsAnalytics />
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="box">
                                <ViewsAvgAnalytics />
                            </div>
                        </div>
                    </div>

                    <div className="mb-5"></div>
                </div>
                
            </div>
        );
    }
}

export default Reports;
