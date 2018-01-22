import React, { Component } from 'react';
import ApexCharts from '../../../lib/apexcharts';
import PropTypes from 'prop-types';

class ProgressBar extends Component {

    componentDidMount() {
        
        new ApexCharts(
            this.progressRef, {
                chart: {
                    type: 'bar',
                    width: '100%',
                    height: 62,
                    sparkLine: {
                        enabled: true
                    }
                },  
                series: [{
                    data: [this.props.value]
                }],  
                colors: [this.props.barColor],
                chartOptions: {
                    bar: {
                        barHeight: '50%',
                        endingShape: 'rounded',
                        dataLabels: {
                            enabled: false
                        },
                        colors: {
                            backgroundBarColors: [this.props.backgroundBarColor]
                        },
                        horizontal: true
                    },
                },
                labels: ['A'],
                
                title: {
                    text: this.props.title,
                    floating: true,
                    offsetY: 8,
                    style: {
                        fontSize: '12px',
                        color: '#3A3A60'
                    }
                },
                subtitle: {
                    text: this.props.subtitle,
                    floating: true,
                    align: 'right',
                    offsetY: -8,
                    style: {
                        fontSize: '11px',
                        color: '#8E8DA4'
                    }
                },
                grid: {
                    show: false
                },
                legend: {
                    show: false
                },
                tooltip: {
                    enabled: false
                },
                yaxis: {
                    highestValue: 100
                }
            }
        ).render();

    }

    render() {

        return (
            <div className="apex-progress">
                <div ref={(el) => this.progressRef = el}></div> 
            </div>                      
        );
    }
}


ProgressBar.propTypes = {
    value: PropTypes.number.isRequired,
    barColor: PropTypes.string.isRequired,
    backgroundBarColor: PropTypes.string.isRequired,
    title: PropTypes.string,
    subtitle: PropTypes.string
}

export default ProgressBar;
