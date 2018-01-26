import React, { Component } from 'react';
import Animate from 'react-move/Animate';
import PropTypes from 'prop-types';

class Slide extends Component {

    render() {

        const timing = {
            duration: this.props.duration,
            delay: this.props.delay
        }

      return (
        <Animate
          show={true}
          start={{
              translateX: this.props.startX,
              timing
          }}
          enter={{
              translateX: ['0px'],
              timing
          }}
          
          leave={{
              translateX: [this.props.exitX],
              timing
          }}
        >
          {(state) => {
              const { translateX } = state;
              
              return (
                  <div
                    style={{
                      position: 'relative',
                      left: translateX
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

Slide.propTypes = {
    duration: PropTypes.number,
    startX: PropTypes.string,
    exitX: PropTypes.string,
    delay: PropTypes.number
}

Slide.defaultProps = {
    duration: 300,
    startX: '0px',
    exitX: '0px',
    delay: 50
};

export default Slide;
