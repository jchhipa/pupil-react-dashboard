import React, { Component } from 'react';
import ProgressBar from '../ProgressBar';

class ViewsAvgAnalytics extends Component {

    render() {

        return (
            <div>
                <div className="title mb-4">
                    <h5 className="title-left">Avg Viewing Session</h5>
                    <span className="title-right">Jan 2017 - Aug 2017</span>
                </div>

                <ProgressBar value={73} barColor={'#F6516A'} backgroundBarColor={'#fee5e9'} title={ '75 Spinka Parkwavs'} subtitle={'32:32'} strokeWidth={1.5} trailWidth={1.5} />
                <ProgressBar value={64} barColor={'#F6516A'} backgroundBarColor={'#fee5e9'} title={ '75 Spinka Parkwavs'} subtitle={'12:43'} strokeWidth={1.5} trailWidth={1.5} />
                <ProgressBar value={52} barColor={'#F6516A'} backgroundBarColor={'#fee5e9'} title={ '75 Spinka Parkwavs'} subtitle={'09:43'} strokeWidth={1.5} trailWidth={1.5} />               
                <ProgressBar value={43} barColor={'#F6516A'} backgroundBarColor={'#fee5e9'} title={ '75 Spinka Parkwavs'} subtitle={'33:54'} strokeWidth={1.5} trailWidth={1.5} />               
                <ProgressBar value={25} barColor={'#F6516A'} backgroundBarColor={'#fee5e9'} title={ '75 Spinka Parkwavs'} subtitle={'26:43'} strokeWidth={1.5} trailWidth={1.5} />                
                <ProgressBar value={29} barColor={'#F6516A'} backgroundBarColor={'#fee5e9'} title={ '75 Spinka Parkwavs'} subtitle={'22:45'} strokeWidth={1.5} trailWidth={1.5} />                 
                <ProgressBar value={70} barColor={'#F6516A'} backgroundBarColor={'#fee5e9'} title={ '75 Spinka Parkwavs'} subtitle={'32:54'} strokeWidth={1.5} trailWidth={1.5} /> 
            </div>                       
        );
    }
}

export default ViewsAvgAnalytics;