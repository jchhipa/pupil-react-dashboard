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
import FadeAndSlide from '../../../Animations/FadeAndSlide';

class Reports extends Component {

    render() {

        return (
            <div id="page-reports">

                <AdminNav showWeather={true} />

                <div className="container">
                    <FadeAndSlide
                        startX={'-50px'}
                        startY={'0px'}
                        delay={100}
                        duration={100}
                    >
                        <h1 className="page-title">Welcome Back, Faux Properties</h1>
                    </FadeAndSlide>

                </div>

                <RangeSelector />

                <QuickStats />

                <div className="container">
                    <div className="box box--full pb-4">
                        <div className="row">
                            <div className="col-md">
                                <div className="title mb-4">
                                    <h5 className="title-left">Views Over Time</h5>
                                    <span className="title-right">Jan 2017 - Aug 2017</span>
                                </div>
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
                            <div className="col-md">
                                <TimeAnalytics />
                            </div>
                        </div>
                    </div>

                    <div className="row mt-2">
                        <div className="col-sm">
                            <div className="box box--full">
                                <VisitsAnalytics />
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="box box--full">
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
