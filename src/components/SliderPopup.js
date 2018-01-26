import React, { Component } from 'react'
import Slide from './Animations/Slide';

class SliderPopup extends Component {

  render() {

    return (
      <div>
        <Slide
          startX={'1010px'}
          exitX={'1010px'}
          delay={100}
        >
          <div className="side-popup-wrap">
            <div className="side-popup">
              {this.props.children} &nbsp;
            </div>
          </div>
        </Slide>
      </div>
    )

  }
}

export default SliderPopup;
