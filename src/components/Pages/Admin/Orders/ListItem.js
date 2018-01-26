import React, {Component} from 'react';
import PropTypes from 'prop-types';

class PropertyListItem extends Component {

  render() {

    let color = 'danger';
    if (this.props.status === 'Complete') {
      color = 'success';
    } else if (this.props.status === 'Scheduled') {
      color = 'warning'
    }

    return (
      <div>

        <div onClick={this.props.listingClick} className="property-list-item box">
          <div className="date flex">
            <span className="icon-calendar"></span>
            <div className="property-date">{this.props.date}</div>
          </div>
          <div className="location flex">
            <span className="icon-pin"></span>
            <div className="property-location">{this.props.location}</div>
          </div>
          <div className="code flex">
            <span className="icon-grid"></span>
            <div className="property-code">{this.props.code}</div>
          </div>
          <div className="status flex">
            <span className="property-status">
              <span className={`tag ${color}`}>{this.props.status}</span>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

PropertyListItem.propTypes = {
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  code: PropTypes.string,
  status: PropTypes.string
}

export default PropertyListItem;
