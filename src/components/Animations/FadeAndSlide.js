import React, { Component } from 'react';
import Animate from 'react-move/Animate';
import PropTypes from 'prop-types';

class FadeAndSlide extends Component {

    render() {

        const timing = {
            duration: this.props.duration,
            delay: this.props.delay
        }

      return (
        <Animate
          show={true}
          start={{
              opacity: this.props.startOpacity,
              translateX: this.props.startX,
              translateY: this.props.startY,
              timing
          }}
          enter={{
              opacity: [1],
              translateX: ['0px'],
              translateY: ['0px'],
              timing
          }}
          
          leave={{
              opacity: [this.props.exitOpacity],
              translateX: [this.props.exitX],
              translateY: [this.props.exitY],
              timing
          }}
        >
          {(state) => {
              const { opacity, translateX, translateY } = state;
              
              return (
                  <div
                    style={{
                      opacity,
                      transform: `translate(${translateX}, ${translateY})`
                    }}
                  >
                      { this.props.children }
                  </div>
              );
          }}
        </Animate>                  
      );
    }
}

FadeAndSlide.propTypes = {
    duration: PropTypes.number,
    startOpacity: PropTypes.number,
    exitOpacity: PropTypes.number,
    startX: PropTypes.string,
    exitX: PropTypes.string,
    startY: PropTypes.string,
    exitY: PropTypes.string,
    delay: PropTypes.number
}

FadeAndSlide.defaultProps = {
    duration: 300,
    startOpacity: 0,
    exitOpacity: 1,
    startX: '0px',
    exitX: '0px',
    startY: '-30px',
    exitY: '-30px',
    delay: 50
};

export default FadeAndSlide;
