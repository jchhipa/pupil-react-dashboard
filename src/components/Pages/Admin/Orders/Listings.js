import React, {Component} from 'react';
import ListItem from './ListItem';
import FadeAndSlide from '../../../Animations/FadeAndSlide';

class Listings extends Component {

  listingClick() {
    this.props.listingClick()
  }

  render() {

    return (
      <div>

        <div className="property-listings orders-listings container">
          <FadeAndSlide startX={'0px'} startY={'-30px'} delay={100}>
            <ListItem
              location="239 Eastdown Park Road"
              date="25th Nov 2017"
              code="SW2 2DH"
              status="Complete" listingClick={this.props.listingClick} />
          </FadeAndSlide>

          <FadeAndSlide startX={'0px'} startY={'-30px'} delay={200}>
            <ListItem
              location="239 Eastdown Park Road"
              date="25th Nov 2017"
              code="SW2 2DH"
              status="Complete" listingClick={this.props.listingClick} />
          </FadeAndSlide>

          <FadeAndSlide startX={'0px'} startY={'-30px'} delay={300}>
            <ListItem
              location="239 Eastdown Park Road"
              date="25th Nov 2017"
              code="SW2 2DH"
              status="Unscheduled" listingClick={this.props.listingClick} />
          </FadeAndSlide>

          <FadeAndSlide startX={'0px'} startY={'-30px'} delay={400}>
            <ListItem
              location="239 Eastdown Park Road"
              date="25th Nov 2017"
              code="SW3 4DH"
              status="Scheduled" listingClick={this.props.listingClick} />
          </FadeAndSlide>

          <FadeAndSlide startX={'0px'} startY={'-30px'} delay={500}>
            <ListItem
              location="239 Eastdown Park Road"
              date="25th Nov 2017"
              code="SW2 2DH"
              status="Scheduled" listingClick={this.props.listingClick} />
          </FadeAndSlide>
        </div>
      </div>
    );
  }
}

export default Listings;
