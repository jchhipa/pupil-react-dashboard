import React, { Component } from 'react';
import ProgressBar from '../ProgressBar';
import FadeAndSlide from '../../../Animations/FadeAndSlide';

class TimeAnalytics extends Component {

    render() {

        return (
            <div>
            
            <div className="container quick-stats mt-4 mb-5">
                <div className="row">
                  
                    <div className="col-sm-6 col-md-3">
                    <FadeAndSlide
                      startX={'0px'}
                      startY={'-30px'}
                      delay={100}
                    >
                      <div className="box">
                        <div className="icon">
                          <span className="icon-property-search"></span>
                        </div>
                        <div className="statistics">
                          <h3>144</h3>
                          <p>Listed Properties</p>
                        </div>
                      </div>
                      </FadeAndSlide>
                    </div>
                 
                
                    <div className="col-sm-6 col-md-3">
                    <FadeAndSlide
                      startX={'0px'}
                      startY={'-30px'}
                      delay={200}
                    >
                      <div className="box">
                        <div className="icon">
                          <span className="icon-eye"></span>
                        </div>
                        <div className="statistics">
                          <h3>35</h3>
                          <p>Viewings</p>
                        </div>
                      </div>
                      </FadeAndSlide>
                    </div>
                 
                 
                    <div className="col-sm-6 col-md-3">
                    <FadeAndSlide
                      startX={'0px'}
                      startY={'-30px'}
                      delay={300}
                    >
                      <div className="box">
                        <div className="icon">
                          <span className="icon-pie"></span>
                        </div>
                        <div className="statistics">
                          <h3>132</h3>
                          <p>Total Time Viewing</p>
                        </div>
                      </div>
                      </FadeAndSlide>
                    </div>
                
                    <div className="col-sm-6 col-md-3">
                        
                    <FadeAndSlide
                       startX={'0px'}
                      startY={'-30px'}
                      delay={400}
                    >
                      <div className="box">
                        <div className="icon">
                          <span className="icon-timer"></span>
                        </div>
                        <div className="statistics">
                          <h3>32:33</h3>
                          <p>Average Viewing</p>
                        </div>
                      </div>
                      </FadeAndSlide>
                    </div>
                  
                </div>
            </div>       
            
            </div>                
        );
    }
}

export default TimeAnalytics;
