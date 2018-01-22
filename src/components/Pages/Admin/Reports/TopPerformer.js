import React, { Component } from 'react';
import SparkLine from '../SparkLine';
import PropTypes from 'prop-types';

class TopPerformer extends Component {

    render() {
        const sign = this.props.result > 0 ? 'success' : 'danger';

        return (
            <div className="top-performer">
                <div className="photo">
                    <div className="thumbnail-image" style={{backgroundImage: `url(${this.props.imgSrc})`}} />
                </div>
                <div className="desc">
                    <div className="header">
                        <div className="property-title">{this.props.title}</div>
                        <div className={`result ${sign}`} title={this.props.result + '%'}> <span className="fa"></span> {Math.abs(this.props.result)+'%'} </div>
                    </div>
                    <div className="statistics">
                        <span className="views">
                            <h5>{this.props.views} </h5> 
                            Views
                        </span>
                        <span className="time">
                            <h5>{this.props.time} </h5> 
                            Time in Property
                        </span>
                        <span className="avg-time">
                            <h5>{this.props.avgTime} </h5> 
                            Avg Time Viewing
                        </span>
                    </div>
                </div>
                <div className="sparkline">
                        <SparkLine 
                            title={this.props.title} 
                            series={this.props.analyticsData} 
                            color={'#6ed8d5'}
                        />
                </div>
            </div>
        )
    }
}


TopPerformer.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    result: PropTypes.number.isRequired,
    analyticsData: PropTypes.array.isRequired,
    views: PropTypes.number,
    time: PropTypes.string,
    avgTime: PropTypes.string
}

export default TopPerformer;
