import React, { Component } from 'react';
import { Line, Circle } from 'rc-progress';
import PropTypes from 'prop-types';

class ProgressBar extends Component {

    render() {

        return (
            <div className="rc-progress-bar">
                <div className="header">
                    <div className="title">{this.props.title}</div>
                    <div className="subtitle">{this.props.subtitle}</div>
                </div>
                <Line percent={this.props.value} strokeWidth={this.props.strokeWidth}  trailWidth={this.props.trailWidth} strokeColor={this.props.barColor} trailColor={this.props.backgroundBarColor} /> 
            </div>
        );
    }
}


ProgressBar.propTypes = {
    value: PropTypes.number.isRequired,
    strokeWidth: PropTypes.number,
    barColor: PropTypes.string.isRequired,
    backgroundBarColor: PropTypes.string.isRequired,
    title: PropTypes.string,
    subtitle: PropTypes.string
}

ProgressBar.defaultProps = {
    strokeWidth: 1,
    trailWidth: 1
};

export default ProgressBar;
