import React, { Component } from 'react';
import ProgressBar from '../ProgressBar';

class TimeAnalytics extends Component {

    render() {

        return (
            <div>
                <div className="title mb-4">
                    <h5 className="title-left">Time in Property</h5>
                    <span className="title-right">Jan 2017 - Aug 2017</span>
                </div>

                <ProgressBar value={73} barColor={'#6ed8d5'} backgroundBarColor={'#edfaf9'} title={ '75 Spinka Parkwavs'} subtitle={'32:32'} />
                <ProgressBar value={64} barColor={'#6ed8d5'} backgroundBarColor={'#edfaf9'} title={ '75 Spinka Parkwavs'} subtitle={'12:43'} />
                <ProgressBar value={52} barColor={'#6ed8d5'} backgroundBarColor={'#edfaf9'} title={ '75 Spinka Parkwavs'} subtitle={'09:43'} />               
                <ProgressBar value={43} barColor={'#6ed8d5'} backgroundBarColor={'#edfaf9'} title={ '75 Spinka Parkwavs'} subtitle={'33:54'} />               
                <ProgressBar value={25} barColor={'#6ed8d5'} backgroundBarColor={'#edfaf9'} title={ '75 Spinka Parkwavs'} subtitle={'26:43'} />                
                <ProgressBar value={29} barColor={'#6ed8d5'} backgroundBarColor={'#edfaf9'} title={ '75 Spinka Parkwavs'} subtitle={'22:45'} />                 
                <ProgressBar value={70} barColor={'#6ed8d5'} backgroundBarColor={'#edfaf9'} title={ '75 Spinka Parkwavs'} subtitle={'32:54'} /> 
            </div>                       
        );
    }
}

export default TimeAnalytics;
