import React, { Component } from 'react';
import TopPerformer from './TopPerformer';

class TopPerformers extends Component {
    render() {
        return (
            <div className="top-performers mt-5">
                <div className="title pt-2">
                    <h5 className="title-left">Top Performers</h5>
                    <span className="title-right">Jan 2017 - Aug 2017</span>
                </div>
    
                <div className="row">
                    <div className="col-sm">
                        <div className="box">
                            <TopPerformer 
                                title="41 Estefania Lake"
                                imgSrc={'/assets/images/property18.jpg'}
                                views={16}
                                time="32:32m"
                                avgTime="2:32m"
                                result={-19}
                                analyticsData={[31,43,23,45,12,33,25,41,3,15]}
                            />
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="box">
                            <TopPerformer 
                                title="41 Estefania Lake"
                                imgSrc={'/assets/images/property1.png'}
                                views={16}
                                time="32:32m"
                                avgTime="2:32m"
                                result={32}
                                analyticsData={[31,43,23,45,12,33,25,41,3,15]}
                            />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm">
                        <div className="box">
                            <TopPerformer 
                                title="22 Mega Street, N1"
                                imgSrc={'/assets/images/property7.jpg'}
                                views={16}
                                time="32:32m"
                                avgTime="2:32m"
                                result={32}
                                analyticsData={[31,43,23,45,12,33,25,41,3,15]}
                            />
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="box">
                            <TopPerformer 
                                title="22 Mega Street, N1"
                                imgSrc={'/assets/images/property4.png'}
                                views={16}
                                time="32:32m"
                                avgTime="2:32m"
                                result={32}
                                analyticsData={[31,43,23,45,12,33,25,41,3,15]}
                            />
                        </div>
                    </div>
                </div>
                 <div className="row">
                    <div className="col-sm">
                        <div className="box">
                            <TopPerformer 
                                title="75 Spinka Parkways"
                                imgSrc={'/assets/images/property17.png'}
                                views={15}
                                time="12:32m"
                                avgTime="2:32m"
                                result={-19}
                                analyticsData={[31,43,23,45,12,33,25,41,3,15]}
                            />
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="box">
                            <TopPerformer 
                                title="75 Spinka Parkways"
                                imgSrc={'/assets/images/property3.jpg'}
                                views={16}
                                time="32:32m"
                                avgTime="2:32m"
                                result={32}
                                analyticsData={[31,43,23,45,12,33,25,41,3,15]}
                            />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default TopPerformers;
