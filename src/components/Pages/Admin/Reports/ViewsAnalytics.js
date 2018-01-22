import React, { Component } from 'react';
import ApexCharts from '../../../../lib/apexcharts';

class ViewsAnalytics extends Component {

    componentDidMount() {

        var options = {
            chart: {
                height: 310,
                type: 'area',
            },
            chartOptions: {
                stroke: {
                    width: 3,
                    curve: 'smooth'
                },
                line: {
                    dataLabels: {
                        enabled: false
                    }
                }
            },
            series: [{
                name: 'Session',
				data: [2,9,18,9, 36,19,22,9,12,2,8,2,4,0,19,5,13,9,17,2,7,5]
			}],
            colors: ['#6EDBD5'],
            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                tooltip: {
                    enabled: false
                },
                labels: {
                    style: {
                        color: '#8e8da4',
                    },
                }
            },
            yaxis: {
                tickAmount: 4,
                floating: true,
                labels: {
                    style: {
                        color: '#8e8da4',
                    },
                    offsetY: -15,
                    offsetX: 10,
                    formatter: function(val) {
                        return val + "min";
                    }
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false
                }
            },
            fill: {
                gradient: {
                    enabled: true,
                    shadePercent: 1,
                    inverseColors: false,
                    opacityFrom: 0.15,
                    opacityTo: 0.85,
                    stop1: 0,
                    stop2: 100,
                    stop3: 100,
                    stop4: 100
                  },
            },
            legend: {
                show: false
            },
            grid: {
                yaxis: {
                    lines: {
                        offsetX: -40
                    }
                },
                padding: {
                    left: 40
                }
            },
            tooltip: {
                followPointer: false,
                x: {
                    show: false
                },
                
            }
        }

        var chart = new ApexCharts(
            this.refs.areaChart,
            options
        );

        chart.render();
    }
    

    render() {

        return (
            <div id="viewsAnalytics" ref="areaChart"></div>                       
        );
    }
}

export default ViewsAnalytics;
