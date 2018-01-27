import React, {Component} from 'react'
import FadeAndSlide from './Animations/FadeAndSlide';
import { Scrollbars } from 'react-custom-scrollbars';

class SliderPopup extends Component {

  render() {

    return (
      <div>

        <div className="side-popup-wrap">
          <FadeAndSlide startX={'500px'} exitX={'500px'} startY={'0px'} exitY={'0px'} startOpacity={1} endOpacity={1} delay={0} duration={600}>
            <div className="side-popup">
              <Scrollbars 
               autoHeight={true} 
               autoHeightMin={'90vh'} 
               autoHide={true}
                autoHideTimeout={500}
                autoHideDuration={300}
               {...this.props}
              >
                {this.props.children}
              </Scrollbars>
            </div>
          </FadeAndSlide>
        </div>

      </div>
    )

  }
}

export default SliderPopup;
