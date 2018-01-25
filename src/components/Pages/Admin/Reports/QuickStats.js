import React, { Component } from 'react';
import ProgressBar from '../ProgressBar';

class TimeAnalytics extends Component {

    render() {

        return (
            <div className="container quick-stats mt-4 mb-5">
                <div className="row">
                  <div className="col-sm-6 col-md-3">
                    <div className="box">
                      <div className="icon">
                        <span className="icon-property-search"></span>
                      </div>
                      <div className="statistics">
                        <h3>144</h3>
                        <p>Listed Properties</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <div className="box">
                      <div className="icon">
                        <span className="icon-eye"></span>
                      </div>
                      <div className="statistics">
                        <h3>35</h3>
                        <p>Viewings</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <div className="box">
                      <div className="icon">
                        <span className="icon-pie"></span>
                      </div>
                      <div className="statistics">
                        <h3>132</h3>
                        <p>Total Time Viewing</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3">
                    <div className="box">
                      <div className="icon">
                        <span className="icon-timer"></span>
                      </div>
                      <div className="statistics">
                        <h3>32:33</h3>
                        <p>Average Viewing</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>                       
        );
    }
}

export default TimeAnalytics;
