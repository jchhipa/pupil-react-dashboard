import React, { Component } from 'react';
import ApexCharts from '../../../lib/apexcharts';
import PropTypes from 'prop-types';

class SparkLine extends Component {

    componentDidMount() {
        
        new ApexCharts(
            this.sparkRef,
            {
                chart: {
                    type: 'line',
                    width: 60,
                    height: 60,
                    sparkLine: {
                        enabled: true
                    }
                },
                chartOptions: {
                    stroke: {
                        curve: 'smooth'
                    }
                },
                series: [{
                    name: this.props.title,
                    data: this.props.series
                }],
                plot: {
                    markers: {
                        size: 0
                    }
                },
                colors: [this.props.color],
            }
        ).render();

    }



    render() {

        return (
            <div className="apex-sparkline">
                <div ref={(el) => this.sparkRef = el}></div> 
            </div>                      
        );
    }
}

SparkLine.propTypes = {
    series: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}

export default SparkLine;
