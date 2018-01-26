import React, { Component } from 'react';
import Animate from 'react-move/Animate';
import PropTypes from 'prop-types';

class Fade extends Component {

    render() {
      const timing = {
        duration: this.props.duration,
        delay: this.props.delay
      }

      return (
        <Animate
          show={true}
          start={{
              opacity: 0,
              timing
          }}
          enter={{
              opacity: [1],
              timing,
          }}
          leave={{
              opacity: [0],
              timing
          }}
        >
          {(state) => {
              const { opacity } = state;
              
              return (
                  <div
                    style={{
                      opacity,
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

Fade.propTypes = {
  duration: PropTypes.number,
  delay: PropTypes.number
}

Fade.defaultProps = {
  duration: 300,
  delay: 50
};

export default Fade;
